import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { useAuth } from '@contexts';
import { NAVIGATION_ITEMS } from './data';
import { ROUTES } from '@constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div
      className={`absolute w-full lg:hidden mobile-menu bg-gray-800/95 backdrop-blur-lg rounded-xl border border-gray-700/50 mt-2 p-4 transform transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
    >
      {/* Mobile Navigation Items */}
      <nav className="space-y-2 mb-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
              location.pathname === item.path
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            <span className="font-semibold text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Auth Section for non-logged in users */}
      {!user && (
        <div
          className="border-t border-gray-700/50 pt-4 space-y-2"
        >
          <Link to={ROUTES.SIGN_IN} className="block">
            <Button
              variant="primary"
              size="sm"
              className="w-full justify-center transform hover:scale-[1.02] transition-transform duration-300"
            >
              Sign In
            </Button>
          </Link>
          <Link to={ROUTES.SIGN_UP} className="block">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-center transform hover:scale-[1.02] transition-transform duration-300"
            >
              Create Account
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
