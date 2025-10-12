import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { leaderboardData } from './data';

export const LeaderboardSection = () => {
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: 'crown' };
      case 2:
        return { color: 'bg-gray-400/20 text-gray-300 border-gray-400/30', icon: 'medal' };
      case 3:
        return { color: 'bg-orange-500/20 text-orange-400 border-orange-500/30', icon: 'medal' };
      default:
        return { color: 'bg-gray-700/20 text-gray-400 border-gray-600/30', icon: 'user' };
    }
  };

  return (
    <Card variant="static-feature" className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
          Live Leaderboard
        </h2>
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <FontAwesomeIcon icon="circle" className="text-xs" />
          <span>Updated Live</span>
        </div>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((player, index) => {
          const rankBadge = getRankBadge(player.rank);
          return (
            <div
              key={player.id}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:border-blue-500/30 ${
                player.rank <= 3 ? 'scale-[1.02]' : ''
              } ${rankBadge.color}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Rank */}
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 font-bold text-white">
                {player.rank}
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {player.name}
                  </h3>
                  {player.rank <= 3 && (
                    <FontAwesomeIcon icon={rankBadge.icon} className="text-yellow-400" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>Score: <strong className="text-white">{player.score}</strong></span>
                  <span>Wins: <strong className="text-white">{player.wins}</strong></span>
                  <span>Avg: <strong className="text-white">{player.avgTime}</strong></span>
                </div>
              </div>

              {/* Status */}
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                player.status === 'online' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {player.status === 'online' ? 'Playing Now' : 'Offline'}
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Leaderboard */}
      <div className="mt-6 pt-4 border-t border-gray-700/30 text-center">
        <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">
          View Full Leaderboard <FontAwesomeIcon icon="arrow-right" className="ml-1" />
        </button>
      </div>
    </Card>
  );
};