import type { NavigationItem as NavigationItemType } from './types';

import { NavigationItem } from './NavigationItem';

interface SettingsNavigationProps {
  navigationItems: NavigationItemType[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const SettingsNavigation = ({
  navigationItems,
  activeSection,
  onSectionChange,
}: SettingsNavigationProps) => {
  return (
    <div className="lg:w-64 flex-shrink-0">
      <div
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl sm:rounded-2xl p-4 sticky top-8"
        data-aos="fade-right"
      >
        <nav className="space-y-2">
          {navigationItems.map((item, index) => (
            <NavigationItem
              item={item}
              index={index}
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export type { NavigationItem } from './types';
