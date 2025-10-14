import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@components';

import { tabs } from './data';
import type { TabType } from './types';

interface ShopHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const ShopHeader = ({ activeTab, onTabChange }: ShopHeaderProps) => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="store"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Game Shop
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Buy coins to play games and boost cards to enhance your performance
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
        {tabs.map((tab, index) => (
          <Card
            key={tab.id}
            variant="clickable"
            clicked={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex items-center space-x-2 !px-4 sm:!px-6 !py-2 sm:!py-3"
            data-aos="fade-up"
            data-aos-delay={100 + (index + 1) * 50}
          >
            <FontAwesomeIcon icon={tab.icon} />
            <span className="font-orbitron font-medium text-lg">
              {tab.name}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};
