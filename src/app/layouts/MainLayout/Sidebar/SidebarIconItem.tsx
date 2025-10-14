import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SidebarItem } from './types';
import { transitionStyles } from './data';

interface SidebarIconItemProps {
  item: SidebarItem;
  isOpen: boolean;
}

export const SidebarIconItem = ({ item, isOpen }: SidebarIconItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`
        relative flex items-center justify-center
        w-12 h-12 rounded-xl
        text-gray-400
        border-2 border-transparent
        hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30
        hover:scale-105
        ${transitionStyles}
        ${isActive ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : ''}
      `}
    >
      {/* Icon */}
      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />

      {/* Badge */}
      {item.badge && item.badge > 0 && (
        <span
          className={`
          absolute -top-1 -right-1
          w-5 h-5 rounded-full
          bg-red-500 text-white text-xs
          flex items-center justify-center
          font-semibold
          ${transitionStyles}
          ${isOpen ? 'scale-100' : 'scale-90'}
        `}
        >
          {item.badge > 99 ? '99+' : item.badge}
        </span>
      )}

      {/* Tooltip */}
      {isOpen && (
        <div
          className={`
          absolute left-full ml-3
          bg-gray-800 text-white text-sm
          px-3 py-2 rounded-lg
          whitespace-nowrap
          opacity-0 pointer-events-none
          group-hover:opacity-100
          ${transitionStyles}
          shadow-2xl border border-gray-700
        `}
        >
          {item.label}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45" />
        </div>
      )}
    </Link>
  );
};
