import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@components';
import type { QuickAction } from './types';
import { iconColorTheme } from './data';
import type { colorTheme } from '@app/constants';

interface QuickActionsGridProps {
  quickActionsData: QuickAction[];
  dataAosDelay?: number;
  className?: string;
  columns?: 2 | 3 | 4 | 6;
}

export const QuickActionsGrid = ({
  quickActionsData,
  dataAosDelay = 100,
  className = '',
  columns = 4,
}: QuickActionsGridProps) => {
  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div
      className={`grid ${gridClasses[columns]} gap-4 ${className}`}
      data-aos="fade-up"
    >
      {quickActionsData.map((action, index) => (
        <Card
          key={action.path}
          type="link"
          to={action.path}
          color={action.color as colorTheme}
          colorTheme="hoverColored"
          shadowType="dynamic"
          clickable
          padding="md"
          rounded="xl"
          shadow="md"
          data-aos="zoom-in"
          data-aos-delay={dataAosDelay + (index + 1) * 50}
        >
          {/* Content */}
          <div className="relative flex flex-col items-center z-10 text-white">
            <div
              className={`w-10 h-10 flex justify-center items-center mb-2 md:mb-3 rounded-md group-hover:scale-105 duration-300 ${iconColorTheme[action.color as colorTheme].bg}`}
            >
              <FontAwesomeIcon
                icon={action.icon}
                className={`mx-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${iconColorTheme[action.color as colorTheme].text}`}
              />
            </div>
            <h3 className="font-bold text-sm md:text-lg mb-1 group-hover:text-white transition-colors duration-300">
              {action.label}
            </h3>
            <p className="text-xs md:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
              {action.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export { type QuickAction } from './types';
