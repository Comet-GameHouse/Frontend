import type { Friend } from './types';
import { FriendItem } from './FriendItem';
import { DashboardSectionHeader } from '@components';

interface FriendsListProps {
  friends: Friend[];
}

export const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="400"
    >
      <DashboardSectionHeader title="Friends" actionText="View All" />
      <div className="space-y-3">
        {friends.map((friend, index) => (
          <FriendItem key={friend.id} friend={friend} index={index} />
        ))}
      </div>
    </div>
  );
};
