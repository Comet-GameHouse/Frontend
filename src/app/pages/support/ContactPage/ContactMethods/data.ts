import type { ContactMethod } from './types';

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    type: 'email',
    title: 'Email Support',
    description:
      "Send us a detailed message and we'll get back to you as soon as possible",
    icon: 'envelope',
    availability: '24/7',
    responseTime: 'Within 24 hours',
    action: 'Send Email',
    link: 'mailto:support@cometgamehouse.com',
  },
  {
    id: 'live-chat',
    type: 'live-chat',
    title: 'Live Chat',
    description: 'Chat directly with our support team for immediate assistance',
    icon: 'comments',
    availability: 'Mon-Fri, 9AM-6PM EST',
    responseTime: 'Within 5 minutes',
    action: 'Start Chat',
  },
  {
    id: 'community',
    type: 'community',
    title: 'Community Forums',
    description: 'Get help from other players and community experts',
    icon: 'users',
    availability: '24/7',
    responseTime: 'Varies',
    action: 'Visit Forums',
    link: '/community/forums',
  },
  {
    id: 'status',
    type: 'status',
    title: 'System Status',
    description: "Check if we're experiencing any service interruptions",
    icon: 'signal',
    availability: '24/7',
    responseTime: 'Real-time',
    action: 'Check Status',
    link: '/support/status',
  },
];