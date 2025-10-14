import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { friendsList } from './data';

export const FriendsHeader = () => {
  const onlineCount = friendsList.filter(friend => friend.status === 'online' || friend.status === 'ingame').length;
  const totalCount = friendsList.length;

  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="users"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Friends
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Connect and play with your gaming friends
      </p>

      {/* Friends Stats */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {onlineCount}
          </div>
          <div className="text-green-400 text-xs">Online Now</div>
        </div>
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {totalCount}
          </div>
          <div className="text-blue-400 text-xs">Total Friends</div>
        </div>
      </div>
    </div>
  );
};