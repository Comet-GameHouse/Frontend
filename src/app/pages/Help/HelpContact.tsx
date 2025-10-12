import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { DISCORD_INVITE_URL } from './data';

export const HelpContact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="400" className="px-4">
      <p className="text-gray-500 text-xs sm:text-sm text-center leading-relaxed">
        Need more help?{' '}
        <Link
          to={ROUTES.SUPPORT}
          className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 break-words"
        >
          Contact support
        </Link>{' '}
        or{' '}
        <button
          onClick={() => window.open(DISCORD_INVITE_URL, '_blank')}
          className="text-indigo-400 hover:text-indigo-300 underline transition-colors duration-200 break-words"
        >
          join our Discord community
        </button>
      </p>
    </div>
  );
};