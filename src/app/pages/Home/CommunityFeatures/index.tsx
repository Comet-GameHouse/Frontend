import { HomeSectionHeader } from '@components';

import { COMMUNITY_FEATURES } from './data';
import { CommunityFeatureCard } from './CommunityFeatureCard';

export const CommunityFeatures = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <HomeSectionHeader
        title="Community Features"
        subtitle="Connect, compete, and grow with our amazing gaming community"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {COMMUNITY_FEATURES.map((feature, index) => (
          <CommunityFeatureCard
            key={feature.text}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
