import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { friendsList } from './data';
import type { Friend } from './types';

export const FriendsList = () => {
  const getStatusColor = (status: Friend['status']) => {
    switch (status) {
      case 'online':
        return 'green';
      case 'ingame':
        return 'blue';
      case 'away':
        return 'yellow';
      case 'offline':
        return 'gray';
      default:
        return 'gray';
    }
  };

  const getStatusIcon = (status: Friend['status']) => {
    switch (status) {
      case 'online':
        return 'wifi';
      case 'ingame':
        return 'gamepad';
      case 'away':
        return 'clock';
      case 'offline':
        return 'moon';
      default:
        return 'circle';
    }
  };

  const handleMessage = (friendId: string) => {
    console.log('Message friend:', friendId);
    // Open chat or redirect to messages
  };

  const handlePlay = (friendId: string) => {
    console.log('Play with friend:', friendId);
    // Invite to game or join game
  };

  const handleRemove = (friendId: string) => {
    console.log('Remove friend:', friendId);
    // API call to remove friend
  };

  // Group friends by status
  const onlineFriends = friendsList.filter(
    (f) => f.status === 'online' || f.status === 'ingame'
  );
  const offlineFriends = friendsList.filter(
    (f) => f.status === 'away' || f.status === 'offline'
  );

  return (
    <div className="mb-8 sm:mb-12">
      <Card
        variant="static-feature"
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-xl font-bold text-white font-orbitron mb-6">
          Friends List
        </h2>

        {/* Online Friends */}
        {onlineFriends.length > 0 && (
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold text-sm mb-4">
              Online ({onlineFriends.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {onlineFriends.map((friend, index) => (
                <FriendCard
                  key={friend.id}
                  friend={friend}
                  getStatusColor={getStatusColor}
                  getStatusIcon={getStatusIcon}
                  onMessage={handleMessage}
                  onPlay={handlePlay}
                  onRemove={handleRemove}
                  delay={250 + index * 50}
                />
              ))}
            </div>
          </div>
        )}

        {/* Offline Friends */}
        {offlineFriends.length > 0 && (
          <div>
            <h3 className="text-gray-400 font-semibold text-sm mb-4">
              Offline ({offlineFriends.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offlineFriends.map((friend, index) => (
                <FriendCard
                  key={friend.id}
                  friend={friend}
                  getStatusColor={getStatusColor}
                  getStatusIcon={getStatusIcon}
                  onMessage={handleMessage}
                  onPlay={handlePlay}
                  onRemove={handleRemove}
                  delay={300 + index * 50}
                />
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

// Friend Card Component
const FriendCard = ({
  friend,
  getStatusColor,
  getStatusIcon,
  onMessage,
  onPlay,
  onRemove,
  delay,
}: any) => (
  <div
    className="flex items-center justify-between p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl hover:border-blue-500/30 transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center gap-3">
      <div className="relative">
        {/* Avatar with fallback to initials */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          {friend.avatar ? (
            <img
              src={friend.avatar}
              alt={friend.username}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-semibold text-sm tracking-wide">
              {friend.username.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* Enhanced Status Indicator with Glow */}
        <div
          className={`
    absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 
    flex items-center justify-center shadow-lg
    ${friend.status === 'online' ? 'bg-green-500 ring-2 ring-green-500/30 animate-pulse' : ''}
    ${friend.status === 'ingame' ? 'bg-blue-500 ring-2 ring-blue-500/30' : ''}
    ${friend.status === 'away' ? 'bg-yellow-500 ring-2 ring-yellow-500/30' : ''}
    ${friend.status === 'offline' ? 'bg-gray-500' : ''}
  `}
        >
          <FontAwesomeIcon
            icon={getStatusIcon(friend.status)}
            className="text-white text-[8px]"
          />
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm">{friend.username}</h4>
        <p className="text-gray-400 text-xs">
          {friend.status === 'ingame' ? (
            <span className="text-blue-400">Playing {friend.game}</span>
          ) : friend.status === 'online' ? (
            <span className="text-green-400">Online</span>
          ) : (
            `Last online: ${friend.lastOnline}`
          )}
        </p>
      </div>
    </div>

    <div className="flex gap-2">
      {(friend.status === 'online' || friend.status === 'ingame') && (
        <>
          <button
            onClick={() => onMessage(friend.id)}
            className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            title="Send message"
          >
            <FontAwesomeIcon icon="comment" className="text-white text-xs" />
          </button>
          <button
            onClick={() => onPlay(friend.id)}
            className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
            title="Play together"
          >
            <FontAwesomeIcon icon="gamepad" className="text-white text-xs" />
          </button>
        </>
      )}
      <button
        onClick={() => onRemove(friend.id)}
        className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
        title="Remove friend"
      >
        <FontAwesomeIcon icon="user-minus" className="text-gray-400 text-xs" />
      </button>
    </div>
  </div>
);
