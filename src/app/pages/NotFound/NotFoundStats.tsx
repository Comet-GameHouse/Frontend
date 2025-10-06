export const NotFoundStats = () => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 max-w-sm sm:max-w-none mx-auto"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="300"
    >
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gray-700/30">
        <div className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron">404</div>
        <div className="text-red-400 text-xs sm:text-sm mt-1">Error Code</div>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gray-700/30">
        <div className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron">0</div>
        <div className="text-yellow-400 text-xs sm:text-sm mt-1">Pages Found</div>
      </div>
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-gray-700/30">
        <div className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron">∞</div>
        <div className="text-blue-400 text-xs sm:text-sm mt-1">Possibilities</div>
      </div>
    </div>
  );
};