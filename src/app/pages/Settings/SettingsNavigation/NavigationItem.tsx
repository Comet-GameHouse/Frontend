import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NavigationItem as NavigationItemType } from './types';
import { Card } from '@components';

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
    <Card
      onClick={() => onSectionChange(item.id)}
      variant="clickable"
      clicked={activeSection === item.id}
      className="flex items-center space-x-3 px-4 py-3"
      data-aos="fade-right"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <FontAwesomeIcon icon={item.icon} className="w-5" />
      <span className="font-medium">{item.label}</span>
    </Card>
  );
};
