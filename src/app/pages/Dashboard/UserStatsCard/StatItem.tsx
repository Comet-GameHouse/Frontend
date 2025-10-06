import type { StatItem as StatItemType } from './types';

interface StatItemProps {
  stat: StatItemType;
}

export const StatItem = ({ stat }: StatItemProps) => {
  return (
    <div className="text-center">
      <div
        className={`text-2xl sm:text-3xl font-bold font-orbitron ${stat.color}`}
      >
        {stat.value}
      </div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </div>
  );
};
