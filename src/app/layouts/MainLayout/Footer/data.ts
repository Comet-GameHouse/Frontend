import type { SocialLink, FooterSection } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Discord', path: 'https://discord.gg/comet', icon: 'discord' },
  { name: 'Twitter', path: 'https://twitter.com/cometgamehouse', icon: 'twitter' },
  { name: 'YouTube', path: 'https://youtube.com/cometgamehouse', icon: 'youtube' },
  { name: 'Instagram', path: 'https://instagram.com/cometgamehouse', icon: 'instagram' }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Gaming',
    links: [
      { label: 'All Games', path: '/games' },
      { label: 'Tournaments', path: '/tournaments' },
      { label: 'Leaderboard', path: '/leaderboard' },
      { label: 'Achievements', path: '/achievements' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'Forums', path: '/forums' },
      { label: 'Events', path: '/events' },
      { label: 'Clubs', path: '/clubs' },
      { label: 'Streamers', path: '/streamers' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Bug Reports', path: '/bugs' },
      { label: 'Status', path: '/status' }
    ]
  }
];