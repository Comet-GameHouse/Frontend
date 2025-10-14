import { useState } from 'react';
import { Card, Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GameDetail } from './types';
import { roomEntryFees, activeRooms, friendsList, roomPlayerCounts } from './data';

interface GameRoomsProps {
  game: GameDetail;
}

export const GameRooms = ({ game }: GameRoomsProps) => {
  const [selectedFee, setSelectedFee] = useState<number>(10);
  const [roomType, setRoomType] = useState<'random' | 'custom'>('random');
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const [showFriendSelector, setShowFriendSelector] = useState(false);

  const handleJoinRandom = (fee: number) => {
    console.log(`Joining random room with fee: ${fee} GC`);
    // Implementation for joining random room
  };

  const handleCreateCustom = (fee: number) => {
    if (roomType === 'custom' && selectedFriends.length === 0) {
      setShowFriendSelector(true);
      return;
    }
    console.log(`Creating custom room with fee: ${fee} GC and friends:`, selectedFriends);
    // Implementation for creating custom room
  };

  const toggleFriendSelection = (friendId: string) => {
    setSelectedFriends(prev => 
      prev.includes(friendId) 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  const getPlayerCountForFee = (fee: number) => {
    return roomPlayerCounts[fee] || 0;
  };

  return (
    <div className="space-y-8">
      {/* Quick Join Section */}
      <Card variant="static-feature" className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white font-orbitron mb-2">
          Quick Play
        </h2>
        <p className="text-gray-400 mb-6">
          Join a random match or create your own room to play with friends
        </p>

        {/* Room Type Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRoomType('random')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
              roomType === 'random'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            <FontAwesomeIcon icon="random" className="mr-2" />
            Random Match
          </button>
          <button
            onClick={() => setRoomType('custom')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
              roomType === 'custom'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            <FontAwesomeIcon icon="user-friends" className="mr-2" />
            Custom Room
          </button>
        </div>

        {/* Entry Fee Selection */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-4">Select Entry Fee</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {roomEntryFees.map((fee) => (
              <button
                key={fee}
                onClick={() => setSelectedFee(fee)}
                className={`py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  selectedFee === fee
                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:scale-105'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <FontAwesomeIcon icon="coins" className="text-sm" />
                  {fee.toLocaleString()} GC
                </div>
                {/* Active Players Count */}
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getPlayerCountForFee(fee)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Friend Selector for Custom Rooms */}
        {roomType === 'custom' && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Select Friends to Invite</h3>
              <span className="text-gray-400 text-sm">
                {selectedFriends.length} selected
              </span>
            </div>
            
            {showFriendSelector && (
              <div className="max-h-48 overflow-y-auto space-y-2 mb-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30">
                {friendsList.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/30 cursor-pointer transition-colors duration-200"
                    onClick={() => toggleFriendSelection(friend.id)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedFriends.includes(friend.id)}
                      onChange={() => {}}
                      className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{friend.name}</div>
                      <div className="text-gray-400 text-xs">{friend.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!showFriendSelector && (
              <button
                onClick={() => setShowFriendSelector(true)}
                className="w-full py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-400 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon="user-plus" />
                Select Friends to Invite
              </button>
            )}

            {/* Selected Friends Preview */}
            {selectedFriends.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {friendsList
                  .filter(friend => selectedFriends.includes(friend.id))
                  .map(friend => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      <span className="text-blue-400 text-sm">{friend.name}</span>
                      <button
                        onClick={() => toggleFriendSelection(friend.id)}
                        className="text-blue-300 hover:text-blue-200 text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        {roomType === 'random' ? (
          <Button
            variant="primary"
            icon="play"
            size="lg"
            className="w-full justify-center py-4 text-lg"
            onClick={() => handleJoinRandom(selectedFee)}
          >
            Join Random Match ({selectedFee.toLocaleString()} GC)
          </Button>
        ) : (
          <Button
            variant="secondary"
            icon="plus"
            size="lg"
            className="w-full justify-center py-4 text-lg"
            onClick={() => handleCreateCustom(selectedFee)}
          >
            Create Custom Room ({selectedFee.toLocaleString()} GC)
          </Button>
        )}

        {/* Prize Info */}
        <div className="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Potential Prize:</span>
            <span className="text-yellow-400 font-bold">
              {(selectedFee * game.playerCount * 2 * 0.9).toLocaleString()} GC
            </span>
          </div>
          <div className="text-gray-500 text-xs mt-1">
            * 90% of total entry fees distributed to winners
          </div>
        </div>
      </Card>

      {/* My Rooms & Invitations */}
      <Card variant="static-feature" className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-orbitron">
            My Rooms & Invitations
          </h2>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <FontAwesomeIcon icon="bell" className="text-xs" />
            <span>Your Rooms</span>
          </div>
        </div>

        {activeRooms.length === 0 ? (
          <div className="text-center py-12">
            <FontAwesomeIcon icon="door-open" className="text-gray-500 text-4xl mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">No Active Rooms</h3>
            <p className="text-gray-400">Create a room or wait for friend invitations</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activeRooms.map((room, index) => (
              <div
                key={room.id}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4">
                  {/* Room Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    room.creator === 'You' 
                      ? 'bg-green-500/20 border border-green-500/30' 
                      : 'bg-purple-500/20 border border-purple-500/30'
                  }`}>
                    <FontAwesomeIcon 
                      icon={room.creator === 'You' ? 'crown' : 'user-friends'} 
                      className={room.creator === 'You' ? 'text-green-400' : 'text-purple-400'}
                    />
                  </div>

                  {/* Room Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold">
                        {room.creator === 'You' ? 'Your Room' : `Invite from ${room.creator}`}
                      </h3>
                      {room.passwordProtected && (
                        <FontAwesomeIcon icon="lock" className="text-yellow-400 text-xs" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Entry: <strong className="text-yellow-400">{room.entryFee} GC</strong></span>
                      <span>Players: <strong className="text-white">{room.currentPlayers}/{room.maxPlayers}</strong></span>
                      <span>Prize: <strong className="text-green-400">{room.potentialPrize} GC</strong></span>
                      {room.invitedFriends && (
                        <span className="text-blue-400">
                          With: {room.invitedFriends.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex gap-2">
                  {room.creator === 'You' ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-300"
                    >
                      Manage
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      className="group-hover:scale-105 transition-transform duration-300"
                    >
                      Join Room
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Room Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="static-feature" className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-400 font-orbitron mb-2">
            {Object.values(roomPlayerCounts).reduce((sum, count) => sum + count, 0)}
          </div>
          <div className="text-gray-400 text-sm">Players in Random Matches</div>
        </Card>
        <Card variant="static-feature" className="p-6 text-center">
          <div className="text-3xl font-bold text-green-400 font-orbitron mb-2">
            {activeRooms.length}
          </div>
          <div className="text-gray-400 text-sm">Your Active Rooms</div>
        </Card>
        <Card variant="static-feature" className="p-6 text-center">
          <div className="text-3xl font-bold text-yellow-400 font-orbitron mb-2">
            {activeRooms.reduce((sum, room) => sum + room.potentialPrize, 0).toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">Total Prize Pool</div>
        </Card>
      </div>
    </div>
  );
};