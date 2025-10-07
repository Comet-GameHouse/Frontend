import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Friend } from './types';
import { FriendAvatar } from './FriendAvatar';

interface FriendItemProps {
  friend: Friend;
  index: number;
}

export const FriendItem = ({ friend, index }: FriendItemProps) => {
  return (
    <div
      className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors duration-300 cursor-default"
      data-aos="fade-right"
      data-aos-delay={400 + (index + 1) * 50}
    >
      <div className="flex items-center space-x-4">
        <FriendAvatar avatar={friend.avatar} status={friend.status} />
        <div>
          <h3 className="text-white font-medium">{friend.username}</h3>
          <p className="text-gray-400 text-sm">
            Level {friend.level} •{' '}
            {friend.currentGame ? `Playing ${friend.currentGame}` : 'Offline'}
          </p>
        </div>
      </div>

      <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
        <FontAwesomeIcon icon="comment" className="w-4 h-4" />
      </button>
    </div>
  );
};
