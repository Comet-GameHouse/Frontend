import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GameDetail } from './types';

interface GameDescriptionProps {
  game: GameDetail;
}

export const GameDescription = ({ game }: GameDescriptionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Description */}
      <div className="lg:col-span-2 space-y-8">
        <Card variant="static-feature" className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white font-orbitron mb-6">
            About This Game
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {game.longDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Battle Features</h3>
                <ul className="space-y-2">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <FontAwesomeIcon icon="check-circle" className="text-green-400 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Game Modes</h3>
                <ul className="space-y-2">
                  {game.gameModes.map((mode, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <FontAwesomeIcon icon="play-circle" className="text-blue-400 text-sm" />
                      {mode}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* How to Play */}
        <Card variant="static-feature" className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white font-orbitron mb-6">
            How to Play & Earn
          </h2>
          <div className="space-y-4">
            {game.howToPlay.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Game Info Card */}
        <Card variant="static-feature" className="p-6">
          <h3 className="text-white font-semibold mb-4">Battle Information</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Battle Type</span>
              <span className="text-white">
                {game.playerCount === 1 ? '1:1 Duel' : `${game.playerCount}v${game.playerCount}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Category</span>
              <span className="text-white">{game.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Difficulty</span>
              <span className="text-white">{game.difficulty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Players per Match</span>
              <span className="text-white">{game.minPlayers}-{game.maxPlayers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Match Duration</span>
              <span className="text-white">{game.avgGameTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Released</span>
              <span className="text-white">{game.releaseDate}</span>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card variant="static-feature" className="p-6">
          <h3 className="text-white font-semibold mb-4">Quick Play</h3>
          <div className="space-y-3">
            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon="random" />
              Quick Match (10 GC)
            </button>
            <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon="plus" />
              Create Room
            </button>
            <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon="trophy" />
              Join Tournament
            </button>
          </div>
        </Card>

        {/* Prize Structure */}
        <Card variant="static-feature" className="p-6">
          <h3 className="text-white font-semibold mb-4">Prize Structure</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
              <span className="text-gray-300">Winner Prize</span>
              <span className="text-green-400 font-bold">90%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
              <span className="text-gray-300">Platform Fee</span>
              <span className="text-blue-400 font-bold">10%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg mt-4">
              <span className="text-gray-300">Min Entry</span>
              <span className="text-yellow-400 font-bold">10 GC</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
              <span className="text-gray-300">Max Entry</span>
              <span className="text-yellow-400 font-bold">10,000 GC</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};