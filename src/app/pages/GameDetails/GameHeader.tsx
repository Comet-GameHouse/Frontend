import { Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GameDetail } from './types';

interface GameHeaderProps {
  game: GameDetail;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const GameHeader = ({ game, isFavorite, onToggleFavorite }: GameHeaderProps) => {
  return (
    <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Game Icon */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto lg:mx-0"
             data-aos="zoom-in">
          <FontAwesomeIcon
            icon={game.icon}
            className="text-white text-4xl sm:text-5xl lg:text-6xl"
          />
        </div>

        {/* Game Info */}
        <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-2">
                {game.name}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                  {game.playerCount === 1 ? '1:1 Battle' : `${game.playerCount}:${game.playerCount} Battle`}
                </span>
                {game.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-medium border border-gray-700/30"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 50}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <button
                onClick={onToggleFavorite}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isFavorite
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/30 hover:bg-gray-700/50'
                }`}
              >
                <FontAwesomeIcon icon="heart" className="text-lg" />
              </button>
              <Button
                variant="primary"
                icon="plus"
                size="lg"
                className="px-8 py-3"
              >
                Create Room
              </Button>
            </div>
          </div>

          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mb-6">
            {game.description}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-400">
              <FontAwesomeIcon icon="users" />
              <span>{game.activePlayers} playing now</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <FontAwesomeIcon icon="star" />
              <span>{game.rating}/5 ({game.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <FontAwesomeIcon icon="trophy" />
              <span>#{game.rank} in {game.category}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <FontAwesomeIcon icon="coins" />
              <span>Entry Fees: 10 - 10,000 GC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};