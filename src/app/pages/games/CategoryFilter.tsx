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
    <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="300">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {GAME_CATEGORIES.map((category, index) => (
          <button
            key={category.id}
            onClick={() =>
              onFiltersChange({ ...filters, category: category.id })
            }
            className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border transition-all duration-300 group cursor-pointer shadow-lg ${
              filters.category === category.id
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-blue-500/20'
                : 'bg-gray-800/30 backdrop-blur-sm border-gray-700/30 text-gray-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:scale-[1.02] hover:shadow-blue-500/20'
            }`}
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
          </button>
        ))}
      </div>
    </div>
  );
};
