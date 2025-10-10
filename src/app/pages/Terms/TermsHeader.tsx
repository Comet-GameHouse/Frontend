import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lastUpdated, effectiveDate } from './data';

export const TermsHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="file-contract"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Terms of Service
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Please read these terms carefully before using our services
      </p>

      <div
        className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="calendar-alt" className="text-blue-400" />
          <span>Last Updated: {lastUpdated}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="clock" className="text-green-400" />
          <span>Effective: {effectiveDate}</span>
        </div>
      </div>
    </div>
  );
};