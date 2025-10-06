import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { useAuth } from '@contexts';
import { NAVIGATION_ITEMS } from './data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div
      className={`absolute w-full lg:hidden mobile-menu bg-gray-800/95 backdrop-blur-lg rounded-xl border border-gray-700/50 mt-2 p-4 transform transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
    >
      {/* Mobile Navigation Items */}
      <nav className="space-y-2 mb-4">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
              location.pathname === item.path
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
            onClick={onClose}
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay={index * 50}
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
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="200"
        >
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              navigate('/signin');
              onClose();
            }}
            className="w-full justify-center transform hover:scale-[1.02] transition-transform duration-300"
          >
            Sign In
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              navigate('/signup');
              onClose();
            }}
            className="w-full justify-center transform hover:scale-[1.02] transition-transform duration-300"
          >
            Create Account
          </Button>
        </div>
      )}
    </div>
  );
};
