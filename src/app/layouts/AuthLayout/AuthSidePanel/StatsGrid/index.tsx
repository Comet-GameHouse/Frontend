import { STATS } from './data';
import { StatCard } from './StatCard';

export const StatsGrid = () => {
  return (
    <div 
      className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-gray-700/30"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      {STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};