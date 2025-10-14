import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface PrivacyOption {
  key: keyof PrivacySettings;
  label: string;
  description: string;
  icon: IconProp;
  type: 'toggle' | 'select';
  options?: { value: string; label: string }[];
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  showOnlineStatus: boolean;
  allowFriendRequests: boolean;
  gameHistoryVisibility: boolean;
  showAchievements: boolean;
}
