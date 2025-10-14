import { StatItem } from './StatItem';
import type { UserStats } from './types';

interface StatsGridProps {
  stats: UserStats;
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  const statItems = [
    { value: stats.gamesPlayed, label: 'Games Played', color: 'text-white' },
    { value: stats.wins, label: 'Wins', color: 'text-green-400' },
    { value: stats.losses, label: 'Losses', color: 'text-red-400' },
    { value: `${stats.winRate}%`, label: 'Win Rate', color: 'text-yellow-400' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
        <StatItem key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
};
