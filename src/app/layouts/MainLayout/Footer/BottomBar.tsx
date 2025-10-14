import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const BottomBar = () => {
  return (
    <div
      className="border-t border-gray-700/50 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <p className="text-gray-400 text-base md:text-sm text-center md:text-left order-2 md:order-1">
        © 2025 Comet-GameHouse. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-base md:text-sm order-1 md:order-2">
        <Link
          to={ROUTES.PRIVACY}
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 mb-2 md:mb-0"
        >
          Privacy Policy
        </Link>
        <Link
          to={ROUTES.TERMS}
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 mb-2 md:mb-0"
        >
          Terms of Service
        </Link>
        <Link
          to={ROUTES.ABOUT_US}
          className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 mb-2 md:mb-0"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};
