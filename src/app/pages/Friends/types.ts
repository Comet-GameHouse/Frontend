import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'ingame' | 'away' | 'offline';
  game?: string;
  lastOnline: string;
  friendshipDate: string;
  mutualFriends: number;
}

export interface FriendRequest {
  id: string;
  fromUser: {
    id: string;
    username: string;
    avatar: string;
  };
  sentAt: string;
  mutualFriends: number;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}