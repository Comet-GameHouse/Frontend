import type { StatItem as StatItemType } from './types';

interface StatItemProps {
  stat: StatItemType;
  index: number;
}

export const StatItem = ({ stat, index }: StatItemProps) => {
  return (
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={50 + (index + 1) * 50}
    >
      <div
        className={`text-2xl sm:text-3xl font-bold font-orbitron ${stat.color}`}
      >
        {stat.value}
      </div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </div>
  );
};
