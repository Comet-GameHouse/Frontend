import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon
          icon="headset"
          className="text-white text-2xl sm:text-3xl"
        />
      </div>

      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-orbitron mb-4"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Contact Us
      </h1>

      <p
        className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We're here to help! Choose the best way to get in touch with our support team
      </p>

      <div
        className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="clock" className="text-green-400" />
          <span>Average response time: 2 hours</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="check-circle" className="text-blue-400" />
          <span>98% customer satisfaction</span>
        </div>
      </div>
    </div>
  );
};