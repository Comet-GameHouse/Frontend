import type { QuickAction } from '@app/components';
import { ROUTES } from '@app/constants';

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'users',
    label: 'Friends',
    description: 'Your connections',
    path: ROUTES.FRIENDS,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'trophy',
    label: 'Tournaments',
    description: 'Community events',
    path: ROUTES.TOURNAMENTS,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'chart-bar',
    label: 'Leaderboard',
    description: 'Community rankings',
    path: ROUTES.LEADERBOARD,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'gamepad',
    label: 'Popular Games',
    description: "What everyone's playing",
    path: ROUTES.GAMES,
    color: 'from-purple-500 to-pink-500',
  },
];
