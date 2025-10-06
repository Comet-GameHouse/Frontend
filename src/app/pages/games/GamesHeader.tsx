import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GamesHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        <FontAwesomeIcon icon="gamepad" className="text-white text-2xl sm:text-3xl" />
      </div>
      
      <h1 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        Game Library
      </h1>
      
      <p 
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        Discover amazing multiplayer games and join thousands of players worldwide
      </p>
    </div>
  );
};