import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AchievementsHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="trophy"
          className="text-white text-3xl sm:text-4xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Achievements
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Complete challenges, earn GameCoins, and showcase your gaming skills
      </p>
    </div>
  );
};