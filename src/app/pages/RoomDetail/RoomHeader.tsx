import { Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { RoomDetail } from './types';

interface RoomHeaderProps {
  room: RoomDetail;
  onLeaveRoom: () => void;
}

export const RoomHeader = ({ room, onLeaveRoom }: RoomHeaderProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'playing':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'finished':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-800/30 rounded-xl sm:rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <FontAwesomeIcon
              icon="door-open"
              className="text-white text-xl sm:text-2xl"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-orbitron">
                Room #{room.id}
              </h1>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(room.status)}`}
              >
                {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <FontAwesomeIcon icon="coins" />
                <span className="text-yellow-400 font-semibold">
                  {room.entryFee} GC Entry
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FontAwesomeIcon icon="trophy" />
                <span className="text-green-400 font-semibold">
                  {room.potentialPrize} GC Prize
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FontAwesomeIcon icon="users" />
                <span>
                  {room.currentPlayers}/{room.maxPlayers} Players
                </span>
              </div>
              {room.creator && (
                <div className="flex items-center gap-2 text-gray-400">
                  <FontAwesomeIcon icon="crown" />
                  <span className="text-purple-400">Host: {room.creator}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Button
          variant="danger"
          icon="sign-out-alt"
          size="lg"
          onClick={onLeaveRoom}
          className="sm:self-start"
        >
          Leave Room
        </Button>
      </div>
    </div>
  );
};
