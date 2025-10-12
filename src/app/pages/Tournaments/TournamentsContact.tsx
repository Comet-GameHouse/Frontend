import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const TournamentsContact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="px-4">
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
        Having issues with friends?{' '}
        <Link
          to={ROUTES.SUPPORT}
          className="text-green-400 hover:text-green-300 underline transition-colors duration-200 break-words"
        >
          Contact support
        </Link>
      </p>
    </div>
  );
};