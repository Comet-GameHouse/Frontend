import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { friendRequests } from './data';
import type { FriendRequest } from './types';

export const FriendRequests = () => {
  const handleAccept = (requestId: string) => {
    console.log('Accept friend request:', requestId);
    // API call to accept friend request
  };

  const handleDecline = (requestId: string) => {
    console.log('Decline friend request:', requestId);
    // API call to decline friend request
  };

  if (friendRequests.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 sm:mb-12">
      <Card
        variant="static-feature"
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white font-orbitron">
            Friend Requests ({friendRequests.length})
          </h2>
          <FontAwesomeIcon
            icon="user-plus"
            className="text-blue-400 text-lg sm:text-xl"
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
          {friendRequests.map((request, index) => (
            <div
              key={request.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-4 bg-gray-800/30 border border-gray-700/30 rounded-xl gap-4 sm:gap-6"
              data-aos="fade-up"
              data-aos-delay={250 + index * 50}
            >
              {/* User Info */}
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex shrink-0 items-center justify-center">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {request.fromUser.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {request.fromUser.username}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">
                    <span className="hidden xs:inline">
                      {request.mutualFriends} mutual friends • {request.sentAt}
                    </span>
                    <span className="xs:hidden">
                      {request.mutualFriends} mutual • {request.sentAt}
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => handleAccept(request.id)}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-green-500 border border-green-500 rounded-lg text-white text-xs sm:text-sm font-semibold hover:bg-green-600 hover:border-green-600 transition-all duration-300 whitespace-nowrap"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(request.id)}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 text-xs sm:text-sm font-semibold hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 whitespace-nowrap"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Optimized View for multiple requests */}
        {friendRequests.length > 2 && (
          <div className="mt-4 pt-4 border-t border-gray-700/30 sm:hidden">
            <p className="text-gray-400 text-xs text-center">
              Scroll to see more requests
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};
