import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroHeading = () => {
  return (
    <>
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl border border-blue-400/30"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="rocket"
          className="text-white text-2xl sm:text-3xl lg:text-4xl"
        />
      </div>
      <h1
        className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-orbitron mb-4 sm:mb-6 leading-tight"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Welcome to{' '}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Comet GameHouse
        </span>
      </h1>
      <p
        className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The ultimate multiplayer gaming platform. Play, compete, and earn
        rewards with players worldwide in real-time.
      </p>
    </>
  );
};
