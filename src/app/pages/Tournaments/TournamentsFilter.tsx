import { Card, Input } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tournamentCategories } from './data';
import type { TournamentCategory } from './types';

interface Props {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGame: string;
  onGameChange: (game: string) => void;
  selectedFormat: string;
  onFormatChange: (format: string) => void;
}

export const TournamentsFilter = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  selectedGame,
  onGameChange,
  selectedFormat,
  onFormatChange
}: Props) => {
  const games = ['all', 'Cosmic Clash', 'Nebula Runner', 'Starfall Survivors', 'Galaxy Defender', 'Quantum Duels'];
  const formats = ['all', '1v1', 'battle-royale', 'score-attack', 'time-trial'];

  return (
    <div className="mb-8 sm:mb-12">
      <Card
        variant="static-feature"
        className="max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search tournaments..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-800/50 border-gray-700 text-white text-lg py-4 px-6"
            icon="search"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm mb-3">Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
              {tournamentCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500/20 border-yellow-500/50 scale-[1.02]'
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-500/30 hover:bg-gray-500/10'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={250 + index * 50}
                >
                  <FontAwesomeIcon 
                    icon={category.icon} 
                    className={`text-sm ${
                      selectedCategory === category.id ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-semibold truncate ${
                      selectedCategory === category.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {category.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {category.count}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <h3 className="text-white font-semibold text-sm mb-3">Filters</h3>
            <div className="space-y-3">
              {/* Game Filter */}
              <div>
                <label className="block text-gray-400 text-xs mb-2">Game</label>
                <select
                  value={selectedGame}
                  onChange={(e) => onGameChange(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-lg p-3 text-white text-sm focus:border-yellow-500/50 focus:bg-yellow-500/10 transition-all duration-300"
                >
                  {games.map(game => (
                    <option key={game} value={game}>
                      {game === 'all' ? 'All Games' : game}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format Filter */}
              <div>
                <label className="block text-gray-400 text-xs mb-2">Format</label>
                <select
                  value={selectedFormat}
                  onChange={(e) => onFormatChange(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700/30 rounded-lg p-3 text-white text-sm focus:border-yellow-500/50 focus:bg-yellow-500/10 transition-all duration-300"
                >
                  {formats.map(format => (
                    <option key={format} value={format}>
                      {format === 'all' ? 'All Formats' : format.replace('-', ' ').toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onGameChange('all');
                    onFormatChange('all');
                    onCategoryChange('all');
                    onSearchChange('');
                  }}
                  className="flex-1 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 text-xs font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
                <button className="flex-1 py-2 bg-yellow-500 border border-yellow-500 rounded-lg text-white text-xs font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Create Tournament
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};