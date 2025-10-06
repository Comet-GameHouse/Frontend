import type { ProfileGame, MasteryLevel } from './types';
import { GameMasteryCard } from './GameMasteryCard';

interface GameMasteryProps {
  games: ProfileGame[];
}

export const GameMastery = ({ games }: GameMasteryProps) => {
  const getMasteryLevel = (winRate: number): MasteryLevel => {
    if (winRate >= 70)
      return { level: 'Master', color: 'from-purple-500 to-pink-500' };
    if (winRate >= 60)
      return { level: 'Expert', color: 'from-blue-500 to-cyan-500' };
    if (winRate >= 50)
      return { level: 'Advanced', color: 'from-green-500 to-emerald-500' };
    return { level: 'Intermediate', color: 'from-yellow-500 to-amber-500' };
  };

  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white font-orbitron">
          Game Mastery
        </h2>
        <div className="text-blue-400 text-sm font-medium">
          {games.length} Games Mastered
        </div>
      </div>

      <div className="space-y-4">
        {games.map((game, index) => {
          const mastery = getMasteryLevel(game.winRate);
          return (
            <GameMasteryCard 
              key={game.id} 
              game={game} 
              index={index} 
              mastery={mastery} 
            />
          );
        })}
      </div>
    </div>
  );
};