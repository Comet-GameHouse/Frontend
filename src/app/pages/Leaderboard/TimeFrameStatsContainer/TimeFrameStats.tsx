import { TimeFrameStatCard } from './TimeFrameStatCard';
import type { TimeFrameStats as TimeFrameStatsType } from './types';

interface TimeFrameStatsProps {
  stats: TimeFrameStatsType[];
}

export const TimeFrameStats = ({ stats }: TimeFrameStatsProps) => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 mb-4 sm:mb-6 lg:mb-8 max-w-6xl mx-auto px-2 sm:px-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {stats.map((stat, index) => (
        <TimeFrameStatCard
          key={stat.label}
          stat={stat}
          index={index}
        />
      ))}
    </div>
  );
};