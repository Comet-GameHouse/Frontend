import type { QuickAction } from '@app/components';
import type { Tab, UserWallet } from './types';
import { ROUTES } from '@app/constants';

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

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'gamepad',
    label: 'Games',
    description: 'Browse all games',
    path: ROUTES.GAMES,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'user',
    label: 'Profile',
    description: 'View your inventory',
    path: ROUTES.PROFILE,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'award',
    label: 'Achievements',
    description: 'Earn reward points',
    path: ROUTES.ACHIEVEMENTS,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'tachometer-alt',
    label: 'Dashboard',
    description: 'Back to overview',
    path: ROUTES.DASHBOARD,
    color: 'from-purple-500 to-pink-500',
  },
];
