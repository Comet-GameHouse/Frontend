export type NotificationType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'premium';
export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface NotificationItem {
  id: string;
  message: string;
  type: NotificationType;
  duration: number;
  position: NotificationPosition;
}
