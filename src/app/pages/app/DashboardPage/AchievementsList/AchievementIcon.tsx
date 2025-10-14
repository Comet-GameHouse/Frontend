import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AchievementIconProps {
  icon: IconProp;
  unlocked: boolean;
}

export const AchievementIcon = ({ icon, unlocked }: AchievementIconProps) => {
  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        unlocked
          ? 'bg-gradient-to-r from-yellow-500 to-amber-500'
          : 'bg-gray-600/50'
      }`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${unlocked ? 'text-white' : 'text-gray-400'} text-lg`}
      />
    </div>
  );
};
