import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import type { Game } from '../types';
import { useNavigate } from 'react-router-dom';

interface GameCardProps {
  game: Game;
  index: number;
}

export const GameCard = ({ game, index }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 group hover:scale-[1.01] cursor-default"
      data-aos="fade-up"
      data-aos-delay={400 + (index + 1) * 50}
    >
      <div className="flex flex-col h-full">
        {/* Game Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 ${game.gradient} rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 flex-shrink-0`}
          >
            <FontAwesomeIcon
              icon={game.icon}
              className="text-white text-lg sm:text-xl"
            />
          </div>

          {/* Badges */}
          <div className="flex space-x-2">
            {game.isNew && (
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs font-medium">
                NEW
              </span>
            )}
            {game.isFeatured && (
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg text-xs font-medium">
                FEATURED
              </span>
            )}
          </div>
        </div>

        {/* Game Info */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white font-orbitron mb-2 line-clamp-1">
            {game.name}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-3 line-clamp-2">
            {game.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {game.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {game.tags.length > 2 && (
              <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                +{game.tags.length - 2}
              </span>
            )}
          </div>

          {/* Game Stats */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon="users" className="w-3 h-3" />
                <span>{game.players}</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{game.online} online</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon
                icon="star"
                className="text-yellow-400 w-3 h-3"
              />
              <span>{game.rating}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          size="sm"
          icon="play"
          className="w-full justify-center"
          onClick={() => navigate(`/game/${game.id}`)}
        >
          Play Now
        </Button>
      </div>
    </div>
  );
};
