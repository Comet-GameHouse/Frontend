import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StatusHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="server"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        System Status
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Real-time monitoring of Comet-GameHouse services and infrastructure
      </p>

      {/* Overall Status Badge */}
      <div
        className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-2xl px-6 py-3 mt-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        <span className="text-green-400 font-semibold text-lg">
          All Systems Operational
        </span>
      </div>
    </div>
  );
};