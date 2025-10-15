import type { QuickAction } from '@app/components';
import type { Notification, NotificationCategory } from './types';
import { ROUTES } from '@constants';

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'friend_request',
    title: 'New Friend Request',
    description: 'ShadowHunter wants to be your friend',
    timestamp: '2 minutes ago',
    read: false,
    priority: 'medium',
    sender: {
      id: '2',
      username: 'ShadowHunter',
    },
  },
  {
    id: '2',
    type: 'game_invite',
    title: 'Game Invite',
    description: 'ProGamer99 invited you to play Cosmic Clash',
    timestamp: '1 hour ago',
    read: false,
    priority: 'high',
    sender: {
      id: '1',
      username: 'ProGamer99',
    },
    game: 'Cosmic Clash',
  },
  {
    id: '3',
    type: 'tournament',
    title: 'Tournament Starting Soon',
    description: 'Weekly Blitz Tournament starts in 30 minutes',
    timestamp: '2 hours ago',
    read: true,
    priority: 'high',
    actionUrl: '/tournaments/weekly-blitz',
  },
  {
    id: '4',
    type: 'achievement',
    title: 'Achievement Unlocked!',
    description: 'You unlocked "First Victory" achievement',
    timestamp: '5 hours ago',
    read: true,
    priority: 'low',
  },
  {
    id: '5',
    type: 'system',
    title: 'System Maintenance',
    description: 'Scheduled maintenance tonight from 2AM - 4AM UTC',
    timestamp: '1 day ago',
    read: true,
    priority: 'medium',
  },
  {
    id: '6',
    type: 'message',
    title: 'New Message',
    description: 'NeonBlade sent you a message',
    timestamp: '2 days ago',
    read: true,
    priority: 'medium',
    sender: {
      id: '3',
      username: 'NeonBlade',
    },
  },
];

export const notificationCategories: NotificationCategory[] = [
  {
    id: 'all',
    name: 'All Notifications',
    description: 'View all your notifications',
    icon: 'bell',
    count: 6,
  },
  {
    id: 'unread',
    name: 'Unread',
    description: "Notifications you haven't read",
    icon: 'envelope',
    count: 2,
  },
  {
    id: 'friends',
    name: 'Friend Requests',
    description: 'Friend requests and social notifications',
    icon: 'user-plus',
    count: 1,
  },
  {
    id: 'games',
    name: 'Game Invites',
    description: 'Game invitations and party requests',
    icon: 'gamepad',
    count: 1,
  },
  {
    id: 'tournaments',
    name: 'Tournaments',
    description: 'Tournament updates and reminders',
    icon: 'trophy',
    count: 1,
  },
  {
    id: 'system',
    name: 'System',
    description: 'Platform updates and maintenance',
    icon: 'cog',
    count: 1,
  },
];

export const NOTIFICATIONS_QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'users',
    label: 'Friends',
    description: 'Manage connections',
    path: ROUTES.FRIENDS,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'trophy',
    label: 'Tournaments',
    description: 'Your competitions',
    path: ROUTES.TOURNAMENTS,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'cog',
    label: 'Settings',
    description: 'Notification preferences',
    path: ROUTES.SETTINGS,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'tachometer-alt',
    label: 'Dashboard',
    description: 'Back to overview',
    path: ROUTES.DASHBOARD,
    color: 'from-purple-500 to-pink-500',
  },
];
