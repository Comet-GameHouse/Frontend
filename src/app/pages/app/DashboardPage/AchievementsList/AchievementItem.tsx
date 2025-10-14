import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Achievement } from './types';
import { AchievementIcon } from './AchievementIcon';
import { AchievementProgress } from './AchievementProgress';
import { Card } from '@components';

interface AchievementItemProps {
  achievement: Achievement;
  index: number;
}

export const AchievementItem = ({
  achievement,
  index,
}: AchievementItemProps) => {
  return (
    <Card
      variant="static-paper"
      className="flex items-center space-x-4"
      data-aos="fade-right"
      data-aos-delay={300 + (index + 1) * 50}
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
    </Card>
  );
};
