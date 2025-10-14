import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GameFilter } from './types';
import { Input } from '@components';

interface GameSearchProps {
  filters: GameFilter;
  onFiltersChange: (filters: GameFilter) => void;
}

export const GameSearch = ({ filters, onFiltersChange }: GameSearchProps) => {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/30 mb-6 sm:mb-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <FontAwesomeIcon
              icon="search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <Input
              icon="envelope-open"
              type="text"
              placeholder="Search games..."
              value={filters.search}
              onChange={(e) =>
                onFiltersChange({ ...filters, search: e.target.value })
              }
              required
              variant="primary"
              inputSize="md"
            />
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="sm:w-48">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFiltersChange({ ...filters, sortBy: e.target.value })
            }
            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};
