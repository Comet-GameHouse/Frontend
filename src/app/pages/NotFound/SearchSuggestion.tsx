import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { Link } from 'react-router-dom';

export const SearchSuggestion = () => {
  return (
    <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/30 max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 space-y-2 sm:space-y-0">
          <FontAwesomeIcon icon="search" className="text-blue-400 text-lg sm:text-xl mr-0 sm:mr-3" />
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron text-center sm:text-left">
            Can't Find What You're Looking For?
          </h3>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-base text-center mb-3 sm:mb-4 leading-relaxed">
          Try using our search feature to find exactly what you need across our entire platform.
        </p>
        <Link to="/search" className="block w-full sm:w-fit mx-auto">
          <Button
            variant="primary"
            icon="search"
            size="sm"
            className="w-full sm:w-auto justify-center"
          >
            Open Search
          </Button>
        </Link>
      </div>
    </div>
  );
};