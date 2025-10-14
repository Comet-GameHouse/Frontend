import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Achievement } from './types';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AchievementGridProps {
  achievements: Achievement[];
  unlockedAchievements: string[];
}

export const AchievementGrid = ({
  achievements,
  unlockedAchievements,
}: AchievementGridProps) => {
  const isUnlocked = (achievementId: string) =>
    unlockedAchievements.includes(achievementId);

  const getLevelColor = (level: number) => {
    const colors = [
      'from-yellow-700 to-yellow-900', // Bronze
      'from-gray-300 to-gray-500', // Silver
      'from-yellow-400 to-yellow-600', // Gold
      'from-cyan-400 to-cyan-600', // Diamond
      'from-purple-400 to-purple-600', // Master
      'from-red-400 to-red-600', // Grand Master
      'from-green-400 to-green-600', // Legend
      'from-orange-400 to-orange-600', // Mythic
      'from-pink-400 to-pink-600', // Eternal
      'from-blue-400 to-blue-600', // Infinite
    ];
    return colors[Math.min(level - 1, colors.length - 1)] || colors[0];
  };

  const getLevelName = (level: number) => {
    const names = [
      'Bronze',
      'Silver',
      'Gold',
      'Diamond',
      'Master',
      'Grand Master',
      'Legend',
      'Mythic',
      'Eternal',
      'Infinite',
    ];
    return names[Math.min(level - 1, names.length - 1)] || `Level ${level}`;
  };

  const getLevelBorder = (level: number) => {
    const borders = [
      'border-yellow-700',
      'border-gray-300',
      'border-yellow-400',
      'border-cyan-400',
      'border-purple-400',
      'border-red-400',
      'border-green-400',
      'border-orange-400',
      'border-pink-400',
      'border-blue-400',
    ];
    return borders[Math.min(level - 1, borders.length - 1)] || borders[0];
  };

  if (achievements.length === 0) {
    return (
      <Card
        variant="static-feature"
        className="text-center py-12 max-w-2xl mx-auto"
      >
        <FontAwesomeIcon
          icon="search"
          className="text-gray-500 text-4xl mb-4"
        />
        <h3 className="text-white font-semibold text-lg mb-2">
          No achievements found
        </h3>
        <p className="text-gray-400">
          Try adjusting your search or filter criteria
        </p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
      {achievements.map((achievement, index) => {
        const unlocked = isUnlocked(achievement.id);
        const progressPercentage =
          (achievement.currentProgress / achievement.requiredProgress) * 100;
        const isMaxLevel = achievement.currentLevel === achievement.maxLevel;

        return (
          <Card
            key={achievement.id}
            variant="static-feature"
            className={`p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
              unlocked ? 'opacity-100' : 'opacity-70'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Achievement Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Achievement Icon with Level Badge */}
              <div className="relative">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 ${
                    unlocked
                      ? `bg-gradient-to-r ${getLevelColor(achievement.currentLevel)} ${getLevelBorder(achievement.currentLevel)}`
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={achievement.icon as IconProp}
                    className={`text-xl ${
                      unlocked ? 'text-white' : 'text-gray-400'
                    }`}
                  />
                </div>
                {/* Level Badge */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    unlocked
                      ? 'bg-gray-800 text-white border-white'
                      : 'bg-gray-600 text-gray-300 border-gray-400'
                  }`}
                >
                  {achievement.currentLevel}
                </div>
              </div>

              {/* Achievement Info */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-bold text-lg font-orbitron mb-1 truncate ${
                    unlocked ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {achievement.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-2 min-h-10">
                  {achievement.description}
                </p>

                {/* Level and GameCoins */}
                <div className="flex items-center gap-3">
                  {/* Level Info */}
                  <div
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      unlocked
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}
                  >
                    {getLevelName(achievement.currentLevel)}
                  </div>

                  {/* GameCoins Reward */}
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
                    <FontAwesomeIcon
                      icon="coins"
                      className="text-yellow-400 text-xs"
                    />
                    <span className="text-yellow-400 font-bold text-sm">
                      {achievement.points}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="space-y-3">
              {/* Level Progress */}
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">
                  Level {achievement.currentLevel}/{achievement.maxLevel}
                </span>
                <span className="text-white font-semibold">
                  {achievement.currentProgress}/{achievement.requiredProgress}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    unlocked
                      ? `bg-gradient-to-r ${getLevelColor(achievement.currentLevel)}`
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}
                  style={{ width: `${Math.max(progressPercentage, 2)}%` }}
                ></div>
              </div>

              {/* Next Level Info */}
              {!isMaxLevel && (
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Next Level:</span>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon
                      icon="coins"
                      className="text-yellow-400 text-xs"
                    />
                    <span className="text-yellow-400 font-semibold">
                      +{achievement.nextLevelPoints}
                    </span>
                  </div>
                </div>
              )}

              {/* Max Level Badge */}
              {isMaxLevel && (
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-white">
                    🏆 MAX LEVEL ACHIEVED
                  </div>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
