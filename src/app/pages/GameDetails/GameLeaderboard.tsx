import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { leaderboardData } from './data';

export const GameLeaderboard = () => {
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return { color: 'from-yellow-400 to-yellow-600', icon: 'crown', text: 'text-yellow-400' };
      case 2:
        return { color: 'from-gray-400 to-gray-600', icon: 'medal', text: 'text-gray-300' };
      case 3:
        return { color: 'from-orange-400 to-orange-600', icon: 'medal', text: 'text-orange-400' };
      default:
        return { color: 'from-gray-700 to-gray-800', icon: 'user', text: 'text-gray-400' };
    }
  };

  return (
    <Card variant="static-feature" className="p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white font-orbitron">
          Top Players
        </h2>
        <div className="flex items-center gap-4">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
            <option>This Week</option>
            <option>This Month</option>
            <option>All Time</option>
          </select>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">
            View All
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {leaderboardData.slice(0, 10).map((player, index) => {
          const rankBadge = getRankBadge(player.rank);
          return (
            <div
              key={player.id}
              className={`flex items-center gap-4 p-4 rounded-xl border border-gray-700/30 bg-gradient-to-r ${rankBadge.color} transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                player.rank <= 3 ? 'shadow-lg' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Rank */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-black/30 font-bold ${rankBadge.text} text-sm`}>
                {player.rank}
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-base truncate">
                    {player.name}
                  </h3>
                  {player.rank <= 3 && (
                    <FontAwesomeIcon icon={rankBadge.icon} className="text-yellow-400" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-300">
                  <span>Wins: <strong className="text-white">{player.wins}</strong></span>
                  <span>Matches: <strong className="text-white">{player.gamesPlayed}</strong></span>
                  <span>Win Rate: <strong className="text-green-400">{player.winRate}%</strong></span>
                </div>
              </div>

              {/* Earnings */}
              <div className="text-right">
                <div className="flex items-center gap-1 text-yellow-400 font-bold text-sm">
                  <FontAwesomeIcon icon="coins" />
                  {player.totalEarnings.toLocaleString()} GC
                </div>
                <div className="text-gray-300 text-xs">
                  Total Earnings
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Your Ranking */}
      <div className="mt-6 pt-6 border-t border-gray-700/30">
        <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              47
            </div>
            <div>
              <div className="text-white font-semibold">Your Ranking</div>
              <div className="text-gray-400 text-sm">
                Score: 12,450 • Wins: 45 • Earnings: 8,200 GC
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
            Improve Rank
          </button>
        </div>
      </div>
    </Card>
  );
};