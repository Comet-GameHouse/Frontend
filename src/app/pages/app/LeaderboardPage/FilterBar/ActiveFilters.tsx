import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { filterCategories } from './data';
import type { SelectedFilters } from '../types';

interface ActiveFiltersProps {
  selectedFilters: SelectedFilters;
  onFilterChange: (category: string, value: string) => void;
  onClearAll: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const ActiveFilters = ({
  selectedFilters,
  onFilterChange,
  onClearAll,
  searchQuery,
  onSearchChange,
}: ActiveFiltersProps) => {
  const getFilterLabel = (categoryId: string, value: string) => {
    const category = filterCategories.find((cat) => cat.id === categoryId);
    const option = category?.options.find((opt) => opt.value === value);
    return option?.label || value;
  };

  const activeFilters = Object.entries(selectedFilters)
    .filter(([key, value]) => {
      const defaults = {
        timeFrame: 'all-time',
        gameType: 'all',
        region: 'global',
        sortBy: 'rank',
      };
      return value !== defaults[key as keyof typeof defaults];
    })
    .map(([key, value]) => ({
      category: key,
      value,
      label: getFilterLabel(key, value),
    }));

  const hasSearchQuery = searchQuery.length > 0;
  const hasFilterChanges = activeFilters.length > 0;

  if (!hasSearchQuery && !hasFilterChanges) return null;

  return (
    <div className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon="filter" className="text-blue-400 text-sm" />
          <span className="text-white font-orbitron text-sm font-medium">
            Active Filters:
          </span>
          <div className="flex flex-wrap gap-2">
            {/* Search Query Chip */}
            {hasSearchQuery && (
              <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-blue-500/30">
                <span className="max-w-60 text-ellipsis whitespace-nowrap overflow-hidden">
                  Search: "{searchQuery}"
                </span>
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-blue-300 transition-colors"
                >
                  <FontAwesomeIcon icon="times" className="text-xs" />
                </button>
              </div>
            )}

            {/* Filter Chips */}
            {activeFilters.map((filter) => (
              <div
                key={`${filter.category}-${filter.value}`}
                className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-blue-500/30"
              >
                <span className="max-w-60 text-ellipsis whitespace-nowrap overflow-hidden">
                  {filter.label}
                </span>
                <button
                  onClick={() =>
                    onFilterChange(
                      filter.category,
                      getDefaultValue(filter.category)
                    )
                  }
                  className="hover:text-blue-300 transition-colors"
                >
                  <FontAwesomeIcon icon="times" className="text-xs" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {(hasSearchQuery || hasFilterChanges) && (
          <Button
            variant="danger"
            size="sm"
            onClick={onClearAll}
            className="text-gray-400 hover:text-white text-sm shrink-0"
          >
            <FontAwesomeIcon icon="times-circle" className="mr-2" />
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};

const getDefaultValue = (category: string): string => {
  const defaults = {
    timeFrame: 'all-time',
    gameType: 'all',
    region: 'global',
    sortBy: 'rank',
  };
  return defaults[category as keyof typeof defaults];
};
