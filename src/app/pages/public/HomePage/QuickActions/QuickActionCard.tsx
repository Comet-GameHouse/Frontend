import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { QuickAction } from './types';
import { Card } from '@components';

interface QuickActionCardProps {
  action: QuickAction;
  index: number;
}

export const QuickActionCard = ({ action, index }: QuickActionCardProps) => {
  return (
    <Card
      to={action.path}
      type="link"
      variant="clickable"
      className="text-center"
      data-aos="zoom-in"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-all duration-300">
        <FontAwesomeIcon
          icon={action.icon}
          className="text-blue-400 text-sm sm:text-base"
        />
      </div>

      <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-1">
        {action.text}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 xl:min-h-12">
        {action.description}
      </p>
    </Card>
  );
};
