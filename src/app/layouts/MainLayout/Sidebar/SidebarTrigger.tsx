import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { transitionStyles } from './data';

interface SidebarTriggerProps {
  isOpen: boolean;
  onHover: (isHovering: boolean) => void;
}

export const SidebarTrigger = ({ isOpen, onHover }: SidebarTriggerProps) => {
  return (
    <Button
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`
        fixed left-0 top-1/2 transform -translate-y-1/2 z-40
        w-16 h-16 bg-blue-500 !rounded-full
        flex items-center justify-center
        text-white shadow-2xl
        hover:bg-blue-600 hover:scale-105
        ${transitionStyles}
        ${isOpen ? '-translate-x-full' : '-translate-x-1/2'}
      `}
    >
      <FontAwesomeIcon
        icon={isOpen ? 'chevron-left' : 'chevron-right'}
        className="w-4 h-4 translate-x-1/2"
      />
    </Button>
  );
};
