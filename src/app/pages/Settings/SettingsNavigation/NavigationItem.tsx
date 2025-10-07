import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NavigationItem as NavigationItemType } from './types';

interface NavigationItemProps {
  item: NavigationItemType;
  activeSection: string;
  index: number;
  onSectionChange: (sectionId: string) => void;
}

export const NavigationItem = ({
  item,
  activeSection,
  index,
  onSectionChange,
}: NavigationItemProps) => {
  return (
    <button
      key={item.id}
      onClick={() => onSectionChange(item.id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg cursor-pointer ${
        activeSection === item.id
          ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:border-blue-500/70 hover:bg-blue-500/30 shadow-blue-500/20'
          : 'bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-white hover:scale-[1.02] hover:shadow-blue-500/20'
      } group hover:scale-[1.02] cursor-pointer`}
      data-aos="fade-right"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <FontAwesomeIcon icon={item.icon} className="w-5" />
      <span className="font-medium">{item.label}</span>
    </button>
  );
};
