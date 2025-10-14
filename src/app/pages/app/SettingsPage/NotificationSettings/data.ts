import type { NotificationOption } from './types';

export const notificationOptions: NotificationOption[] = [
  {
    key: 'emailNotifications',
    label: 'Email Notifications',
    description: 'Receive notifications via email',
    icon: 'envelope',
    color: 'blue',
  },
  {
    key: 'pushNotifications',
    label: 'Push Notifications',
    description: 'Receive push notifications in browser',
    icon: 'bell',
    color: 'purple',
  },
  {
    key: 'gameInvites',
    label: 'Game Invites',
    description: 'Get notified when friends invite you to play',
    icon: 'gamepad',
    color: 'green',
  },
  {
    key: 'friendRequests',
    label: 'Friend Requests',
    description: 'Notifications for new friend requests',
    icon: 'user-plus',
    color: 'yellow',
  },
  {
    key: 'newsletter',
    label: 'Newsletter',
    description: 'Receive our weekly gaming newsletter',
    icon: 'newspaper',
    color: 'indigo',
  },
  {
    key: 'specialOffers',
    label: 'Special Offers',
    description: 'Get notified about special deals and offers',
    icon: 'tag',
    color: 'pink',
  },
];
