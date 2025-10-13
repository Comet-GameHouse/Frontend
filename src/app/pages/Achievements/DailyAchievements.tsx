import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { DailyAchievement } from './types';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DailyAchievementsProps {
  achievements: DailyAchievement[];
}

export const DailyAchievements = ({ achievements }: DailyAchievementsProps) => {
  const getTimeRemaining = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const diff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { hours, minutes };
  };

  const timeLeft = getTimeRemaining();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Daily Header */}
      <Card
        variant="static-feature"
        className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white font-orbitron mb-2">
              Daily Challenges
            </h2>
            <p className="text-gray-300">
              Complete these challenges before they reset for bonus GameCoins!
            </p>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon="clock" className="text-green-400" />
            <div className="text-white font-semibold">
              {timeLeft.hours}h {timeLeft.minutes}m remaining
            </div>
          </div>
        </div>
      </Card>

      {/* Daily Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={achievement.id}
            variant="static-feature"
            className={`p-6 transition-all duration-300 hover:scale-105 ${
              achievement.completed
                ? 'border-green-500/30'
                : 'border-gray-700/30'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Achievement Header */}
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  achievement.completed
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-blue-500/20 border border-blue-500/30'
                }`}
              >
                <FontAwesomeIcon
                  icon={achievement.icon as IconProp}
                  className={
                    achievement.completed ? 'text-green-400' : 'text-blue-400'
                  }
                />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {achievement.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>

              {achievement.completed && (
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon="check-circle"
                    className="text-green-400 text-xl"
                  />
                </div>
              )}
            </div>

            {/* Progress and Reward */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* GameCoins Reward */}
                <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-lg">
                  <FontAwesomeIcon icon="coins" className="text-yellow-400" />
                  <span className="text-yellow-400 font-bold">
                    {achievement.reward}
                  </span>
                </div>

                {/* Progress */}
                {!achievement.completed && (
                  <div className="text-gray-400 text-sm">
                    {achievement.currentProgress}/{achievement.requiredProgress}
                  </div>
                )}
              </div>

              {/* Status */}
              <div
                className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                  achievement.completed
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}
              >
                {achievement.completed ? 'Completed' : 'In Progress'}
              </div>
            </div>

            {/* Progress Bar for Incomplete */}
            {!achievement.completed && (
              <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                  style={{
                    width: `${(achievement.currentProgress / achievement.requiredProgress) * 100}%`,
                  }}
                ></div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Daily Completion Bonus */}
      <Card
        variant="static-feature"
        className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20"
      >
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg mb-2">
            Daily Completion Bonus
          </h3>
          <p className="text-gray-300 mb-4">
            Complete all daily challenges to earn an extra bonus!
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-lg">
              <FontAwesomeIcon icon="coins" className="text-yellow-400" />
              <span className="text-yellow-400 font-bold text-lg">500</span>
            </div>
            <span className="text-gray-400">+</span>
            <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-lg">
              <FontAwesomeIcon icon="gem" className="text-purple-400" />
              <span className="text-purple-400 font-bold text-lg">
                Daily Streak
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
