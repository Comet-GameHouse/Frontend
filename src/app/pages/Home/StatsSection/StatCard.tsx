import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Stat } from './types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <div
      className="text-center group p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay={index * 100}
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
        <FontAwesomeIcon icon={stat.icon} className={stat.color} />
      </div>
      <div
        className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white font-orbitron mb-1 sm:mb-2 ${stat.color}`}
      >
        {stat.value}
      </div>
      <div className="text-gray-300 text-sm sm:text-base font-medium">
        {stat.label}
      </div>
    </div>
  );
};
