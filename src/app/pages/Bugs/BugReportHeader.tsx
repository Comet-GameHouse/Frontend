import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BugReportHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="bug"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Report a Bug
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Help us improve Comet-GameHouse by reporting issues you encounter
      </p>

      {/* Success Rate Badge */}
      <div
        className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-2xl px-6 py-3 mt-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        <span className="text-green-400 font-semibold text-lg">
          98% of reported bugs get fixed
        </span>
      </div>
    </div>
  );
};