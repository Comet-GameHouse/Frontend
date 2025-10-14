import type { QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const NOT_FOUND_QUICK_ACTIONS: QuickNavigation[] = [
  {
    icon: 'home',
    label: 'Go Home',
    description: 'Return to the main page',
    path: ROUTES.HOME,
  },
  {
    icon: 'gamepad',
    label: 'Browse Games',
    description: 'Explore our game library',
    path: ROUTES.GAMES,
  },
  {
    icon: 'users',
    label: 'Find Players',
    description: 'Connect with other gamers',
    path: ROUTES.PLAYERS,
  },
  {
    icon: 'trophy',
    label: 'View Leaderboards',
    description: 'See top players',
    path: ROUTES.LEADERBOARD,
  },
];
