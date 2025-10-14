import { useState } from 'react';
import { Card, Input } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddFriendsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const inviteLink = `${window.location.origin}/add-friend/user123`;

  const handleSearchFriends = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults([
        {
          id: '1',
          username: searchQuery,
          avatar: '',
          mutualFriends: 3,
          isFriend: false,
        },
      ]);
      setIsSearching(false);
    }, 1000);
  };

  const handleAddFriend = (userId: string) => {
    console.log('Send friend request to:', userId);
    // API call to send friend request
  };

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchFriends();
    }
  };

  return (
    <div className="mb-8 sm:mb-12">
      <Card
        variant="static-feature"
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-xl font-bold text-white font-orbitron mb-6">
          Add Friends
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Search Friends Section */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="w-full">
                <Input
                  type="text"
                  placeholder="Search by username..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-gray-800/50 border-gray-700 text-white"
                  icon="search"
                />
              </div>
              <button
                onClick={handleSearchFriends}
                disabled={!searchQuery.trim() || isSearching}
                className="px-4 bg-blue-500 border border-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <FontAwesomeIcon icon="search" className="text-white text-sm" />
                {isSearching ? '...' : 'Search'}
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
                <h4 className="text-white font-semibold text-sm mb-3">
                  Search Results
                </h4>
                <div className="space-y-3">
                  {searchResults.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 bg-gray-700/20 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">
                            {user.username}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {user.mutualFriends} mutual friends
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddFriend(user.id)}
                        className="px-3 py-1 bg-green-500 border border-green-500 rounded-lg text-white text-xs font-semibold hover:bg-green-600 hover:border-green-600 transition-all duration-300"
                      >
                        Add Friend
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isSearching && (
              <div className="text-center py-4">
                <FontAwesomeIcon
                  icon="spinner"
                  className="text-blue-400 animate-spin text-lg"
                />
                <p className="text-gray-400 text-sm mt-2">Searching...</p>
              </div>
            )}
          </div>

          {/* Invite Link Section */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon="link" className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Your Invite Link
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Share this link to add friends
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inviteLink}
                    readOnly
                    className="flex-1 bg-gray-800/50 border border-gray-700/30 rounded-lg p-3 text-white text-sm"
                  />
                  <button
                    onClick={handleShareLink}
                    className="px-4 bg-green-500 border border-green-500 rounded-lg text-white font-semibold hover:bg-green-600 hover:border-green-600 transition-all duration-300 flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={copied ? 'check' : 'copy'} />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Quick Share Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        `https://discord.com/channels/@me?message=${encodeURIComponent(`Join me on Comet-GameHouse! ${inviteLink}`)}`,
                        '_blank'
                      )
                    }
                    className="flex-1 py-2 bg-indigo-500 border border-indigo-500 rounded-lg text-white text-xs font-semibold hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={['fab', 'discord']} />
                    Share on Discord
                  </button>
                </div>
              </div>
            </div>

            {/* Invite Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-white font-orbitron">
                  12
                </div>
                <div className="text-gray-400 text-xs">Friends Invited</div>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-white font-orbitron">
                  500
                </div>
                <div className="text-gray-400 text-xs">Coins Earned</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
