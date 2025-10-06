import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Achievement } from './types';
import { AchievementIcon } from './AchievementIcon';
import { AchievementProgress } from './AchievementProgress';

interface AchievementItemProps {
  achievement: Achievement;
  index: number;
}

export const AchievementItem = ({
  achievement,
  index,
}: AchievementItemProps) => {
  return (
    <div
      className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors duration-300"
      data-aos="fade-right"
      data-aos-duration="300"
      data-aos-delay={index * 50}
    >
      <AchievementIcon
        icon={achievement.icon}
        unlocked={achievement.unlocked}
      />

      <div className="flex-1">
        <h3
          className={`font-medium ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}
        >
          {achievement.name}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
        <AchievementProgress
          progress={achievement.progress}
          total={achievement.total}
          reward={achievement.reward}
        />
      </div>

      {achievement.unlocked && (
        <FontAwesomeIcon
          icon="check-circle"
          className="text-green-400 text-xl"
        />
      )}
    </div>
  );
};
