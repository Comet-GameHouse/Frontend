import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NotificationProps } from './types';
import {
  NOTIFICATION_ICONS,
  NOTIFICATION_BACKGROUNDS,
  NOTIFICATION_BORDERS,
  NOTIFICATION_TEXT_COLORS,
  NOTIFICATION_ICON_BACKGROUNDS,
  NOTIFICATION_ICON_BORDERS,
  NOTIFICATION_PROGRESS_COLORS,
} from './data';

export const Notification = ({
  id,
  message,
  type = 'info',
  duration = 5000,
  position = 'top-right',
  onClose,
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(100);
  const progressRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Enter animation
    const enterTimer = setTimeout(() => setIsVisible(true), 10);

    // Start progress bar
    if (duration > 0) {
      const startTime = Date.now();
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(remaining);

        if (remaining > 0) {
          progressRef.current = setTimeout(updateProgress, 50);
        }
      };
      progressRef.current = setTimeout(updateProgress, 50);
    }

    // Auto close timer
    if (duration > 0) {
      leaveTimerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      clearTimeout(enterTimer);
      if (progressRef.current) clearTimeout(progressRef.current);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, [duration]);

  const handleClose = () => {
    if (isLeaving) return;

    setIsLeaving(true);
    if (progressRef.current) clearTimeout(progressRef.current);
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);

    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getEnterAnimation = () => {
    if (position.includes('right')) return 'translate-x-0';
    if (position.includes('left')) return 'translate-x-0';
    if (position.includes('center')) return 'translate-y-0';
    return 'translate-x-0';
  };

  const getLeaveAnimation = () => {
    if (position.includes('right')) return 'translate-x-full';
    if (position.includes('left')) return '-translate-x-full';
    if (position.includes('center')) return '-translate-y-full';
    return 'translate-x-full';
  };

  const getInitialAnimation = () => {
    if (position.includes('right')) return 'translate-x-full';
    if (position.includes('left')) return '-translate-x-full';
    if (position.includes('center')) return '-translate-y-full';
    return 'translate-x-full';
  };

  return (
    <div
      className={`
        relative transform transition-all duration-300 ease-out
        min-w-80 max-w-md
        ${isVisible ? (isLeaving ? getLeaveAnimation() : getEnterAnimation()) : getInitialAnimation()}
        ${isVisible && !isLeaving ? 'opacity-100' : 'opacity-0'}
        group
      `}
    >
      {/* Main notification */}
      <div
        className={`
        relative p-4 rounded-xl border-l-4 shadow-2xl backdrop-blur-sm
        ${NOTIFICATION_BACKGROUNDS[type]}
        ${NOTIFICATION_BORDERS[type]}
        transform transition-transform duration-300
        ${isVisible && !isLeaving ? 'scale-100' : 'scale-95'}
      `}
      >
        {/* Icon */}
        <div
          className={`
          absolute -left-3 top-1/2 transform -translate-y-1/2
          w-8 h-8 rounded-full flex items-center justify-center
          ${NOTIFICATION_ICON_BACKGROUNDS[type]}
          ${NOTIFICATION_ICON_BORDERS[type]}
          shadow-lg
        `}
        >
          <FontAwesomeIcon
            icon={NOTIFICATION_ICONS[type]}
            className="text-white text-sm"
          />
        </div>

        {/* Content */}
        <div className="ml-6 pr-8">
          <p className={`font-semibold ${NOTIFICATION_TEXT_COLORS[type]}`}>
            {message}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className={`
            absolute right-2 top-2 w-6 h-6 rounded-full
            flex items-center justify-center cursor-pointer
            opacity-70 hover:opacity-100
            transition-all duration-200
            bg-gray-700/50 hover:bg-gray-600/50
            text-gray-300 hover:text-white
            hover:scale-110
          `}
        >
          <FontAwesomeIcon icon="times" className="text-xs" />
        </button>

        {/* Progress bar */}
        {duration > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl overflow-hidden">
            <div
              className={`
                h-full transition-all duration-50
                ${NOTIFICATION_PROGRESS_COLORS[type]}
              `}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
