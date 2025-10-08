import { useEffect, useState } from 'react';
import { LeaderboardHeader } from './LeaderboardHeader';
import { PlayerStatsOverview } from './PlayerStatsOverview';
import { leaderboardData, timeFrameStats } from './data';
import { TimeFrameStatsContainer } from './TimeFrameStatsContainer';
import { FilterBar } from './FilterBar';
import type { SelectedFilters } from './types';
import AOS from 'aos';
import { LeaderboardTable } from './LeaderboardTable';

export const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    timeFrame: 'all-time',
    gameType: 'all',
    region: 'global',
    sortBy: 'rank',
  });

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      timeFrame: 'all-time',
      gameType: 'all',
      region: 'global',
      sortBy: 'rank',
    });
    setSearchQuery('');
  };

  useEffect(() => {
    AOS.refresh();
  }, [selectedFilters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <LeaderboardHeader />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Time Frame Stats */}
          <div className="mb-6">
            <TimeFrameStatsContainer stats={timeFrameStats} />
          </div>

          {/* Stats Overview */}
          <div className="mb-6">
            <PlayerStatsOverview />
          </div>

          {/* Filter Bar (includes dialog) */}
          <div className="mb-6">
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Leaderboard Table */}
          <LeaderboardTable data={leaderboardData} filters={selectedFilters} />
        </div>
      </div>
    </div>
  );
};
