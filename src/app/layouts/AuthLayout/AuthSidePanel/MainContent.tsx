import { HeroSection } from './HeroSection';
import { FeaturesGrid } from './FeaturesGrid';
import { TestimonialsSection } from './TestimonialsSection';

export const MainContent = () => {
  return (
    <div className="hidden md:flex flex-1 flex-col justify-between space-y-6 lg:space-y-8 my-4 lg:my-8">
      <HeroSection />
      <FeaturesGrid />
      <TestimonialsSection />
    </div>
  );
};