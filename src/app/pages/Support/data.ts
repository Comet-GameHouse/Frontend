import { ROUTES } from '@constants';
import type { SupportCard, SupportCategory, SupportStats } from './types';

export const supportCards: SupportCard[] = [
  {
    id: 'contact',
    title: 'Contact Support',
    description: 'Get direct help from our support team via email or live chat',
    icon: 'headset',
    path: ROUTES.CONTACT,
    color: 'blue',
    stats: '24/7 Available',
  },
  {
    id: 'help-center',
    title: 'Help Center',
    description: 'Find answers to common questions in our knowledge base',
    icon: 'book',
    path: ROUTES.HELP,
    color: 'green',
    stats: '500+ Articles',
  },
  {
    id: 'forums',
    title: 'Community Forums',
    description: 'Connect with other players and share solutions',
    icon: 'users',
    path: ROUTES.FORUMS,
    color: 'purple',
    stats: 'Active Community',
  },
  {
    id: 'status',
    title: 'System Status',
    description: 'Check server status and ongoing maintenance',
    icon: 'server',
    path: ROUTES.STATUS,
    color: 'orange',
    stats: '99.9% Uptime',
  },
  {
    id: 'report',
    title: 'Report Issue',
    description: 'Report bugs, cheating, or other game issues',
    icon: 'flag',
    path: ROUTES.BUGS,
    color: 'red',
    stats: 'Quick Response',
  },
  {
    id: 'feedback',
    title: 'Submit Feedback',
    description: 'Share your ideas to improve Comet-GameHouse',
    icon: 'comment',
    path: ROUTES.FEEDBACK,
    color: 'blue',
    stats: 'We Listen',
  },
];

export const supportCategories: SupportCategory[] = [
  {
    id: 'account',
    title: 'Account & Security',
    description: 'Login issues, password reset, security settings',
    icon: 'user-shield',
    articles: [
      {
        id: 'reset-password',
        title: 'How to Reset Your Password',
        description: 'Step-by-step guide to recover your account access',
        readTime: '3 min',
        popular: true,
      },
      {
        id: 'enable-2fa',
        title: 'Enable Two-Factor Authentication',
        description: 'Secure your account with 2FA protection',
        readTime: '5 min',
        popular: true,
      },
      {
        id: 'account-recovery',
        title: 'Account Recovery Process',
        description: 'What to do if you lost access to your account',
        readTime: '4 min',
      },
    ],
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    description: 'Purchase issues, refund requests, payment methods',
    icon: 'credit-card',
    articles: [
      {
        id: 'failed-payment',
        title: 'Failed Payment Solutions',
        description: 'Troubleshoot common payment issues',
        readTime: '3 min',
        popular: true,
      },
      {
        id: 'refund-policy',
        title: 'Refund Policy Explained',
        description: 'Understand our refund and return policies',
        readTime: '6 min',
      },
      {
        id: 'payment-methods',
        title: 'Supported Payment Methods',
        description: 'All available ways to purchase coins and boosts',
        readTime: '4 min',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Performance issues, bugs, system requirements',
    icon: 'tools',
    articles: [
      {
        id: 'system-requirements',
        title: 'System Requirements',
        description: 'Minimum and recommended specifications',
        readTime: '2 min',
        popular: true,
      },
      {
        id: 'performance-issues',
        title: 'Fix Performance Issues',
        description: 'Optimize your gaming experience',
        readTime: '5 min',
      },
      {
        id: 'connection-problems',
        title: 'Connection Problems',
        description: 'Solve network and connectivity issues',
        readTime: '4 min',
      },
    ],
  },
  {
    id: 'gameplay',
    title: 'Gameplay Help',
    description: 'Game mechanics, rules, and how to play',
    icon: 'gamepad',
    articles: [
      {
        id: 'getting-started',
        title: 'Getting Started Guide',
        description: 'Learn the basics of Comet-GameHouse',
        readTime: '8 min',
        popular: true,
      },
      {
        id: 'boost-guide',
        title: 'Using Boosts Effectively',
        description: 'Maximize your earnings with boost cards',
        readTime: '6 min',
      },
      {
        id: 'leaderboard-system',
        title: 'Leaderboard System Explained',
        description: 'How rankings and points are calculated',
        readTime: '5 min',
      },
    ],
  },
];

export const supportStats: SupportStats = {
  activeTickets: 47,
  resolvedToday: 324,
  avgResponseTime: '< 2 hours',
  satisfactionRate: '98%',
};