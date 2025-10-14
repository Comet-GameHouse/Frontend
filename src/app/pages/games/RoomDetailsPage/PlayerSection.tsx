import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Player } from './types';

interface PlayerSectionProps {
  players: Player[];
  gameStarted: boolean;
}

export const PlayerSection = ({ players, gameStarted }: PlayerSectionProps) => {
  return (
    <Card variant="static-feature">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white font-orbitron">
          Players
        </h2>
        <div className="text-gray-400 text-sm">
          {players.length}/{players.length}
        </div>
      </div>

      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {player.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  player.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                }`}></div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">
                    {player.name}
                  </h3>
                  {player.isReady && !gameStarted && (
                    <FontAwesomeIcon icon="check-circle" className="text-green-400 text-xs" />
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Rank: {player.rank}</span>
                  <span>Win: {player.winRate}%</span>
                </div>
              </div>
            </div>

            <div className={`px-2 py-1 rounded text-xs font-semibold ${
              gameStarted 
                ? player.isAlive 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
                : player.isReady 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {gameStarted 
                ? player.isAlive ? 'Alive' : 'Eliminated'
                : player.isReady ? 'Ready' : 'Waiting'
              }
            </div>
          </div>
        ))}
      </div>

      {/* Room Statistics */}
      <div className="mt-4 pt-4 border-t border-gray-700/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-blue-400 font-bold text-lg font-orbitron">
              {Math.round(players.reduce((sum, p) => sum + p.rank, 0) / players.length)}
            </div>
            <div className="text-gray-400 text-xs">Avg Rank</div>
          </div>
          <div>
            <div className="text-green-400 font-bold text-lg font-orbitron">
              {players.reduce((sum, p) => sum + (p.totalWins || 0), 0)}
            </div>
            <div className="text-gray-400 text-xs">Total Wins</div>
          </div>
          <div>
            <div className="text-purple-400 font-bold text-lg font-orbitron">
              {Math.round(players.reduce((sum, p) => sum + (p.winRate || 0), 0) / players.length)}%
            </div>
            <div className="text-gray-400 text-xs">Win Rate</div>
          </div>
        </div>
      </div>
    </Card>
  );
};