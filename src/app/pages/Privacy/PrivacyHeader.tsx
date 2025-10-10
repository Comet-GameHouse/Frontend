import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { privacyLastUpdated, privacyEffectiveDate } from './data';

export const PrivacyHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="user-shield"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Privacy Policy
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        How we protect and handle your personal information
      </p>

      <div
        className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="calendar-alt" className="text-green-400" />
          <span>Last Updated: {privacyLastUpdated}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="clock" className="text-blue-400" />
          <span>Effective: {privacyEffectiveDate}</span>
        </div>
      </div>
    </div>
  );
};