import { DashboardHeader } from './DashboardHeader';
import { UserStatsCard } from './UserStatsCard';
import { QuickActionsGrid } from './QuickActionsGrid';
import { RecentGamesList } from './RecentGamesList';
import { AchievementsList } from './AchievementsList';
import { FriendsList } from './FriendsList';
import { USER_STATS, QUICK_ACTIONS, RECENT_GAMES, ACHIEVEMENTS, FRIENDS } from './data';

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <UserStatsCard stats={USER_STATS} />
            <QuickActionsGrid actions={QUICK_ACTIONS} />
            <RecentGamesList games={RECENT_GAMES} />
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <AchievementsList achievements={ACHIEVEMENTS} />
            <FriendsList friends={FRIENDS} />
          </div>
        </div>
      </div>
    </div>
  );
};