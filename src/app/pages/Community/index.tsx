import { CommunityHeader } from './CommunityHeader';
import { CommunityPlatforms } from './CommunityPlatforms';
import { CommunityEvents } from './CommunityEvents';
import { CommunityFeatures } from './CommunityFeatures';
import { DiscordPreview } from './DiscordPreview';
import { CommunityStats } from './CommunityStats';

export const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <CommunityHeader />
        <CommunityStats />
        <CommunityFeatures />
        <CommunityPlatforms />
        <DiscordPreview />
        <CommunityEvents />
      </div>
    </div>
  );
};