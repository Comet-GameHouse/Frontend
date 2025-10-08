import { useState } from 'react';
import { Button, Dialog } from '@components';
import { FilterBox } from './FilterBox';
import type { SelectedFilters } from '../types';
import { ActiveFilters } from './ActiveFilters';
import { SearchBox } from './SearchBox';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedFilters: SelectedFilters;
  onFilterChange: (category: string, value: string) => void;
  onClearFilters: () => void;
}

export const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedFilters,
  onFilterChange,
  onClearFilters,
}: FilterBarProps) => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const activeFilterCount = Object.values(selectedFilters).filter(
    (value) =>
      value !== 'all-time' &&
      value !== 'all' &&
      value !== 'global' &&
      value !== 'rank'
  ).length;

  const hasActiveFilters = activeFilterCount > 0 || searchQuery.length > 0;

  return (
    <>
      <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
        {/* Top Row: Search and Filter Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Input */}
          <SearchBox
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search players, games, or achievements..."
          />

          {/* Filter Button with Badge */}
          <Button
            variant="secondary"
            icon="filter"
            onClick={() => setIsFilterDialogOpen(true)}
            className="w-full sm:w-min"
          >
            <span className="flex items-center gap-2 shrink-0">
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1">
                  {activeFilterCount}
                </span>
              )}
            </span>
          </Button>
        </div>

        {/* Active Filters - Shows below the search/filter row */}
        {hasActiveFilters && (
          <ActiveFilters
            selectedFilters={selectedFilters}
            onFilterChange={onFilterChange}
            onClearAll={onClearFilters}
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />
        )}
      </div>

      {/* Filter Dialog */}
      <Dialog
        isOpen={isFilterDialogOpen}
        onClose={() => setIsFilterDialogOpen(false)}
        title="Leaderboard Filters"
        size="xl"
        showCloseButton={true}
        overlayBlur={true}
        overlayDark={true}
      >
        <div className="max-h-[70vh] overflow-y-auto scrollbar-comet">
          <FilterBox
            selectedFilters={selectedFilters}
            onFilterChange={onFilterChange}
          />
        </div>
      </Dialog>
    </>
  );
};
