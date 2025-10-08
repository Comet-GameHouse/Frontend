import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TimeFrameStats as TimeFrameStatsType } from './types';
import { Card } from '@components';

interface TimeFrameStatCardProps {
  stat: TimeFrameStatsType;
  index: number;
}

export const TimeFrameStatCard = ({ stat, index }: TimeFrameStatCardProps) => {
  return (
    <Card
      variant="static-feature"
      data-aos="fade-up"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Label */}
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium mb-2 sm:mb-3 lg:mb-4 leading-tight">
          {stat.label}
        </div>

        {/* Value and Change */}
        <div className="flex items-end justify-between">
          <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white font-orbitron leading-none">
            {stat.value}
          </div>
          <div
            className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
              stat.change >= 0
                ? 'text-green-400 bg-green-400/10'
                : 'text-red-400 bg-red-400/10'
            }`}
          >
            <FontAwesomeIcon
              icon={stat.change >= 0 ? 'caret-up' : 'caret-down'}
              className="mr-1 text-[10px] sm:text-xs"
            />
            <span className="text-[10px] sm:text-xs">
              {Math.abs(stat.change)}%
            </span>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="mt-2 sm:mt-3 flex items-center">
          <div
            className={`w-full h-1 rounded-full ${
              stat.change >= 0 ? 'bg-green-400/30' : 'bg-red-400/30'
            }`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-1000 ${
                stat.change >= 0 ? 'bg-green-400' : 'bg-red-400'
              }`}
              style={{ width: `${Math.min(Math.abs(stat.change), 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Card>
  );
};
