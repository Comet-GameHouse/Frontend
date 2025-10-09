import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rarityColors } from './data';
import type { BoostCard as BoostCardType } from './types';
import { Button } from '@app/components';

interface BoostCardProp {
  boost: BoostCardType;
  index: number;
}

export const BoostCard = ({ boost, index }: BoostCardProp) => {
  const handlePurchase = (boost: any) => {
    console.log('Purchasing boost card:', boost);
  };

  return (
    <div
      key={boost.id}
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-blue-500/20"
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 50}
    >
      <div className="w-full h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
        {boost.image}
      </div>

      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-orbitron font-bold text-lg">
            {boost.name}
          </h3>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${rarityColors[boost.rarity]}`}
          >
            {boost.rarity}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-3 leading-relaxed">
          {boost.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Win Return:</span>
            <span className="text-green-400 font-bold">
              {boost.feeReturnBoost}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">XP Boost:</span>
            <span className="text-blue-400 font-bold">+{boost.xpBoost}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Coin Boost:</span>
            <span className="text-yellow-400 font-bold">
              +{boost.coinBoost}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Duration:</span>
            <span className="text-purple-400 font-bold">{boost.duration}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="coins" className="text-yellow-400" />
          <span className="text-white font-bold">
            {boost.price.toLocaleString()}
          </span>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => handlePurchase(boost)}
          icon="bolt"
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
