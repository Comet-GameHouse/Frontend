import { ROUTES } from '@constants';

export const NAVIGATION_ITEMS = [
  // { path: ROUTES.HOME, label: 'Home', icon: 'home' },
  { path: ROUTES.GAMES, label: 'Games', icon: 'gamepad' },
  { path: ROUTES.SHOP, label: 'Shop', icon: 'shopping-bag' },
  { path: ROUTES.LEADERBOARD, label: 'Leaderboard', icon: 'trophy' },
  { path: ROUTES.COMMUNITY, label: 'Community', icon: 'users' },
] as const;

export const USER_MENU_ITEMS = [
  { label: 'Dashboard', icon: 'dashboard', path: ROUTES.DASHBOARD },
  { label: 'Profile', icon: 'user', path: ROUTES.MY_PROFILE },
  { label: 'Settings', icon: 'cog', path: ROUTES.SETTINGS },
] as const;
