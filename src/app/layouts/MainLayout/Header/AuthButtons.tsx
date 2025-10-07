import { Link } from 'react-router-dom';
import { Button } from '@components';
import { ROUTES } from '@constants';

export const AuthButtons = () => {
  return (
    <div
      className="flex items-center space-x-2 sm:space-x-3"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <Link to={ROUTES.SIGN_IN}>
        <Button variant="secondary" size="sm" className="hidden sm:flex">
          Sign In
        </Button>
      </Link>
      <Link to={ROUTES.SIGN_UP}>
        <Button variant="primary" size="sm" className="text-xs sm:text-sm">
          Join Free
        </Button>
      </Link>
    </div>
  );
};
