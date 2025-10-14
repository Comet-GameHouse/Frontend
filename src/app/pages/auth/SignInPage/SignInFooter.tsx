import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const SignInFooter = () => {
  return (
    <div
      className="text-center mt-6 sm:mt-8 px-4 sm:px-0"
      data-aos="fade-up"
      data-aos-delay="450"
    >
      <p className="text-sm sm:text-base text-gray-400">
        Don't have an account?{' '}
        <Link
          to={ROUTES.SIGN_UP}
          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};
