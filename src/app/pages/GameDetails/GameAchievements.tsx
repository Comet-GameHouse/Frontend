import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gameAchievements } from './data';

export const GameAchievements = () => {
  const unlockedCount = gameAchievements.filter(ach => ach.unlocked).length;
  const totalPoints = gameAchievements.reduce((sum, ach) => ach.unlocked ? sum + ach.points : sum, 0);

  return (
    <div className="space-y-8">
      {/* Achievement Stats */}
      <Card variant="static-feature" className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400 font-orbitron">{unlockedCount}/{gameAchievements.length}</div>
            <div className="text-gray-400 text-sm">Achievements</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 font-orbitron">{totalPoints}</div>
            <div className="text-gray-400 text-sm">GameCoins Earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 font-orbitron">
              {Math.round((unlockedCount / gameAchievements.length) * 100)}%
            </div>
            <div className="text-gray-400 text-sm">Completion</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 font-orbitron">
              {gameAchievements.filter(ach => ach.unlocked && ach.rarity === 'legendary').length}
            </div>
            <div className="text-gray-400 text-sm">Legendary</div>
          </div>
        </div>
      </Card>

      {/* Achievements Grid */}
      <Card variant="static-feature" className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white font-orbitron mb-6">
          Battle Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gameAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                achievement.unlocked 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-gray-800/30 border-gray-700/30'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Achievement Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative ${
                achievement.unlocked 
                  ? `bg-gradient-to-r ${getRarityGradient(achievement.rarity)} border border-green-500/30` 
                  : 'bg-gray-700 border border-gray-600'
              }`}>
                <FontAwesomeIcon
                  icon={achievement.icon}
                  className={achievement.unlocked ? 'text-white text-xl' : 'text-gray-400 text-xl'}
                />
                {!achievement.unlocked && (
                  <FontAwesomeIcon
                    icon="lock"
                    className="text-white text-xs absolute top-1 right-1"
                  />
                )}
              </div>

              {/* Achievement Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      achievement.unlocked ? 'text-white' : 'text-gray-400'
                    }`}>
                      {achievement.name}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      achievement.rarity === 'common' ? 'bg-gray-500/20 text-gray-400' :
                      achievement.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                      achievement.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {achievement.rarity.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
                    <FontAwesomeIcon icon="coins" className="text-yellow-400 text-xs" />
                    <span className="text-yellow-400 font-bold text-sm">{achievement.points}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-3">
                  {achievement.description}
                </p>

                {/* Progress */}
                {!achievement.unlocked && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">
                        {achievement.currentProgress}/{achievement.requiredProgress}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${(achievement.currentProgress / achievement.requiredProgress) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Unlocked Info */}
                {achievement.unlocked && achievement.unlockedAt && (
                  <div className="flex items-center gap-2 text-green-400 text-xs">
                    <FontAwesomeIcon icon="check-circle" />
                    <span>Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const getRarityGradient = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'from-gray-500 to-gray-600';
    case 'rare': return 'from-blue-500 to-cyan-500';
    case 'epic': return 'from-purple-500 to-pink-500';
    case 'legendary': return 'from-yellow-500 to-orange-500';
    default: return 'from-gray-500 to-gray-600';
  }
};