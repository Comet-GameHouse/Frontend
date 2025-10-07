export const SignUpHeader = () => {
  return (
    <div className="text-center mb-6 sm:mb-8" data-aos="fade-down">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-2xl"
        data-aos="zoom-in"
      >
        <span className="text-xl sm:text-2xl font-bold text-white">🎮</span>
      </div>
      <h1
        className="text-2xl sm:text-3xl font-bold text-white font-orbitron mb-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Join the Adventure
      </h1>
      <p
        className="text-sm sm:text-base text-gray-400 px-4 sm:px-0"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Create your Comet-GameHouse account
      </p>
    </div>
  );
};
