import type { NotificationType, NotificationPosition } from '@components';

export interface NotificationItem {
  id: string;
  message: string;
  type: NotificationType;
  duration: number;
  position: NotificationPosition;
}

export interface NotificationContextType {
  notifications: NotificationItem[];
  showNotification: (
    message: string,
    type?: NotificationType,
    duration?: number,
    position?: NotificationPosition
  ) => void;
  hideNotification: (id: string) => void;
}
