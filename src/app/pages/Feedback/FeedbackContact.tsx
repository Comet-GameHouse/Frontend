import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const FeedbackContact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="px-4">
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
        Need detailed support?{' '}
        <Link
          to={ROUTES.SUPPORT}
          className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200 break-words"
        >
          Contact our support team
        </Link>
      </p>
    </div>
  );
};