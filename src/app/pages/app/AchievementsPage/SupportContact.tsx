import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const SupportContact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="px-4 mt-12">
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
        Need help with achievements?{' '}
        <Link
          to={ROUTES.SUPPORT}
          className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 break-words"
        >
          Contact our support team
        </Link>{' '}
        for assistance. We're here to help 24/7.
      </p>
    </div>
  );
};