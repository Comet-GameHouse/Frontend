import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProfileAchievement } from './types';
import { Card } from '@components';

interface AchievementCardProps {
  achievement: ProfileAchievement;
  index: number;
}

export const AchievementCard = ({
  achievement,
  index,
}: AchievementCardProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'from-gray-400 to-gray-600';
      case 'rare':
        return 'from-blue-400 to-cyan-500';
      case 'epic':
        return 'from-purple-500 to-pink-500';
      case 'legendary':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <Card
      variant="static-paper"
      className="!p-3"
      data-aos="zoom-in"
      data-aos-delay={300 + (index + 1) * 50}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`w-10 h-10 bg-gradient-to-r ${getRarityColor(achievement.rarity)} rounded-lg flex items-center justify-center shadow-lg`}
        >
          <FontAwesomeIcon
            icon={achievement.icon}
            className="text-white text-sm"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white text-sm">{achievement.name}</h4>
          <p className="text-gray-400 text-xs">{achievement.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 text-xs">
        <span className="bg-gray-600/50 text-gray-300 px-2 py-1 rounded-lg">
          {achievement.rarity.toUpperCase()}
        </span>
        <span className="text-gray-500">
          {new Date(achievement.unlockedAt).toLocaleDateString()}
        </span>
      </div>
    </Card>
  );
};
