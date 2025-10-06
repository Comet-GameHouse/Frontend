import type {
  ProfileStats as ProfileStatsType,
  StatCard as StatCardType,
} from './types';
import { StatCard } from './StatCard';

interface ProfileStatsCardsProps {
  stats: ProfileStatsType;
}

export const ProfileStatsCards = ({ stats }: ProfileStatsCardsProps) => {
  const statCards = [
    {
      label: 'Total Games',
      value: stats.totalGames,
      icon: 'gamepad',
      color: 'from-blue-500 to-cyan-500',
      description: 'Games Played',
    },
    {
      label: 'Win Rate',
      value: `${stats.winRate}%`,
      icon: 'trophy',
      color: 'from-green-500 to-emerald-500',
      description: 'Victory Ratio',
    },
    {
      label: 'Current Streak',
      value: stats.currentStreak,
      icon: 'fire',
      color: 'from-orange-500 to-red-500',
      description: 'Wins in a Row',
    },
    {
      label: 'Total Play Time',
      value: stats.totalPlayTime,
      icon: 'clock',
      color: 'from-purple-500 to-pink-500',
      description: 'Time Invested',
    },
    {
      label: 'Tournaments Won',
      value: stats.tournamentsWon,
      icon: 'award',
      color: 'from-yellow-500 to-amber-500',
      description: 'Events Won',
    },
    {
      label: 'Max Score',
      value: stats.maxScore.toLocaleString(),
      icon: 'star',
      color: 'from-indigo-500 to-blue-500',
      description: 'Best Performance',
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
    >
      {statCards.map((card, index) => (
        <StatCard key={card.label} card={card as StatCardType} index={index} />
      ))}
    </div>
  );
};
