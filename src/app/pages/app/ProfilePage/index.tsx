import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loading } from '@components';
import { NotFoundPage } from '@pages';

import { ProfileHero } from './ProfileHero';
import { ProfileStatsCards } from './ProfileStatsCards';
import { GameMastery } from './GameMastery';
import { AchievementShowcase } from './AchievementShowcase';
import { ProfileTimeline } from './ProfileTimeline';
import { ProfileActions, type UserProfile } from './ProfileActions';
import {
  PROFILE_DATA,
  PROFILE_STATS,
  PROFILE_GAMES,
  PROFILE_ACHIEVEMENTS,
  PROFILE_BADGES,
  PROFILE_TIMELINE,
} from './data';

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const profileId = id || 'current';
      const profileData = PROFILE_DATA[profileId] || PROFILE_DATA.current;
      setProfile(profileData);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleProfileAction = (action: string) => {
    console.log('Profile action:', action);
    // Implement actual logic for each action
  };

  if (loading) {
    return (
      <Loading
        type="page"
        message="Loading Profile"
        subMessage="Preparing your gaming journey..."
        showProgress={true}
      />
    );
  }

  if (!profile) {
    return <NotFoundPage />;
  }

  const profileId = profile.id;
  const stats = PROFILE_STATS[profileId] || PROFILE_STATS.current;
  const games = PROFILE_GAMES[profileId] || PROFILE_GAMES.current;
  const achievements =
    PROFILE_ACHIEVEMENTS[profileId] || PROFILE_ACHIEVEMENTS.current;
  const badges = PROFILE_BADGES[profileId] || PROFILE_BADGES.current;
  const timeline = PROFILE_TIMELINE[profileId] || PROFILE_TIMELINE.current;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <ProfileHero profile={profile} />

        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
          {/* Stats Overview */}
          <section>
            <h2
              className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-4 text-center"
              data-aos="fade-up"
            >
              Gaming Statistics
            </h2>
            <ProfileStatsCards stats={stats} />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <GameMastery games={games} />
              <AchievementShowcase
                achievements={achievements}
                badges={badges}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              <ProfileTimeline events={timeline} />
              <ProfileActions
                profile={profile}
                onAction={handleProfileAction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
