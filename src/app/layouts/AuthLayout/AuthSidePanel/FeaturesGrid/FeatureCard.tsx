import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FeatureCardProps } from './types';

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <div
      className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
      data-aos="fade-right"
      data-aos-duration="300"
      data-aos-delay={200 + index * 50}
    >
      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
        <FontAwesomeIcon
          icon={feature.icon}
          className="text-blue-400 text-xs lg:text-sm"
        />
      </div>
      <div className="flex-1">
        <div className="text-gray-200 group-hover:text-white transition-colors duration-300 font-semibold text-sm lg:text-base">
          {feature.text}
        </div>
        <div className="text-gray-400 text-xs lg:text-sm mt-1">
          {feature.description}
        </div>
      </div>
    </div>
  );
};
