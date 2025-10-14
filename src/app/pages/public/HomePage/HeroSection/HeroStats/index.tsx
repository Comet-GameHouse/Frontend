import { StatItem } from './StatItem';

import { STATS } from './data';

export const HeroStats = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {STATS.map((stat) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  );
};
