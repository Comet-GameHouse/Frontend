import type { Achievement } from './types';
import { AchievementItem } from './AchievementItem';
import { DashboardSectionHeader } from '@components';

interface AchievementsListProps {
  achievements: Achievement[];
}

export const AchievementsList = ({ achievements }: AchievementsListProps) => {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="300"
    >
      <DashboardSectionHeader title="Achievements" actionText="View All" />
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={achievement.id}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
