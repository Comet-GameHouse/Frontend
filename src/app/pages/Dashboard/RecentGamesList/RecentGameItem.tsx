import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { RecentGame } from './types';
import { GameResultIcon } from './GameResultIcon';
import { Card } from '@components';

interface RecentGameItemProps {
  game: RecentGame;
  index: number;
}

export const RecentGameItem = ({ game, index }: RecentGameItemProps) => {
  const getResultColor = (result: string) => {
    switch (result) {
      case 'win':
        return 'text-green-400';
      case 'loss':
        return 'text-red-400';
      case 'draw':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <Card
      variant="static-paper"
      className="flex items-center justify-between"
      data-aos="fade-right"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="flex items-center space-x-4">
        <GameResultIcon result={game.result} />
        <div>
          <h3 className="text-white font-medium">{game.gameName}</h3>
          <p className="text-gray-400 text-sm">
            {new Date(game.date).toLocaleDateString()} • {game.duration}
          </p>
        </div>
      </div>

      <div className="text-right">
        <div className={`font-bold ${getResultColor(game.result)}`}>
          {game.score}
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
          <FontAwesomeIcon icon="coins" className="w-3 h-3" />
          <span>+{game.coinsEarned}</span>
        </div>
      </div>
    </Card>
  );
};
