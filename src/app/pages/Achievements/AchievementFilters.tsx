import { Input } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AchievementCategory } from './types';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AchievementFiltersProps {
  categories: AchievementCategory[];
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
}

export const AchievementFilters = ({
  categories,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: AchievementFiltersProps) => {
  return (
    <div
      className="flex flex-col lg:flex-row gap-4 mb-8 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      {/* Search Input */}
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Search achievements..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          icon="search"
          className="w-full"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white border-blue-500 shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-400 border-gray-600 hover:bg-gray-700/50 hover:text-white hover:border-gray-500'
            }`}
          >
            <FontAwesomeIcon icon={category.icon as IconProp} />
            <span>{category.name}</span>
            <span className="bg-gray-700/50 px-2 py-1 rounded-lg text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
