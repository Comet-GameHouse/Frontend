import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userWallet } from './data';
import type { UserWallet as UserWalletType } from './types';

import { getDaysRemaining } from '@utils';

interface UserWalletProps {
  wallet: UserWalletType;
}

export const UserWallet = ({ wallet = userWallet }: UserWalletProps) => {
  const activeBoostStats = wallet.activeBoostDetails || {
    xpBoost: 0,
    coinBoost: 0,
    feeReturnBoost: wallet.feeReturn,
    expiresAt: '',
  };
  console.log(activeBoostStats.expiresAt, getDaysRemaining(activeBoostStats.expiresAt))
  const daysRemaining = activeBoostStats.expiresAt
    ? getDaysRemaining(activeBoostStats.expiresAt)
    : 'No active boost';

  const hasActiveBoost = wallet.activeBoosts.length > 0;

  return (
    <div className="max-w-6xl mx-auto mb-8" data-aos="fade-down">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
        {/* 5-Column Grid for All Info */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Coins */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon
                icon="coins"
                className="text-yellow-400 text-xl"
              />
              <span className="text-white font-orbitron text-lg font-bold">
                {wallet.coins.toLocaleString()}
              </span>
            </div>
            <div className="text-gray-400 text-sm">Coins Balance</div>
          </div>

          {/* Coin Boost */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon
                icon="chart-line"
                className="text-yellow-400 text-xl"
              />
              <span className="text-white font-orbitron text-lg font-bold">
                +{activeBoostStats.coinBoost}%
              </span>
            </div>
            <div className="text-gray-400 text-sm">Coin Boost</div>
          </div>

          {/* XP Boost */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon
                icon="rocket"
                className="text-blue-400 text-xl"
              />
              <span className="text-white font-orbitron text-lg font-bold">
                +{activeBoostStats.xpBoost}%
              </span>
            </div>
            <div className="text-gray-400 text-sm">XP Boost</div>
          </div>

          {/* Win Return */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon icon="undo" className="text-green-400 text-xl" />
              <span className="text-white font-orbitron text-lg font-bold">
                {activeBoostStats.feeReturnBoost}%
              </span>
            </div>
            <div className="text-gray-400 text-sm">Win Return</div>
          </div>

          {/* Expires Date */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon
                icon={hasActiveBoost ? 'hourglass' : 'clock'}
                className="text-orange-400 text-xl"
              />
              <span className="text-white font-orbitron text-lg font-bold">
                {hasActiveBoost ? daysRemaining.split(' ')[0] : '0'}
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              {hasActiveBoost ? 'Days Left' : 'No Boost'}
            </div>
          </div>
        </div>

        {/* Active Boost Details */}
        {hasActiveBoost && (
          <div className="mt-4 pt-4 border-t border-gray-700/30">
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">
                Active Boost:{' '}
                <span className="text-blue-400 font-semibold">
                  {wallet.activeBoosts[0]}
                </span>
              </div>
              <div className="text-gray-400 text-xs">
                Expires:{' '}
                <span className="text-orange-400">{daysRemaining}</span>
              </div>
            </div>
          </div>
        )}

        {/* No Active Boost Message */}
        {!hasActiveBoost && (
          <div className="mt-4 pt-4 border-t border-gray-700/30 text-center">
            <div className="text-gray-400 text-sm">
              No active boost.{' '}
              <span className="text-blue-400">
                Purchase a boost card to enhance your earnings!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
