import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { UserProfile } from './ProfileActions';

interface ProfileHeroProps {
  profile: UserProfile;
}

export const ProfileHero = ({ profile }: ProfileHeroProps) => {
  const progressPercentage = (profile.experience / profile.nextLevelExp) * 100;
  const statusColors = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    offline: 'bg-gray-400',
  };

  return (
    <div
      className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Avatar Section */}
        <div className="text-center lg:text-left">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-white/10">
              {profile.avatar}
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-gray-800 ${statusColors[profile.status]}`}
            ></div>

            {/* Level Badge */}
            <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-3 py-1 text-white font-bold text-xs shadow-lg">
              Lvl {profile.level}
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-orbitron">
                {profile.username}
              </h1>

              {/* Title and Clan */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-2 mt-2">
                {profile.title && (
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg text-xs font-medium border border-blue-500/30">
                    {profile.title}
                  </span>
                )}
                {profile.clan && (
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-lg text-xs font-medium border border-purple-500/30">
                    {profile.clan}
                  </span>
                )}
                {profile.rank && (
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-lg text-xs font-medium border border-yellow-500/30">
                    {profile.rank}
                  </span>
                )}
              </div>
            </div>

            {/* Join Date */}
            <div className="text-gray-400 text-sm">
              <FontAwesomeIcon icon="calendar-alt" className="w-3 h-3 mr-1" />
              Joined{' '}
              {new Date(profile.joinDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>

          {/* Bio */}
          {profile.bio && (
            <p className="text-gray-300 mt-4 text-base max-w-2xl leading-relaxed">
              {profile.bio}
            </p>
          )}

          {/* Level Progress */}
          <div className="mt-6 max-w-md">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress to Level {profile.level + 1}</span>
              <span className="font-semibold text-white">
                {profile.experience}/{profile.nextLevelExp} XP
              </span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Country Flag */}
        {profile.country && (
          <div className="text-center lg:text-right">
            <div className="bg-gray-700/30 rounded-xl p-3 border border-gray-600/30">
              <FontAwesomeIcon
                icon="flag"
                className="text-lg text-gray-400 mb-1"
              />
              <div className="text-white font-medium text-sm">
                {profile.country}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
