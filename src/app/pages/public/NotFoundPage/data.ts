import type { QuickAction } from '@app/components';
import { ROUTES } from '@app/constants';

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'home',
    label: 'Home',
    description: 'Back to home page',
    path: ROUTES.HOME,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'gamepad',
    label: 'Games',
    description: 'Browse games',
    path: ROUTES.GAMES,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'question-circle',
    label: 'Support',
    description: 'Get help',
    path: ROUTES.SUPPORT,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'info-circle',
    label: 'About',
    description: 'Learn about us',
    path: ROUTES.ABOUT_US,
    color: 'from-purple-500 to-pink-500',
  },
];
