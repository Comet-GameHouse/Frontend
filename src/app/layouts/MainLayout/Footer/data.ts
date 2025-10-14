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
    title: 'Play & Connect',
    path: ROUTES.GAMES,
    links: [
      { label: 'All Games', path: ROUTES.GAMES },
      { label: 'Tournaments', path: ROUTES.TOURNAMENTS },
      { label: 'Leaderboard', path: ROUTES.LEADERBOARD },
      { label: 'Achievements', path: ROUTES.ACHIEVEMENTS },
      { label: 'Community Hub', path: ROUTES.COMMUNITY },
      { label: 'Friends', path: ROUTES.FRIENDS },
      { label: 'Shop', path: ROUTES.SHOP },
    ],
  },
  {
    title: 'Account & Help',
    path: ROUTES.DASHBOARD,
    links: [
      { label: 'Dashboard', path: ROUTES.DASHBOARD },
      { label: 'My Profile', path: ROUTES.MY_PROFILE },
      { label: 'Settings', path: ROUTES.SETTINGS },
      { label: 'Notifications', path: ROUTES.NOTIFICATIONS },
      { label: 'Help Center', path: ROUTES.HELP },
      { label: 'Bug Reports', path: ROUTES.BUGS },
      { label: 'System Status', path: ROUTES.STATUS },
      { label: 'Feedback', path: ROUTES.FEEDBACK },
    ],
  },
  {
    title: 'Company & Legal',
    path: ROUTES.ABOUT_US,
    links: [
      { label: 'About Us', path: ROUTES.ABOUT_US },
      { label: 'Contact', path: ROUTES.CONTACT },
      { label: 'Support Home', path: ROUTES.SUPPORT },
      { label: 'Terms of Service', path: ROUTES.TERMS },
      { label: 'Privacy Policy', path: ROUTES.PRIVACY },
    ],
  },
];
