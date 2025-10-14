import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notificationCategories, notifications } from './data';
import type { Notification } from './types';

interface Props {
  selectedCategory: string;
  filterRead: boolean;
}

export const NotificationsList = ({ selectedCategory, filterRead }: Props) => {
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'friend_request':
        return 'user-plus';
      case 'game_invite':
        return 'gamepad';
      case 'tournament':
        return 'trophy';
      case 'achievement':
        return 'award';
      case 'system':
        return 'cog';
      case 'message':
        return 'comment';
      default:
        return 'bell';
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'friend_request':
        return 'blue';
      case 'game_invite':
        return 'green';
      case 'tournament':
        return 'yellow';
      case 'achievement':
        return 'purple';
      case 'system':
        return 'orange';
      case 'message':
        return 'cyan';
      default:
        return 'gray';
    }
  };

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'gray';
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    console.log('Notification clicked:', notification.id);
    // Mark as read, navigate to action, etc.
  };

  const handleAction = (notification: Notification, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Action for:', notification.id);
    // Handle accept, join, etc.
  };

  // Filter notifications based on category and read status
  const filteredNotifications = notifications.filter((notification) => {
    if (filterRead && notification.read) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'unread') return !notification.read;
    if (selectedCategory === 'friends')
      return notification.type === 'friend_request';
    if (selectedCategory === 'games')
      return notification.type === 'game_invite';
    if (selectedCategory === 'tournaments')
      return notification.type === 'tournament';
    if (selectedCategory === 'system') return notification.type === 'system';

    return true;
  });

  if (filteredNotifications.length === 0) {
    return (
      <div className="flex-1">
        <Card
          variant="static-feature"
          className="text-center py-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FontAwesomeIcon
            icon="bell-slash"
            className="text-gray-500 text-4xl mb-4"
          />
          <h3 className="text-white font-semibold text-lg mb-2">
            No Notifications
          </h3>
          <p className="text-gray-400 text-sm">
            {filterRead ? 'No unread notifications' : "You're all caught up!"}
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <Card variant="static-feature" data-aos="fade-up" data-aos-delay="200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white font-orbitron">
            {selectedCategory === 'all'
              ? 'All Notifications'
              : selectedCategory === 'unread'
                ? 'Unread Notifications'
                : notificationCategories.find((c) => c.id === selectedCategory)
                    ?.name}
          </h2>
          <span className="text-gray-400 text-sm">
            {filteredNotifications.length} items
          </span>
        </div>

        <div className="space-y-3">
          {filteredNotifications.map((notification, index) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all duration-300 group ${
                notification.read
                  ? 'bg-gray-800/20 border-gray-700/30 hover:border-gray-500/30'
                  : 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
              }`}
              data-aos="fade-up"
              data-aos-delay={250 + index * 50}
            >
              {/* Notification Icon */}
              <div
                className={`w-10 h-10 bg-${getNotificationColor(notification.type)}-500/20 border border-${getNotificationColor(notification.type)}-500/30 rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <FontAwesomeIcon
                  icon={getNotificationIcon(notification.type)}
                  className={`text-${getNotificationColor(notification.type)}-400 text-sm`}
                />
              </div>

              {/* Notification Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3
                    className={`font-semibold text-sm ${
                      notification.read ? 'text-white' : 'text-white font-bold'
                    }`}
                  >
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <div
                      className={`w-2 h-2 bg-${getPriorityColor(notification.priority)}-500 rounded-full flex-shrink-0`}
                    />
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                  {notification.description}
                </p>

                {/* Sender Info */}
                {notification.sender && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {notification.sender.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">
                      {notification.sender.username}
                    </span>
                  </div>
                )}

                {/* Game Info */}
                {notification.game && (
                  <div className="text-blue-400 text-xs mb-2">
                    Game: {notification.game}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">
                    {notification.timestamp}
                  </span>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {notification.type === 'friend_request' && (
                      <>
                        <button
                          onClick={(e) => handleAction(notification, e)}
                          className="px-3 py-1 bg-green-500 border border-green-500 rounded text-white text-xs font-semibold hover:bg-green-600 transition-all duration-300"
                        >
                          Accept
                        </button>
                        <button
                          onClick={(e) => handleAction(notification, e)}
                          className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-gray-300 text-xs font-semibold hover:bg-gray-600 transition-all duration-300"
                        >
                          Decline
                        </button>
                      </>
                    )}
                    {notification.type === 'game_invite' && (
                      <button
                        onClick={(e) => handleAction(notification, e)}
                        className="px-3 py-1 bg-blue-500 border border-blue-500 rounded text-white text-xs font-semibold hover:bg-blue-600 transition-all duration-300"
                      >
                        Join Game
                      </button>
                    )}
                    {notification.actionUrl && (
                      <button
                        onClick={(e) => handleAction(notification, e)}
                        className="px-3 py-1 bg-orange-500 border border-orange-500 rounded text-white text-xs font-semibold hover:bg-orange-600 transition-all duration-300"
                      >
                        View
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Read Status Indicator */}
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bulk Actions */}
        {filteredNotifications.some((n) => !n.read) && (
          <div className="border-t border-gray-700/30 pt-4 mt-6">
            <button className="w-full py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 text-sm font-semibold hover:bg-gray-600 transition-all duration-300">
              Mark All as Read
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};
