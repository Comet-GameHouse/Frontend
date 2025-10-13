import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TournamentTab } from './types';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TournamentTabsProps {
  tabs: { id: TournamentTab; label: string; icon: string }[];
  activeTab: TournamentTab;
  onTabChange: (tab: TournamentTab) => void;
}

export const TournamentTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: TournamentTabsProps) => {
  return (
    <div className="flex overflow-x-auto gap-1 mb-6 sm:mb-8" data-aos="fade-up">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
          }`}
        >
          <FontAwesomeIcon icon={tab.icon as IconProp} />
          {tab.label}
        </button>
      ))}
    </div>
  );
};
