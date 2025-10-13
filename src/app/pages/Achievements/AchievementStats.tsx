import { Card } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AchievementStatsProps {
  stats: {
    total: number;
    unlocked: number;
    progress: number;
    points: number;
    dailyCompleted: number;
    dailyTotal: number;
    averageLevel: number;
    maxLevels: number;
  };
}

export const AchievementStats = ({ stats }: AchievementStatsProps) => {
  const statCards = [
    {
      label: 'Global Achievements',
      value: `${stats.unlocked}/${stats.total}`,
      color: 'text-blue-400',
      icon: 'trophy',
      subtitle: `${stats.progress}% Complete`,
    },
    {
      label: 'Total GameCoins',
      value: stats.points.toLocaleString(),
      color: 'text-yellow-400',
      icon: 'coins',
      subtitle: 'Earned',
    },
    {
      label: 'Avg Achievement Level',
      value: stats.averageLevel.toFixed(1),
      color: 'text-purple-400',
      icon: 'chart-line',
      subtitle: 'Across all achievements',
    },
    {
      label: 'Max Level Achieved',
      value: `${stats.maxLevels}`,
      color: 'text-green-400',
      icon: 'crown',
      subtitle: 'Fully upgraded',
    },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {statCards.map((stat, index) => (
        <Card
          key={stat.label}
          variant="static-feature"
          className="text-center p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay={250 + index * 50}
        >
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gray-800/50 rounded-xl">
            <FontAwesomeIcon
              icon={stat.icon as IconProp}
              className={`text-lg ${stat.color}`}
            />
          </div>
          <div
            className={`text-2xl sm:text-3xl font-bold font-orbitron mb-1 ${stat.color}`}
          >
            {stat.value}
          </div>
          <div className="text-white font-semibold text-sm sm:text-base mb-1">
            {stat.label}
          </div>
          <div className="text-gray-400 text-xs">{stat.subtitle}</div>
        </Card>
      ))}
    </div>
  );
};
