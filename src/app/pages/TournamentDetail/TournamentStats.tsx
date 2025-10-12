import { Card } from '@components';
import type { TournamentDetail, TimeLeft } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TournamentStatsProps {
  tournament: TournamentDetail;
  timeLeft: TimeLeft;
}

export const TournamentStats = ({ tournament, timeLeft }: TournamentStatsProps) => {
  const stats = [
    {
      label: 'Total Participants',
      value: tournament.totalParticipants.toLocaleString(),
      color: 'text-blue-400',
      icon: 'users'
    },
    {
      label: 'Games Played',
      value: tournament.totalGames.toLocaleString(),
      color: 'text-green-400',
      icon: 'gamepad'
    },
    {
      label: 'Prize Pool',
      value: `$${tournament.prizePool.toLocaleString()}`,
      color: 'text-yellow-400',
      icon: 'coins'
    },
    {
      label: timeLeft.isEnded ? 'Tournament Ended' : 'Time Remaining',
      value: timeLeft.isEnded ? 'Completed' : `${timeLeft.days}d ${timeLeft.hours}h`,
      color: timeLeft.isEnded ? 'text-green-400' : 'text-purple-400',
      icon: timeLeft.isEnded ? 'flag-checkered' : 'clock'
    }
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          variant="static-feature"
          className="text-center"
          data-aos="fade-up"
          data-aos-delay={250 + (index * 50)}
        >
          <div className={`text-base sm:text-lg lg:text-xl font-bold font-orbitron mb-2 ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={stat.icon} className="text-xs" />
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
};