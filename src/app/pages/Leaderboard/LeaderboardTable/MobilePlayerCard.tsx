import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { LeaderboardEntry } from './types';
import { Card } from '@components';

interface MobilePlayerCardProps {
  entry: LeaderboardEntry;
  index: number;
  isCurrentUser?: boolean;
}

export const MobilePlayerCard = ({
  entry,
  index,
  isCurrentUser,
}: MobilePlayerCardProps) => {
  return (
    <Card
      variant="clickable"
      className="m-3 p-3 "
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Compact Header Row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Rank */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg border ${
              entry.rank === 1
                ? 'text-yellow-500 bg-yellow-500/20 border-yellow-500/50'
                : entry.rank === 2
                  ? 'text-gray-400 bg-gray-400/20 border-gray-400/50'
                  : entry.rank === 3
                    ? 'text-amber-700 bg-amber-700/20 border-amber-700/50'
                    : 'text-white bg-gray-700/50 border-gray-600/50'
            }`}
          >
            {entry.rank <= 3 ? (
              <FontAwesomeIcon icon="crown" className="text-xs" />
            ) : (
              <span className="font-bold text-xs">#{entry.rank}</span>
            )}
          </div>

          {/* Avatar */}
          <span className="text-xl">{entry.avatar}</span>

          {/* Player Name */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-white font-medium text-sm truncate">
                {entry.playerName}
              </span>
              {isCurrentUser && (
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shrink-0">
                  YOU
                </span>
              )}
            </div>
            <p className="text-gray-400 text-xs truncate">
              {entry.favoriteGame}
            </p>
          </div>
        </div>

        {/* Level Badge */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ml-2 shrink-0">
          {entry.level}
        </div>
      </div>

      {/* Compact Stats Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Score */}
          <div className="text-center">
            <div className="text-white font-bold text-sm font-orbitron">
              {entry.score.toLocaleString()}
            </div>
            <div className="text-gray-400 text-xs">Score</div>
          </div>

          {/* Win Rate with mini bar */}
          <div className="text-center">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-white font-bold text-xs">
                {entry.winRate}%
              </span>
            </div>
            <div className="w-12 bg-gray-700 rounded-full h-1">
              <div
                className={`h-1 rounded-full ${
                  entry.winRate >= 70
                    ? 'bg-green-500'
                    : entry.winRate >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                }`}
                style={{ width: `${entry.winRate}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Games & Status */}
        <div className="text-right">
          <div className="text-white text-xs font-medium">
            {entry.gamesPlayed} games
          </div>
          <div className="text-gray-400 text-xs flex items-center justify-end gap-1">
            {entry.isOnline ? (
              <>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
              </>
            ) : (
              <span>Offline</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
