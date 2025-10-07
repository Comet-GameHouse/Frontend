import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProfileBadge } from './types';

interface BadgeCardProps {
  badge: ProfileBadge;
  index: number;
}

export const BadgeCard = ({ badge, index }: BadgeCardProps) => {
  const getBadgeTypeColor = (type: string) => {
    switch (type) {
      case 'seasonal':
        return 'from-green-500 to-emerald-500';
      case 'event':
        return 'from-purple-500 to-pink-500';
      case 'rank':
        return 'from-yellow-500 to-amber-500';
      case 'special':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div
      className="bg-gray-700/30 rounded-xl p-3 hover:bg-gray-700/50 transition-all duration-300 cursor-default"
      data-aos="zoom-in"
      data-aos-delay={400 + (index + 1) * 50}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`w-10 h-10 bg-gradient-to-r ${getBadgeTypeColor(badge.type)} rounded-lg flex items-center justify-center shadow-lg`}
        >
          <FontAwesomeIcon icon={badge.icon} className="text-white text-sm" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white text-sm">{badge.name}</h4>
          <p className="text-gray-400 text-xs">{badge.description}</p>
        </div>
      </div>
      <div className="text-gray-500 text-xs mt-2">
        {new Date(badge.unlockedAt).toLocaleDateString()}
      </div>
    </div>
  );
};
