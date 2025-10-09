import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoostCard } from './BoostCard';
import { boostCards } from './data';

export const BoostMarket = () => {
  return (
    <div data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {boostCards.map((boost, index) => (
          <BoostCard key={index} boost={boost} index={index} />
        ))}
      </div>

      {boostCards.length === 0 && (
        <div className="text-center py-12">
          <FontAwesomeIcon
            icon="search"
            className="text-gray-500 text-4xl mb-4"
          />
          <h3 className="text-white font-orbitron text-xl mb-2">
            No boost cards found
          </h3>
          <p className="text-gray-400">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};
