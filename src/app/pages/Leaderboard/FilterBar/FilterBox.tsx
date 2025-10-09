import { FilterCategorySection } from './FilterCategorySection';
import { filterCategories } from './data';
import type { SelectedFilters } from '../types';

interface FilterBoxProps {
  selectedFilters: SelectedFilters;
  onFilterChange: (category: string, value: string) => void;
}

export const FilterBox = ({
  selectedFilters,
  onFilterChange,
}: FilterBoxProps) => {
  return (
    <div
      className="mx-auto px-3 sm:px-4 mb-6 sm:mb-8"
      data-aos="fade-up"
    >
      {/* Filter Categories */}
      <div className="space-y-4 sm:space-y-6">
        {filterCategories.map((category, index) => (
          <FilterCategorySection
            key={category.id}
            category={category}
            selectedValue={
              selectedFilters[category.id as keyof SelectedFilters]
            }
            onSelect={(value) => onFilterChange(category.id, value)}
            index={index}
          />
        ))}
      </div>

      {/* Active Filters */}
    </div>
  );
};
