import type { RecentGame } from './types';
import { RecentGameItem } from './RecentGameItem';
import { DashboardSectionHeader } from '@components';

interface RecentGamesListProps {
  games: RecentGame[];
}

export const RecentGamesList = ({ games }: RecentGamesListProps) => {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <DashboardSectionHeader title="Recent Games" actionText="View All" />
      <div className="space-y-3">
        {games.map((game, index) => (
          <RecentGameItem key={game.id} game={game} index={index} />
        ))}
      </div>
    </div>
  );
};
