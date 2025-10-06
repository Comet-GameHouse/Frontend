import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { ROUTES } from '@constants';

import type { Game } from './types';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
  index: number;
}

export const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <div
      className="bg-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={index * 100}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Game Icon */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${game.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mx-auto sm:mx-0`}
        >
          <FontAwesomeIcon
            icon={game.icon}
            className="text-white text-xl sm:text-2xl"
          />
        </div>

        {/* Game Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-2">
            {game.name}
          </h3>
          <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            {game.description}
          </p>

          {/* Game Stats */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-sm text-gray-400 mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1 rounded-lg">
              <FontAwesomeIcon icon="users" className="w-3 h-3" />
              <span className="text-xs sm:text-sm">{game.players}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs sm:text-sm">{game.online} online</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link
              to={`${ROUTES.GAME_PREFIX}/${game.id}`}
              className="flex-1 justify-center sm:justify-start"
            >
              <Button
                variant="primary"
                size="sm"
                icon="play"
                className="w-full h-full"
              >
                Play Now
              </Button>
            </Link>
            <Link
              to={`${ROUTES.GAME_PREFIX}/${game.id}/info`}
              className="flex-1 justify-center sm:justify-start"
            >
              <Button
                variant="secondary"
                size="sm"
                icon="info-circle"
                className="w-full h-full"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
