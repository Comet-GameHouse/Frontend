import type { QuickAction } from '@app/components';
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

export const FEEDBACK_QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'life-ring',
    label: 'Support Home',
    description: 'All support options',
    path: ROUTES.SUPPORT,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'envelope',
    label: 'Contact',
    description: 'Direct contact',
    path: ROUTES.CONTACT,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'bug',
    label: 'Bug Reports',
    description: 'Technical issues',
    path: ROUTES.BUGS,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'question-circle',
    label: 'Help Center',
    description: 'Knowledge base',
    path: ROUTES.HELP,
    color: 'from-purple-500 to-pink-500',
  },
];
