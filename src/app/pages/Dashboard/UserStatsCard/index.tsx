import type { UserStats } from './types';
import { LevelProgress } from './LevelProgress';
import { StatsGrid } from './StatsGrid';
import { CoinBalance } from './CoinBalance';
import { DashboardSectionHeader } from '@components';

interface UserStatsCardProps {
  stats: UserStats;
}

export const UserStatsCard = ({ stats }: UserStatsCardProps) => {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <DashboardSectionHeader title="Player Stats" />
      <LevelProgress
        level={stats.level}
        experience={stats.experience}
        nextLevelExp={stats.nextLevelExp}
      />
      <StatsGrid stats={stats} />
      <CoinBalance coins={stats.totalCoins} />
    </div>
  );
};
