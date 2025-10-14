import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SelectedFilters } from '../types';
import type { LeaderboardEntry } from './types';

interface TableHeaderProps {
  data: LeaderboardEntry[];
  filters: SelectedFilters;
  onSortChange?: (sortBy: string) => void;
}

export const TableHeader = ({ data, filters }: TableHeaderProps) => {
  const getSortIcon = (sortBy: string) => {
    return filters.sortBy === sortBy ? 'caret-down' : 'minus';
  };

  return (
    <div className="bg-gray-900/50 border-b border-gray-700/30 p-4">
      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
        <div className="col-span-1 text-blue-400 text-sm font-bold font-orbitron text-center">
          <FontAwesomeIcon
            icon={getSortIcon('rank')}
            className="mr-2 text-xs"
          />
          Rank
        </div>
        <div className="col-span-4 text-blue-400 text-sm font-bold font-orbitron">
          Player
        </div>
        <div className="col-span-2 text-blue-400 text-sm font-bold font-orbitron text-center">
          <FontAwesomeIcon
            icon={getSortIcon('score')}
            className="mr-2 text-xs"
          />
          Score
        </div>
        <div className="col-span-2 text-blue-400 text-sm font-bold font-orbitron text-center">
          <FontAwesomeIcon
            icon={getSortIcon('winrate')}
            className="mr-2 text-xs"
          />
          Win Rate
        </div>
        <div className="col-span-2 text-blue-400 text-sm font-bold font-orbitron text-center">
          <FontAwesomeIcon
            icon={getSortIcon('games')}
            className="mr-2 text-xs"
          />
          Games
        </div>
        <div className="col-span-1 text-blue-400 text-sm font-bold font-orbitron text-center">
          <FontAwesomeIcon
            icon={getSortIcon('level')}
            className="mr-2 text-xs"
          />
          Level
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden text-blue-400 text-sm font-bold font-orbitron">
        Leaderboard - {data.length} Players
      </div>
    </div>
  );
};
