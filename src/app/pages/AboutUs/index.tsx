import { AboutHeader } from './AboutHeader';
import { MissionVision } from './MissionVision';
import { TeamSection } from './TeamSection';
import { FeaturesShowcase } from './FeaturesShowcase';
import { StatsSection } from './StatsSection';
import { SupportContact } from './SupportContact';

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <AboutHeader />
        <MissionVision />
        <StatsSection />
        <FeaturesShowcase />
        <TeamSection />
        <SupportContact />
      </div>
    </div>
  );
};
