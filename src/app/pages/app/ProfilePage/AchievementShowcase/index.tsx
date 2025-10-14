import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProfileAchievement, ProfileBadge } from './types';
import { AchievementCard } from './AchievementCard';
import { BadgeCard } from './BadgeCard';

interface AchievementShowcaseProps {
  achievements: ProfileAchievement[];
  badges: ProfileBadge[];
}

export const AchievementShowcase = ({
  achievements,
  badges,
}: AchievementShowcaseProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 className="text-xl font-bold text-white font-orbitron mb-6">
        Legacy & Achievements
      </h2>

      {/* Badges Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <FontAwesomeIcon icon="shield-alt" className="text-blue-400 mr-2" />
          Special Badges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <BadgeCard key={badge.id} badge={badge} index={index} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <FontAwesomeIcon icon="trophy" className="text-yellow-400 mr-2" />
          Gaming Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};