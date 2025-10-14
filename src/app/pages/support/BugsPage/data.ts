import type { BugCategory, BugPriority, QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const bugCategories: BugCategory[] = [
  {
    id: 'gameplay',
    name: 'Gameplay',
    description: 'Issues with game mechanics, controls, or core gameplay',
    icon: 'gamepad',
    color: 'blue'
  },
  {
    id: 'graphics',
    name: 'Graphics & Visual',
    description: 'Visual glitches, rendering issues, or display problems',
    icon: 'eye',
    color: 'purple'
  },
  {
    id: 'audio',
    name: 'Audio & Sound',
    description: 'Sound effects, music, or audio-related issues',
    icon: 'volume-up',
    color: 'green'
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Lag, frame rate drops, or performance problems',
    icon: 'tachometer-alt',
    color: 'orange'
  },
  {
    id: 'network',
    name: 'Network & Connection',
    description: 'Connectivity, matchmaking, or server issues',
    icon: 'wifi',
    color: 'red'
  },
  {
    id: 'ui-ux',
    name: 'UI/UX',
    description: 'User interface, menus, or user experience problems',
    icon: 'desktop',
    color: 'cyan'
  },
  {
    id: 'crash',
    name: 'Crashes & Freezes',
    description: 'Game crashes, freezes, or unexpected closures',
    icon: 'exclamation-triangle',
    color: 'red'
  },
  {
    id: 'other',
    name: 'Other Issues',
    description: 'Any other bugs not covered by above categories',
    icon: 'question-circle',
    color: 'gray'
  }
];

export const bugPriorities: BugPriority[] = [
  {
    id: 'critical',
    name: 'Critical',
    description: 'Game-breaking issue affecting all players',
    color: 'red',
    responseTime: 'Within 2 hours'
  },
  {
    id: 'high',
    name: 'High',
    description: 'Major functionality broken for many players',
    color: 'orange',
    responseTime: 'Within 6 hours'
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Significant issue affecting some players',
    color: 'yellow',
    responseTime: 'Within 24 hours'
  },
  {
    id: 'low',
    name: 'Low',
    description: 'Minor issue or cosmetic problem',
    color: 'green',
    responseTime: 'Within 3 days'
  }
];

export const platforms = [
  'Windows PC',
  'macOS',
  'Linux',
  'PlayStation 5',
  'Xbox Series X/S',
  'Nintendo Switch',
  'Mobile (iOS)',
  'Mobile (Android)',
  'Web Browser'
];

export const BUG_REPORT_QUICK_ACTIONS: QuickNavigation[] = [
  {
    icon: 'home',
    label: 'Go Home',
    description: 'Return to the main dashboard',
    path: ROUTES.HOME,
  },
  {
    icon: 'gamepad',
    label: 'Browse Games',
    description: 'Explore our game library',
    path: ROUTES.GAMES,
  },
  {
    icon: 'headset',
    label: 'Get Support',
    description: 'Contact our support team',
    path: ROUTES.SUPPORT,
  },
  {
    icon: 'server',
    label: 'System Status',
    description: 'Check service status',
    path: ROUTES.STATUS,
  },
];