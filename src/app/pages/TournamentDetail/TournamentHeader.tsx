import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TournamentDetail, TimeLeft } from './types';

interface TournamentHeaderProps {
  tournament: TournamentDetail;
  timeLeft: TimeLeft;
}

export const TournamentHeader = ({ tournament, timeLeft }: TournamentHeaderProps) => {
  const getStatusBadge = () => {
    if (timeLeft.isEnded) {
      return { label: 'Completed', color: 'bg-green-500/20 text-green-400 border-green-500/30' };
    }
    if (timeLeft.days === 0 && timeLeft.hours < 24) {
      return { label: 'Ending Soon', color: 'bg-red-500/20 text-red-400 border-red-500/30' };
    }
    return { label: 'Active', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
  };

  const statusBadge = getStatusBadge();

  return (
    <div className="text-center mb-8 sm:mb-12">
      {/* Status Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${statusBadge.color} text-sm font-semibold mb-6`}
        data-aos="fade-down"
      >
        <FontAwesomeIcon icon="circle" className="text-xs" />
        {statusBadge.label}
      </div>

      {/* Tournament Icon & Name */}
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="trophy"
          className="text-white text-3xl sm:text-4xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {tournament.name}
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {tournament.description}
      </p>

      {/* Countdown Timer */}
      {!timeLeft.isEnded && (
        <div
          className="flex justify-center gap-4 sm:gap-6 mt-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-orbitron">{timeLeft.days}</div>
            <div className="text-gray-400 text-sm">Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-orbitron">{timeLeft.hours}</div>
            <div className="text-gray-400 text-sm">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-orbitron">{timeLeft.minutes}</div>
            <div className="text-gray-400 text-sm">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-orbitron">{timeLeft.seconds}</div>
            <div className="text-gray-400 text-sm">Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
};