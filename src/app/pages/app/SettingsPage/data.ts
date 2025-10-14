import type { UserProfile } from './ProfileSettings';
import type { NotificationSettingsType as NotificationSettings } from './NotificationSettings';
import type { AccountAction } from './AccountActions';
import type { PrivacySettingsType as PrivacySettings } from './PrivacySettings';
import type { NavigationItem } from './SettingsNavigation';

export const initialUserProfile: UserProfile = {
  firstName: 'Akira',
  lastName: 'Nakamura',
  username: 'GameMaster42',
  email: 'gamer@cometgamehouse.com',
  avatar: '/favicon.png',
  joinDate: '2023-01-15',
  status: 'online',
};

export const initialNotificationSettings: NotificationSettings = {
  emailNotifications: true,
  pushNotifications: true,
  gameInvites: true,
  friendRequests: true,
  newsletter: false,
  specialOffers: true,
};

export const initialPrivacySettings: PrivacySettings = {
  profileVisibility: 'friends',
  showOnlineStatus: true,
  allowFriendRequests: true,
  gameHistoryVisibility: true,
  showAchievements: true,
};

export const accountActions: AccountAction[] = [
  {
    id: 'export-data',
    title: 'Export Data',
    description: 'Download all your game data and personal information',
    icon: 'download',
    type: 'info',
    action: () => console.log('Export data'),
  },
  {
    id: 'change-password',
    title: 'Change Password',
    description: 'Update your account password',
    icon: 'key',
    type: 'warning',
    action: () => console.log('Change password'),
  },
  {
    id: 'delete-account',
    title: 'Delete Account',
    description: 'Permanently delete your account and all data',
    icon: 'trash',
    type: 'danger',
    action: () => console.log('Delete account'),
  },
];

export const navigationItems: NavigationItem[] = [
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'notifications', label: 'Notifications', icon: 'bell' },
  { id: 'privacy', label: 'Privacy & Security', icon: 'shield-alt' },
  { id: 'account', label: 'Account Actions', icon: 'cog' },
];
