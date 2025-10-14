import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { QuickNavigation } from './types';
import { Card } from '@components';

interface QuickActionCardProps {
  action: QuickNavigation;
  index: number;
}

export const QuickActionCard = ({ action, index }: QuickActionCardProps) => {
  return (
    <Card
      to={action.path}
      type="link"
      variant="clickable"
      data-aos="fade-up"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <FontAwesomeIcon
              icon={action.icon}
              className="text-white text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        <div className="flex-1 mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron mb-1 sm:mb-2 line-clamp-2">
            {action.label}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3">
            {action.description}
          </p>
        </div>

        <div className="flex items-center text-purple-400 text-xs sm:text-sm font-medium mt-auto">
          Explore
          <FontAwesomeIcon
            icon="arrow-right"
            className="ml-1 sm:ml-2 text-xs"
          />
        </div>
      </div>
    </Card>
  );
};