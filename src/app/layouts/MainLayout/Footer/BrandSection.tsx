import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from './data';
import type { IconName } from '@fortawesome/fontawesome-svg-core';

export const BrandSection = () => {
  return (
    <div
      className="md:col-span-3 xl:col-span-2 text-center md:text-left"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3 mb-4 md:mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">🚀</span>
        </div>
        <div>
          <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-white font-orbitron">
            Comet-GameHouse
          </h3>
          <p className="text-blue-300 text-sm md:text-xs lg:text-sm mt-1">
            Where gamers unite
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-base md:text-sm leading-relaxed mb-6 md:mb-4 max-w-2xl md:max-w-none mx-auto md:mx-0">
        The ultimate platform for multiplayer gaming. Play, compete, and earn
        rewards with players worldwide.
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={['fab', social.icon as IconName]}
              className="text-gray-300 text-base md:text-sm lg:text-base"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
