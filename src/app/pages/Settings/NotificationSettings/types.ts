import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  gameInvites: boolean;
  friendRequests: boolean;
  newsletter: boolean;
  specialOffers: boolean;
}

export interface NotificationOption {
  key: keyof NotificationSettings;
  label: string;
  description: string;
  icon: IconProp;
  color: string;
}
