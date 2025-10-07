import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AccountAction } from './types';
import { Card } from '@components';

interface AccountActionCardProps {
  action: AccountAction;
  index: number;
}

export const AccountActionCard = ({
  action,
  index,
}: AccountActionCardProps) => {
  const getTypeStyles = (type: AccountAction['type']) => {
    switch (type) {
      case 'danger':
        return 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600';
      case 'warning':
        return 'from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600';
      case 'info':
        return 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600';
      default:
        return 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700';
    }
  };

  return (
    <Card
      variant="clickable"
      className="sm:p-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onClick={action.action}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${getTypeStyles(action.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
          >
            <FontAwesomeIcon
              icon={action.icon}
              className="text-white text-base"
            />
          </div>
        </div>

        <div className="flex-1 mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white font-orbitron mb-2 line-clamp-2">
            {action.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
            {action.description}
          </p>
        </div>

        <div className="flex items-center text-blue-400 text-sm sm:text-base font-medium mt-auto">
          Take Action
          <FontAwesomeIcon
            icon="arrow-right"
            className="ml-2 text-xs group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Card>
  );
};
