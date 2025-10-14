import { useState, useMemo } from 'react';
import { GamesHeader } from './GamesHeader';
import { GameSearch } from './GameSearch';
import { CategoryFilter } from './CategoryFilter';
import { GamesStats } from './GamesStats';
import { GamesGrid } from './GamesGrid';
import { GAMES } from './data';
import type { GameFilter } from './types';

export const GamesPage = () => {
  const [filters, setFilters] = useState<GameFilter>({
    category: 'all',
    sortBy: 'popular',
    search: '',
  });

  const filteredGames = useMemo(() => {
    let filtered = GAMES;

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter((game) => game.category === filters.category);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (game) =>
          game.name.toLowerCase().includes(searchLower) ||
          game.description.toLowerCase().includes(searchLower) ||
          game.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort games
    switch (filters.sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
        );
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popular':
      default:
        filtered = filtered.sort(
          (a, b) =>
            parseInt(b.online.replace('K', '000')) -
            parseInt(a.online.replace('K', '000'))
        );
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <GamesHeader />
        <GamesStats />
        <GameSearch filters={filters} onFiltersChange={setFilters} />
        <CategoryFilter filters={filters} onFiltersChange={setFilters} />
        <GamesGrid games={filteredGames} />
      </div>
    </div>
  );
};
