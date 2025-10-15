import type { QuickAction } from '@app/components';
import { ROUTES } from '@app/constants';

export const emergencyContacts = {
  critical: 'critical@cometgamehouse.com',
  security: 'security@cometgamehouse.com',
  legal: 'legal@cometgamehouse.com',
};

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'life-ring',
    label: 'Support Home',
    description: 'All support options',
    path: ROUTES.SUPPORT,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'question-circle',
    label: 'Help Center',
    description: 'Knowledge base',
    path: ROUTES.HELP,
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
    icon: 'comment-alt',
    label: 'Feedback',
    description: 'Share suggestions',
    path: ROUTES.FEEDBACK,
    color: 'from-purple-500 to-pink-500',
  },
];
