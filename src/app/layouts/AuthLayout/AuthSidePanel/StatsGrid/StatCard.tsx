import type { StatCardProps } from './types';

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="text-center group cursor-pointer">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron group-hover:scale-110 transition-transform duration-200">
        {stat.value}
      </div>
      <div
        className={`${stat.color} text-xs sm:text-sm group-hover:scale-105 transition-transform duration-200`}
      >
        {stat.label}
      </div>
    </div>
  );
};
