import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AboutHeader = () => {
  return (
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="gamepad"
          className="text-white text-3xl sm:text-4xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        About Comet Gamehouse
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Where gaming dreams take flight. We're passionate about creating unforgettable 
        gaming experiences and building a community that celebrates every victory.
      </p>

      <div
        className="flex flex-wrap justify-center gap-4 mt-8"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex items-center gap-2 text-blue-400">
          <FontAwesomeIcon icon="rocket" />
          <span className="text-sm font-semibold">Est. 2020</span>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <FontAwesomeIcon icon="users" />
          <span className="text-sm font-semibold">1M+ Players</span>
        </div>
        <div className="flex items-center gap-2 text-purple-400">
          <FontAwesomeIcon icon="trophy" />
          <span className="text-sm font-semibold">50+ Games</span>
        </div>
      </div>
    </div>
  );
};