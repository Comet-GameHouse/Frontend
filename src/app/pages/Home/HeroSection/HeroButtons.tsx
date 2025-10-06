import { Link } from 'react-router-dom';
import { Button } from '@components';
import { ROUTES } from '@constants';
import { useAuth } from '@contexts';

export const HeroButtons = () => {
  const { user } = useAuth();

  return (
    <div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-lg mx-auto"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="300"
    >
      {user ? (
        <>
          <Link to={ROUTES.GAMES} className="w-full sm:w-auto flex-1">
            <Button
              variant="primary"
              size="lg"
              icon="gamepad"
              className="w-full"
            >
              Play Games
            </Button>
          </Link>
          <Link to={ROUTES.DASHBOARD} className="w-full sm:w-auto flex-1">
            <Button
              variant="secondary"
              size="lg"
              icon="dashboard"
              className="w-full"
            >
              Dashboard
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link to={ROUTES.SIGN_UP} className="w-full sm:w-auto flex-1">
            <Button
              variant="primary"
              size="lg"
              icon="user-plus"
              className="w-full"
            >
              Join Free
            </Button>
          </Link>
          <Link to={ROUTES.SIGN_IN} className="w-full sm:w-auto flex-1">
            <Button
              variant="secondary"
              size="lg"
              icon="user"
              className="w-full"
            >
              Sign In
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
