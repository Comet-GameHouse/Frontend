import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tournaments } from './data';

export const TournamentsHeader = () => {
  const liveCount = tournaments.filter(t => t.status === 'live').length;
  const registrationCount = tournaments.filter(t => t.status === 'registration').length;
  const totalPrizePool = tournaments.reduce((sum, t) => sum + t.prizePool, 0);

  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="trophy"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Tournaments
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Compete against players worldwide and win amazing prizes
      </p>

      {/* Tournament Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <FontAwesomeIcon icon="play-circle" className="text-green-400 text-lg mb-2" />
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {liveCount}
          </div>
          <div className="text-green-400 text-xs">Live Now</div>
        </div>
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FontAwesomeIcon icon="user-plus" className="text-blue-400 text-lg mb-2" />
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {registrationCount}
          </div>
          <div className="text-blue-400 text-xs">Open Registration</div>
        </div>
        <div
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 text-center"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <FontAwesomeIcon icon="dollar-sign" className="text-yellow-400 text-lg mb-2" />
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            ${totalPrizePool}
          </div>
          <div className="text-yellow-400 text-xs">Total Prize Pool</div>
        </div>
      </div>
    </div>
  );
};