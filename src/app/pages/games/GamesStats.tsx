import { GAMES } from './data';

export const GamesStats = () => {
  const totalPlayers = GAMES.reduce(
    (sum, game) => sum + parseInt(game.online.replace('K', '000')),
    0
  );
  const newGames = GAMES.filter((game) => game.isNew).length;

  return (
    <div
      className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 hover:scale-[1.01] cursor-default"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <div className="text-lg sm:text-xl font-bold text-white font-orbitron">
          {GAMES.length}
        </div>
        <div className="text-blue-400 text-sm">Total Games</div>
      </div>
      <div
        className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 hover:scale-[1.01] cursor-default"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-lg sm:text-xl font-bold text-white font-orbitrol">
          {(totalPlayers / 1000).toFixed(1)}K
        </div>
        <div className="text-green-400 text-sm">Online Now</div>
      </div>
      <div
        className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 hover:scale-[1.01] cursor-default"
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <div className="text-lg sm:text-xl font-bold text-white font-orbitron">
          {newGames}
        </div>
        <div className="text-purple-400 text-sm">New Games</div>
      </div>
    </div>
  );
};
