import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GameDetail } from './types';

interface GameStatsProps {
  game: GameDetail;
}

export const GameStats = ({ game }: GameStatsProps) => {
  const stats = [
    {
      label: 'Active Players',
      value: game.activePlayers.toLocaleString(),
      color: 'text-green-400',
      icon: 'users'
    },
    {
      label: 'Total Matches',
      value: game.totalMatches.toLocaleString(),
      color: 'text-blue-400',
      icon: 'gamepad'
    },
    {
      label: 'Battle Type',
      value: game.playerCount === 1 ? '1:1' : `${game.playerCount}:${game.playerCount}`,
      color: 'text-purple-400',
      icon: 'users'
    },
    {
      label: 'Success Rate',
      value: `${game.successRate}%`,
      color: 'text-yellow-400',
      icon: 'trophy'
    },
    {
      label: 'GameCoins Won',
      value: game.totalCoins.toLocaleString(),
      color: 'text-yellow-400',
      icon: 'coins'
    },
    {
      label: 'Avg. Match',
      value: game.avgGameTime,
      color: 'text-cyan-400',
      icon: 'clock'
    }
  ];

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 sm:mb-12 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          variant="static-feature"
          className="text-center p-4 hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay={250 + (index * 50)}
        >
          <div className={`text-xl sm:text-2xl font-bold font-orbitron mb-1 ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-gray-400 text-xs flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={stat.icon} className="text-xs" />
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
};