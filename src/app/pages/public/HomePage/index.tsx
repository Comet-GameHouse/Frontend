import { HeroSection } from './HeroSection';
import { FeaturedGames } from './FeaturedGames';
import { QuickActions } from './QuickActions';
import { StatsSection } from './StatsSection';
import { CommunityFeatures } from './CommunityFeatures';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <HeroSection />
          <FeaturedGames />
          <QuickActions />
          <StatsSection />
          <CommunityFeatures />
        </div>
      </div>
    </div>
  );
};
