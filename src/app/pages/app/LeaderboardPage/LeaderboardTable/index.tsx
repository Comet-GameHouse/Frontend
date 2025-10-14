import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableEmptyState } from './TableEmptyState';
import type { LeaderboardEntry } from './types';
import type { SelectedFilters } from '../types';

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
  filters: SelectedFilters;
}

export const LeaderboardTable = ({ data, filters }: LeaderboardTableProps) => {
  if (!data || data.length === 0) {
    return <TableEmptyState />;
  }

  return (
    <div
      className="mx-auto bg-gray-800/30 border border-gray-700/30 rounded-xl overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <TableHeader data={data} filters={filters} />

      <div className="max-h-[600px] overflow-y-auto">
        {data.map((entry, index) => (
          <TableRow
            key={entry.id}
            entry={entry}
            index={index}
            isCurrentUser={entry.isCurrentUser}
          />
        ))}
      </div>
    </div>
  );
};
