import { GAMES } from './data';

export const GamesStats = () => {
  const totalPlayers = GAMES.reduce((sum, game) => sum + parseInt(game.online.replace('K', '000')), 0);
  const featuredGames = GAMES.filter(game => game.isFeatured).length;
  const newGames = GAMES.filter(game => game.isNew).length;

  return (
    <div 
      className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="300"
    >
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30">
        <div className="text-lg sm:text-xl font-bold text-white font-orbitron">{GAMES.length}</div>
        <div className="text-blue-400 text-sm">Total Games</div>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30">
        <div className="text-lg sm:text-xl font-bold text-white font-orbitron">
          {(totalPlayers / 1000).toFixed(1)}K
        </div>
        <div className="text-green-400 text-sm">Online Now</div>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30">
        <div className="text-lg sm:text-xl font-bold text-white font-orbitron">{newGames}</div>
        <div className="text-purple-400 text-sm">New Games</div>
      </div>
    </div>
  );
};