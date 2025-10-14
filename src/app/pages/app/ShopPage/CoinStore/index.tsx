import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coinPackages } from './data';
import { CoinPackageCard } from './CoinPackageCard';

export const CoinStore = () => {
  return (
    <div data-aos="fade-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-white font-orbitron text-center mb-8">
        Buy Game Coins
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto">
        {coinPackages.map((pkg, index) => (
          <CoinPackageCard key={index} pkg={pkg} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm mb-4">Secure payment with:</p>
        <div className="flex justify-center gap-4 text-2xl text-gray-500">
          <FontAwesomeIcon icon={['fab', 'cc-visa']} data-aos="zoom-in" data-aos-delay={50} />
          <FontAwesomeIcon icon={['fab', 'cc-mastercard']} data-aos="zoom-in" data-aos-delay={100} />
          <FontAwesomeIcon icon={['fab', 'cc-paypal']} data-aos="zoom-in" data-aos-delay={150} />
          <FontAwesomeIcon icon={['fab', 'cc-apple-pay']} data-aos="zoom-in" data-aos-delay={200} />
        </div>
      </div>
    </div>
  );
};
