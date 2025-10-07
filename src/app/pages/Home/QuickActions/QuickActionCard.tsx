import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { QuickAction } from './types';

interface QuickActionCardProps {
  action: QuickAction;
  index: number;
}

export const QuickActionCard = ({ action, index }: QuickActionCardProps) => {
  return (
    <Link
      to={action.path}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-700/30 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group text-center hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-blue-500/20"
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
      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 min-h-12">
        {action.description}
      </p>
    </Link>
  );
};
