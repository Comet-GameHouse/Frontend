import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notifications } from './data';

export const NotificationsHeader = () => {
  const unreadCount = notifications.filter(n => !n.read).length;
  const totalCount = notifications.length;

  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="bell"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Notifications
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Stay updated with your gaming activity
      </p>

      {/* Notification Stats */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {unreadCount}
          </div>
          <div className="text-orange-400 text-xs">Unread</div>
        </div>
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {totalCount}
          </div>
          <div className="text-blue-400 text-xs">Total</div>
        </div>
      </div>
    </div>
  );
};