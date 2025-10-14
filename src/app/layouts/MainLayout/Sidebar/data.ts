import type { SidebarItem, SidebarUser } from './types';
import { ROUTES } from '@constants';

export const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: 'tachometer-alt' },
  { label: 'Games', path: ROUTES.GAMES, icon: 'gamepad', badge: 3 },
  { label: 'Tournaments', path: ROUTES.TOURNAMENTS, icon: 'trophy', badge: 2 },
  { label: 'Leaderboard', path: ROUTES.LEADERBOARD, icon: 'chart-bar' },
  { label: 'Friends', path: ROUTES.FRIENDS, icon: 'users', badge: 5 },
  { label: 'Notifications', path: ROUTES.NOTIFICATIONS, icon: 'bell', badge: 7 },
  { label: 'Achievements', path: ROUTES.ACHIEVEMENTS, icon: 'award' },
  { label: 'Shop', path: ROUTES.SHOP, icon: 'store' },
  { label: 'Settings', path: ROUTES.SETTINGS, icon: 'cog' },
];

export const mockUser: SidebarUser = {
  name: 'GameMaster',
  avatar: '🚀',
  level: 42,
};

export const transitionStyles = 'transition-all duration-100 ease-out';