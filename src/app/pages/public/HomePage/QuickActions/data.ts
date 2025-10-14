import type { QuickAction } from './types';

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'plus',
    text: 'Create Room',
    description: 'Start your own game session',
    path: '/create-room',
  },
  {
    icon: 'users',
    text: 'Join Room',
    description: 'Enter with room code',
    path: '/join-room',
  },
  {
    icon: 'random',
    text: 'Quick Play',
    description: 'Join random game instantly',
    path: '/quick-play',
  },
  {
    icon: 'coins',
    text: 'Buy Coins',
    description: 'Get game currency',
    path: '/shop',
  },
  {
    icon: 'trophy',
    text: 'Tournaments',
    description: 'Compete for prizes',
    path: '/tournaments',
  },
  {
    icon: 'user-friends',
    text: 'Find Friends',
    description: 'Connect with players',
    path: '/community',
  },
];
