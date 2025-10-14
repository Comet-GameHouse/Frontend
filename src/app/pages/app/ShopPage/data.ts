import type { Tab, UserWallet } from './types';

export const tabs: Tab[] = [
  { id: 'coins' as const, name: 'Buy Coins', icon: 'coins' },
  { id: 'boosts' as const, name: 'Boost Cards', icon: 'bolt' },
];

export const userWallet: UserWallet = {
  coins: 12850,
  activeBoosts: ['Silver Enhancer'],
  feeReturn: 80,
  activeBoostDetails: {
    xpBoost: 50,
    coinBoost: 20,
    feeReturnBoost: 90,
    expiresAt: '2025-10-20T23:59:59Z',
  },
};
