import { Link } from 'react-router-dom';

import { ROUTES } from '@constants';

export const BrandLogo = () => {
  return (
    <Link to={ROUTES.HOME} data-aos="fade-down">
      <div className="text-center lg:text-left mb-6 lg:mb-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-3 lg:space-y-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
            <span className="text-xl font-bold text-white">🚀</span>
          </div>
          <div className="ml-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
              Comet GameHouse
            </h1>
            <p className="text-blue-300 text-sm">Where gamers unite</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
