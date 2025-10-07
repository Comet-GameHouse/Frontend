import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAVIGATION_ITEMS } from './data';

export const DesktopNavigation = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-xl transition-all duration-300 border relative overflow-hidden group ${
            location.pathname === item.path
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/20 text-white border-blue-400/40 shadow-lg shadow-blue-500/30'
              : 'text-gray-300 border-transparent hover:text-white hover:bg-gray-800/50 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20'
          }`}
          data-aos="fade-down"
          data-aos-delay={(index + 1) * 50}
        >
          {/* Animated background effect on hover */}
          <div
            className={`absolute w-full inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              location.pathname === item.path ? 'opacity-100' : ''
            }`}
          />

          {/* Animated border glow */}
          <div
            className={`absolute w-full inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${
              location.pathname === item.path ? 'opacity-100' : ''
            }`}
          />

          <FontAwesomeIcon
            icon={item.icon}
            className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110 ${
              location.pathname === item.path ? 'scale-110' : ''
            }`}
          />
          <span className="font-semibold text-sm xl:text-base relative z-10 font-orbitron">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};
