import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@components';

interface CoinBalanceProps {
  coins: number;
  onBuyClick?: () => void;
}

export const CoinBalance = ({ coins, onBuyClick }: CoinBalanceProps) => {
  return (
    <div
      className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-500/30"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon="coins" className="text-yellow-400 text-xl" />
          <div>
            <div className="text-white font-bold text-lg">
              {coins.toLocaleString()}
            </div>
            <div className="text-yellow-400 text-sm">Total Coins</div>
          </div>
        </div>
        <Button onClick={onBuyClick} size="sm" variant="warning">
          Buy More
        </Button>
      </div>
    </div>
  );
};
