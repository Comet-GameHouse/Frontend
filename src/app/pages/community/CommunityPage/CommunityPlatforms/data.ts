import type { CommunityPlatform } from "./types";

export const communityPlatforms: CommunityPlatform[] = [
  {
    id: 'discord',
    name: 'Discord Community',
    icon: ['fab', 'discord'],
    description:
      'Join our vibrant Discord community to chat, team up, and stay updated with the latest events and announcements.',
    members: '15.2K',
    online: '3.8K',
    link: 'https://discord.gg/comet-gamehouse',
    color: '#5865F2',
    gradient: 'from-blue-600 to-purple-600',
    features: [
      'Real-time game discussions',
      'LFG (Looking for Group) channels',
      'Exclusive tournament announcements',
      'Developer Q&A sessions',
      'Voice chat for team play',
    ],
  },
  {
    id: 'reddit',
    name: 'Reddit Community',
    icon: ['fab', 'reddit'],
    description:
      'Share your gameplay clips, strategies, and join discussions with fellow Comet GameHouse enthusiasts.',
    members: '8.7K',
    online: '1.2K',
    link: 'https://reddit.com/r/cometgamehouse',
    color: '#FF5700',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Game strategy discussions',
      'Clip sharing & feedback',
      'Community polls',
      'Developer updates',
      'Fan art showcase',
    ],
  },
];