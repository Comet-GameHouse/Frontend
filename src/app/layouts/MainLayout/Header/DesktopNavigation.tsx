import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@components';

import { NAVIGATION_ITEMS } from './data';

export const DesktopNavigation = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Card
          key={item.path}
          to={item.path}
          type="link"
          variant="clickable"
          clicked={location.pathname === item.path}
          className="flex items-center space-x-2 !px-3 xl:!px-4 !py-2"
          data-aos="fade-down"
          data-aos-delay={(index + 1) * 50}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-105 ${
              location.pathname === item.path ? 'scale-105' : ''
            }`}
          />
          <span className="font-semibold text-sm xl:text-base relative z-10 font-orbitron">
            {item.label}
          </span>
        </Card>
      ))}
    </nav>
  );
};
