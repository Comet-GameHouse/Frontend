import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GAME_CATEGORIES } from './data';
import type { GameFilter } from './types';

interface CategoryFilterProps {
  filters: GameFilter;
  onFiltersChange: (filters: GameFilter) => void;
}

export const CategoryFilter = ({
  filters,
  onFiltersChange,
}: CategoryFilterProps) => {
  return (
    <div
      className="mb-6 sm:mb-8"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="100"
    >
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {GAME_CATEGORIES.map((category, index) => (
          <button
            key={category.id}
            onClick={() =>
              onFiltersChange({ ...filters, category: category.id })
            }
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border transition-all duration-300 ${
              filters.category === category.id
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                : 'bg-gray-800/30 border-gray-700/30 text-gray-400 hover:border-gray-600/50 hover:text-white'
            }`}
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay={index * 50}
          >
            <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
            <span className="text-sm sm:text-base font-medium">
              {category.name}
            </span>
            <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
