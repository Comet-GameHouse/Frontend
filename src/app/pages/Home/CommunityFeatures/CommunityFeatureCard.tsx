import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CommunityFeature } from './types';

interface CommunityFeatureCardProps {
  feature: CommunityFeature;
  index: number;
}

export const CommunityFeatureCard = ({ feature, index }: CommunityFeatureCardProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 group text-center hover:scale-[1.01] cursor-default"
      data-aos="flip-left"
      data-aos-duration="500"
      data-aos-delay={index * 50}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 transition-all duration-300 shadow-lg`}>
        <FontAwesomeIcon icon={feature.icon} className="text-white text-sm sm:text-base" />
      </div>
      
      <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">
        {feature.text}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};