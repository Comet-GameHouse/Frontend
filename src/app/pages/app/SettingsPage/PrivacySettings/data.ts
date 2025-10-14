import type { PrivacyOption } from './types';

export const privacyOptions: PrivacyOption[] = [
  {
    key: 'profileVisibility',
    label: 'Profile Visibility',
    description: 'Control who can see your profile',
    icon: 'eye',
    type: 'select',
    options: [
      { value: 'public', label: 'Public' },
      { value: 'friends', label: 'Friends Only' },
      { value: 'private', label: 'Private' },
    ],
  },
  {
    key: 'showOnlineStatus',
    label: 'Show Online Status',
    description: 'Allow others to see when you are online',
    icon: 'circle',
    type: 'toggle',
  },
  {
    key: 'allowFriendRequests',
    label: 'Allow Friend Requests',
    description: 'Receive friend requests from other players',
    icon: 'user-friends',
    type: 'toggle',
  },
  {
    key: 'gameHistoryVisibility',
    label: 'Game History Visibility',
    description: 'Show your game history to others',
    icon: 'history',
    type: 'toggle',
  },
  {
    key: 'showAchievements',
    label: 'Show Achievements',
    description: 'Display your achievements on your profile',
    icon: 'trophy',
    type: 'toggle',
  },
];
