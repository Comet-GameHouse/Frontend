import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';

import { DIALOG_SIZES } from './data';
import type { DialogSize } from './types';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: DialogSize;
  showCloseButton?: boolean;
  overlayBlur?: boolean;
  overlayDark?: boolean;
  preventClose?: boolean;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  overlayBlur = true,
  overlayDark = true,
  preventClose = false,
}: DialogProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      AOS.refresh(); // Refresh AOS to detect new elements
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 200,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // Close handlers (same as before)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !preventClose) {
        onClose();
      }
    };

    if (isMounted) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMounted, onClose, preventClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !preventClose) {
      onClose();
    }
  };

  if (!isMounted) return null;

  return createPortal(
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4 
        ${overlayDark ? 'bg-black/70' : 'bg-black/40'} 
        ${overlayBlur ? 'backdrop-blur-sm' : ''}
        ${isOpen ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={handleOverlayClick}
      data-aos="fade-in"
    >
      <div
        className={`
          bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl
          ${DIALOG_SIZES[size]}
          w-full max-h-[90vh] overflow-hidden flex flex-col
        `}
        data-aos="zoom-in"
        data-aos-duration="100"
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-900/50">
            {title && (
              <h2 className="text-xl font-bold text-white font-orbitron tracking-wide">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                disabled={preventClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 group"
                aria-label="Close dialog"
              >
                <FontAwesomeIcon
                  icon="times"
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
};
