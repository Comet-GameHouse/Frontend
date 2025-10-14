import type { HelpItem, FAQItem, QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const helpItems: HelpItem[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to Comet-GameHouse? Start here',
    briefAnswer: 'Download the game, create your account, complete the tutorial, and start playing! Basic controls and game mechanics are covered in the tutorial.',
    discordChannel: 'getting-started',
    icon: 'rocket',
    color: 'blue'
  },
  {
    id: 'account-issues',
    title: 'Account & Login Issues',
    description: 'Password reset, 2FA, and account recovery',
    briefAnswer: 'Use the "Forgot Password" feature on login. For other account issues, contact support with your username and email.',
    discordChannel: 'account-help',
    icon: 'user-shield',
    color: 'green'
  },
  {
    id: 'gameplay-help',
    title: 'Gameplay Help',
    description: 'Game mechanics, controls, and strategies',
    briefAnswer: 'Check the in-game tutorial and practice mode. Advanced strategies and tips are discussed in our community channels.',
    discordChannel: 'gameplay-help',
    icon: 'gamepad',
    color: 'purple'
  },
  {
    id: 'technical-issues',
    title: 'Technical Issues',
    description: 'Performance, crashes, and connection problems',
    briefAnswer: 'Update your graphics drivers, check internet connection, and verify game files. For persistent issues, share your system specs.',
    discordChannel: 'tech-support',
    icon: 'tools',
    color: 'orange'
  },
  {
    id: 'billing-help',
    title: 'Billing & Payments',
    description: 'Purchase issues, refunds, and payment methods',
    briefAnswer: 'Most payment issues resolve within 24 hours. For refunds, contact support immediately after accidental purchase.',
    discordChannel: 'billing-support',
    icon: 'credit-card',
    color: 'yellow'
  },
  {
    id: 'boost-cards',
    title: 'Boost Cards & Economy',
    description: 'Using boost cards and earning coins',
    briefAnswer: 'Boost cards multiply your earnings. Use them during active gameplay. Earn coins by winning matches and completing daily quests.',
    discordChannel: 'gameplay-help',
    icon: 'chart-line',
    color: 'cyan'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'system-requirements',
    question: 'What are the system requirements?',
    answer: 'Minimum: Windows 10, Intel i3, 4GB RAM, 2GB GPU. Recommended: Windows 11, Intel i5, 8GB RAM, 4GB GPU. Stable internet connection required.'
  },
  {
    id: 'team-size',
    question: 'How many players can be in a team?',
    answer: 'Teams can have up to 10 members, with 5 players participating in matches simultaneously. You can have substitute players for tournaments.'
  },
  {
    id: 'boost-duration',
    question: 'How long do boost cards last?',
    answer: 'Silver (7 days), Gold (30 days), Platinum (90 days), Cosmic (Permanent). Check remaining time in your inventory.'
  },
  {
    id: 'refund-policy',
    question: 'What is your refund policy?',
    answer: 'Refunds for accidental purchases within 24 hours if unused. Contact support immediately for mistaken purchases.'
  }
];

export const HELP_QUICK_ACTIONS: QuickNavigation[] = [
  {
    icon: 'home',
    label: 'Go Home',
    description: 'Return to the main dashboard',
    path: ROUTES.HOME,
  },
  {
    icon: 'headset',
    label: 'Contact Support',
    description: 'Get help from our support team',
    path: ROUTES.SUPPORT,
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

export const DISCORD_INVITE_URL = 'https://discord.gg/comet-gamehouse';