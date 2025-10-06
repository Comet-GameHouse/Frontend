import type { StatItemProps } from './types'

export const StatItem = ({ value, label, color }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron">
        {value}
      </div>
      <div className={`${color} text-xs sm:text-sm`}>{label}</div>
    </div>
  );
};