import { type QuickAction } from '@app/components';
import { ROUTES } from '@app/constants';

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'play-circle',
    label: 'Quick Play',
    description: 'Instant game session',
    path: ROUTES.GAMES + '?quick-play=true',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'trophy',
    label: 'Daily Tournament',
    description: "Join today's event",
    path: ROUTES.TOURNAMENTS + '?filter=daily',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'user-plus',
    label: 'Get Started',
    description: 'Create free account',
    path: ROUTES.SIGN_UP,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'coins',
    label: 'Earn Coins',
    description: 'Play to win rewards',
    path: ROUTES.ACHIEVEMENTS,
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'users',
    label: 'Find Friends',
    description: 'Connect with players',
    path: ROUTES.COMMUNITY,
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: 'star',
    label: 'Featured Game',
    description: "Try this week's highlight",
    path: ROUTES.GAME_DETAILS + '/featured',
    color: 'from-indigo-500 to-blue-500',
  },
];
