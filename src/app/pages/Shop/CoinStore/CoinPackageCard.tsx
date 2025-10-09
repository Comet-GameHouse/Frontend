import { Button, Card } from '@app/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CoinPackage } from './types';

interface CoinPackageCardProp {
  pkg: CoinPackage;
  index: number;
}

export const CoinPackageCard = ({ pkg, index }: CoinPackageCardProp) => {
  const handlePurchase = (pkg: any) => {
    console.log('Purchasing coin package:', pkg);
    // Handle real money purchase integration
  };

  return (
    <Card
      variant="static-feature"
      className={`overflow-visible p-6 ${
        pkg.popular
          ? 'border-yellow-500 hover:border-yellow-400 hover:scale-105 shadow-lg shadow-yellow-500/20'
          : pkg.bestValue
            ? 'border-green-500 hover:border-green-400 hover:scale-105 shadow-lg shadow-green-500/20'
            : 'border-gray-700/30 hover:border-gray-500/30 hover:scale-102'
      }`}
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 50}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
          MOST POPULAR
        </div>
      )}
      {pkg.bestValue && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
          BEST VALUE
        </div>
      )}

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FontAwesomeIcon icon="coins" className="text-yellow-400 text-2xl" />
          <span className="text-white font-orbitron text-2xl font-bold">
            {(pkg.coins + (pkg.coins * pkg.bonus) / 100).toLocaleString()}
          </span>
        </div>

        <h3 className="text-white font-orbitron text-xl font-bold mb-2">
          {pkg.name}
        </h3>

        <div className="text-green-400 text-sm mb-3">
          +{pkg.bonus}% Bonus Coins
        </div>

        <div className="text-gray-400 text-sm mb-2">
          {pkg.coins.toLocaleString()} + {pkg.bonus}% bonus
        </div>

        <div className="text-2xl font-bold text-white mb-4">${pkg.price}</div>

        <Button
          variant={pkg.popular ? 'primary' : 'secondary'}
          onClick={() => handlePurchase(pkg)}
          className="w-full justify-center"
          icon="shopping-cart"
        >
          Buy Now
        </Button>
      </div>
    </Card>
  );
};
