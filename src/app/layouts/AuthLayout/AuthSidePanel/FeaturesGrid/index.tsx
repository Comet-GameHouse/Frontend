import { FEATURES } from './data';
import { FeatureCard } from './FeatureCard';

export const FeaturesGrid = () => {
  return (
    <div className="space-y-3 lg:space-y-4">
      <h3
        className="text-lg lg:text-xl font-bold text-white font-orbitron"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};
