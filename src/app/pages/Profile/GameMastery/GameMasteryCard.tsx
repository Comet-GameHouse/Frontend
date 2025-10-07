import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProfileGame, MasteryLevel } from './types';
import { Card } from '@components';

interface GameMasteryCardProps {
  game: ProfileGame;
  index: number;
  mastery: MasteryLevel;
}

export const GameMasteryCard = ({
  game,
  index,
  mastery,
}: GameMasteryCardProps) => {
  return (
    <Card
      variant="static-paper"
      className="flex items-center justify-between p-4 "
      data-aos="fade-right"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <FontAwesomeIcon icon={game.icon} className="text-white text-base" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">{game.name}</h3>
          <div className="flex items-center space-x-3 text-gray-400 text-xs mt-1">
            <span>{game.playCount} plays</span>
            <span>•</span>
            <span>{game.totalTime} total</span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <div
          className={`bg-gradient-to-r ${mastery.color} px-3 py-1 rounded-full text-white text-xs font-bold mb-2`}
        >
          {mastery.level}
        </div>
        <div className="text-white font-bold text-base">
          {game.winRate}% Win Rate
        </div>
        <div className="text-gray-400 text-xs">
          Best: {game.bestScore.toLocaleString()}
        </div>
      </div>
    </Card>
  );
};
