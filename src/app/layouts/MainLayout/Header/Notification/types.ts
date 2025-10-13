export interface Notification {
  id: string;
  type: 'tournament' | 'achievement' | 'friend' | 'system' | 'reward';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actions?: {
    label: string;
    onClick: () => void;
  }[];
}

export interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  lastChecked: string;
}