import { useState } from 'react';
import { TournamentsHeader } from './TournamentsHeader';
import { TournamentsFilter } from './TournamentsFilter';
import { TournamentsGrid } from './TournamentsGrid';
import { QuickActionsGrid } from './QuickActionsGrid';
import { TournamentsContact } from './TournamentsContact';

export const Tournaments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <TournamentsHeader />
        <TournamentsFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGame={selectedGame}
          onGameChange={setSelectedGame}
          selectedFormat={selectedFormat}
          onFormatChange={setSelectedFormat}
        />
        <TournamentsGrid
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          selectedGame={selectedGame}
          selectedFormat={selectedFormat}
        />
        <QuickActionsGrid />
        <TournamentsContact />
      </div>
    </div>
  );
};