import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden mobile-menu-button w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 flex-shrink-0 cursor-pointer"
      data-aos="fade-left"
    >
      <FontAwesomeIcon
        icon={isOpen ? 'times' : 'bars'}
        className={`text-gray-300 text-sm transition-transform duration-300 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      />
    </button>
  );
};
