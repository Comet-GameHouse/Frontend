import type { SupportCategory } from './types';

export const supportCategories: SupportCategory[] = [
  {
    id: 'account',
    name: 'Account Issues',
    description: 'Login problems, password reset, account recovery',
    icon: 'user-cog',
  },
  {
    id: 'billing',
    name: 'Billing & Payments',
    description: 'Purchase issues, refund requests, payment methods',
    icon: 'credit-card',
  },
  {
    id: 'technical',
    name: 'Technical Support',
    description: 'Game crashes, performance issues, bug reports',
    icon: 'tools',
  },
  {
    id: 'gameplay',
    name: 'Gameplay Help',
    description: 'Game rules, strategies, feature explanations',
    icon: 'gamepad',
  },
  {
    id: 'report',
    name: 'Report Player',
    description: 'Report inappropriate behavior or cheating',
    icon: 'flag',
  },
  {
    id: 'feedback',
    name: 'Feedback & Suggestions',
    description: 'Share your ideas and suggestions for improvement',
    icon: 'lightbulb',
  },
];
