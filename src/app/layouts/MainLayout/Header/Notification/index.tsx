import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@components';
import type { Notification as NotificationType } from './types';
import { mockNotifications } from './data';

export const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] =
    useState<NotificationType[]>(mockNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'tournament':
        return 'trophy';
      case 'achievement':
        return 'star';
      case 'friend':
        return 'user-friends';
      case 'system':
        return 'cog';
      case 'reward':
        return 'gift';
      default:
        return 'bell';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'tournament':
        return 'text-yellow-400';
      case 'achievement':
        return 'text-purple-400';
      case 'friend':
        return 'text-blue-400';
      case 'system':
        return 'text-gray-400';
      case 'reward':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor(
      (now.getTime() - time.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
      >
        <FontAwesomeIcon icon="bell" className="text-lg" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl z-50 animate-in fade-in-0 zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <h3 className="text-white font-semibold text-lg font-orbitron">
              Notifications
            </h3>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200"
                >
                  Mark all read
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-200"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <FontAwesomeIcon
                  icon="bell-slash"
                  className="text-gray-500 text-3xl mb-3"
                />
                <p className="text-gray-400 text-sm">No notifications</p>
                <p className="text-gray-500 text-xs mt-1">
                  We'll notify you when something arrives
                </p>
              </div>
            ) : (
              <div className="p-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                      notification.read
                        ? 'bg-transparent hover:bg-gray-800/30'
                        : 'bg-blue-500/10 hover:bg-blue-500/20'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex gap-3">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                          notification.read ? 'bg-gray-800' : 'bg-blue-500/20'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={getNotificationIcon(notification.type)}
                          className={`text-sm ${getNotificationColor(notification.type)}`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium mb-1 ${
                            notification.read ? 'text-gray-300' : 'text-white'
                          }`}
                        >
                          {notification.title}
                        </p>
                        <p className="text-gray-400 text-xs line-clamp-2 mb-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">
                            {getTimeAgo(notification.timestamp)}
                          </span>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {notification.actions && (
                      <div className="flex gap-2 mt-3 pl-13">
                        {notification.actions.map((action, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick();
                            }}
                            className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-xs rounded-lg transition-colors duration-200 font-semibold"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-700/50">
              <button className="w-full py-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200 rounded-lg hover:bg-gray-800/30">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
