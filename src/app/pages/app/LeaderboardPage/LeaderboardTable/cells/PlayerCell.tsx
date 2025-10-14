import type { LeaderboardEntry } from '../types';

interface PlayerCellProps {
  player: LeaderboardEntry;
  isCurrentUser?: boolean;
}

export const PlayerCell = ({ player, isCurrentUser }: PlayerCellProps) => {
  return (
    <div className="col-span-4 flex items-center gap-3">
      <span className="text-xl">{player.avatar}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium truncate">
            {player.playerName}
          </span>
          {isCurrentUser && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold shrink-0">
              YOU
            </span>
          )}
          {player.isOnline && (
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Online" />
          )}
        </div>
        <div className="text-gray-400 text-sm truncate">
          {player.favoriteGame}
        </div>
      </div>
    </div>
  );
};