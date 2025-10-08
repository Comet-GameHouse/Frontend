import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { CommunityFeature } from './types';
import { Card } from '@components';

interface CommunityFeatureCardProp {
  feature: CommunityFeature;
  index: number;
}

export const CommunityFeatureCard = ({
  feature,
  index,
}: CommunityFeatureCardProp) => {
  return (
    <Card
      variant="static-feature"
      data-aos="fade-up"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <div
        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
      >
        <FontAwesomeIcon icon={feature.icon} className="text-white text-lg" />
      </div>

      <h3 className="text-white font-orbitron text-lg font-bold mb-2">
        {feature.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </Card>
  );
};
