import { STATS } from './data';
import { StatCard } from './StatCard';

export const StatsSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-2xl sm:rounded-3xl border border-gray-700/30">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8">
        {STATS.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};