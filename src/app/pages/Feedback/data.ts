import type { QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const feedbackCategories = [
  { id: 'overall', name: 'Overall Experience', icon: 'star', color: 'yellow' },
  { id: 'gameplay', name: 'Gameplay', icon: 'gamepad', color: 'blue' },
  {
    id: 'performance',
    name: 'Performance',
    icon: 'tachometer-alt',
    color: 'green',
  },
  { id: 'ui-ux', name: 'UI/UX', icon: 'desktop', color: 'purple' },
  { id: 'content', name: 'Content', icon: 'plus-circle', color: 'orange' },
];

export const FEEDBACK_QUICK_ACTIONS: QuickNavigation[] = [
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
    icon: 'bug',
    label: 'Report Bug',
    description: 'Submit a bug report',
    path: ROUTES.BUGS,
  },
  {
    icon: 'server',
    label: 'System Status',
    description: 'Check service status',
    path: ROUTES.STATUS,
  },
];
