import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameCard } from './GameCard';

import type { Game } from './types';

interface GamesGridProps {
  games: Game[];
}

export const GamesGrid = ({ games }: GamesGridProps) => {
  if (games.length === 0) {
    return (
      <div
        className="text-center py-12"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <FontAwesomeIcon
          icon="search"
          className="text-gray-400 text-4xl mb-4"
        />
        <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
        <p className="text-gray-400">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {games.map((game, index) => (
        <GameCard key={game.id} game={game} index={index} />
      ))}
    </div>
  );
};
