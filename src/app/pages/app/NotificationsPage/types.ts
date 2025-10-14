import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Notification {
  id: string;
  type: 'friend_request' | 'game_invite' | 'tournament' | 'system' | 'achievement' | 'message';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  sender?: {
    id: string;
    username: string;
    avatar?: string;
  };
  game?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface NotificationCategory {
  id: string;
  name: string;
  description: string;
  icon: IconProp;
  count: number;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}