import { communityFeatures } from './data';
import { CommunityFeatureCard } from './CommunityFeatureCard';

export const CommunityFeatures = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Why Join Our Community?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {communityFeatures.map((feature, index) => (
          <CommunityFeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};
