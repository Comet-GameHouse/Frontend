export interface DiscordChannel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'announcement';
  description: string;
  members?: number;
  unread?: boolean;
}
