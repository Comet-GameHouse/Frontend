import type { DiscordChannel } from './types';

export const discordChannels: DiscordChannel[] = [
  {
    id: 'announcements',
    name: '📢 announcements',
    type: 'announcement',
    description: 'Important updates and news from the team',
    members: 15200,
    unread: true,
  },
  {
    id: 'general',
    name: '💬 general',
    type: 'text',
    description: 'General discussion about games and community',
    members: 8470,
    unread: false,
  },
  {
    id: 'lfg',
    name: '🎯 looking-for-group',
    type: 'text',
    description: 'Find teammates for your next gaming session',
    members: 3240,
    unread: true,
  },
  {
    id: 'voice-general',
    name: '🔊 Voice Chat',
    type: 'voice',
    description: 'General voice channel for hanging out',
    members: 156,
    unread: false,
  },
];
