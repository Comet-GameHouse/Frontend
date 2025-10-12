import type { SocialLink, FooterSection } from './types';
import { ROUTES } from '@constants';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Discord', path: 'https://discord.gg/comet', icon: 'discord' },
  {
    name: 'Twitter',
    path: 'https://twitter.com/cometgamehouse',
    icon: 'twitter',
  },
  {
    name: 'YouTube',
    path: 'https://youtube.com/cometgamehouse',
    icon: 'youtube',
  },
  {
    name: 'Instagram',
    path: 'https://instagram.com/cometgamehouse',
    icon: 'instagram',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Gaming',
    path: ROUTES.HOME,
    links: [
      { label: 'All Games', path: ROUTES.GAMES },
      { label: 'Tournaments', path: ROUTES.TOURNAMENTS },
      { label: 'Leaderboard', path: ROUTES.LEADERBOARD },
      { label: 'Achievements', path: ROUTES.ACHIEVEMENTS },
    ],
  },
  {
    title: 'Account',
    path: ROUTES.MY_PROFILE,
    links: [
      { label: 'Dashboard', path: ROUTES.DASHBOARD },
      { label: 'Friends', path: ROUTES.FRIENDS },
      { label: 'Notifications', path: ROUTES.NOTIFICATIONS },
      { label: 'Settings', path: ROUTES.SETTINGS },
    ],
  },
  {
    title: 'Support',
    path: ROUTES.SUPPORT,
    links: [
      { label: 'Help Center', path: ROUTES.HELP },
      { label: 'Contact Us', path: ROUTES.CONTACT },
      { label: 'Bug Reports', path: ROUTES.BUGS },
      { label: 'Status', path: ROUTES.STATUS },
    ],
  },
];
