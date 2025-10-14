import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerStatsOverview = () => {
  const currentUser = {
    rank: 8,
    progress: 65,
    nextRank: 7,
    pointsToNext: 246,
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-500/30 mb-6 sm:mb-8 mx-auto"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg sm:text-xl font-bold text-white font-orbitron mb-2">
            Your Current Standing
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon="crown" className="text-yellow-500" />
              <span>
                Rank:{' '}
                <strong className="text-white">#{currentUser.rank}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon="trophy" className="text-blue-400" />
              <span>
                Next:{' '}
                <strong className="text-white">#{currentUser.nextRank}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-64">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress to next rank</span>
            <span>{currentUser.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${currentUser.progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {currentUser.pointsToNext} points needed
          </div>
        </div>
      </div>
    </div>
  );
};
