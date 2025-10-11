import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const BugReportContact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="px-4">
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
        Need immediate help?{' '}
        <Link
          to={ROUTES.SUPPORT}
          className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 break-words"
        >
          Contact our support team
        </Link>{' '}
        for urgent issues
      </p>
    </div>
  );
};