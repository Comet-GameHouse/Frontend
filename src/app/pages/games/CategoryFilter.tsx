import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GAME_CATEGORIES } from './data';
import type { GameFilter } from './types';
import { Card } from '@components';

interface CategoryFilterProps {
  filters: GameFilter;
  onFiltersChange: (filters: GameFilter) => void;
}

export const CategoryFilter = ({
  filters,
  onFiltersChange,
}: CategoryFilterProps) => {
  return (
    <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="300">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {GAME_CATEGORIES.map((category, index) => (
          <Card
            key={category.id}
            onClick={() =>
              onFiltersChange({ ...filters, category: category.id })
            }
            variant="clickable"
            clicked={filters.category === category.id}
            className="flex items-center space-x-2 !px-4 sm:!px-6 !py-2 sm:!py-3"
            data-aos="zoom-in"
            data-aos-delay={300 + (index + 1) * 50}
          >
            <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
            <span className="text-sm sm:text-base font-medium">
              {category.name}
            </span>
            <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
              {category.count}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};
