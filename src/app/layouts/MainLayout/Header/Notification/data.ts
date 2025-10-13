import type { Notification } from './types';

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'tournament',
    title: 'Weekly Tournament Starting!',
    message: 'Space Invaders Weekly Challenge begins in 30 minutes. Ready your skills!',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
    read: false,
    actions: [
      {
        label: 'Join',
        onClick: () => console.log('Join tournament')
      }
    ]
  },
  {
    id: '2',
    type: 'achievement',
    title: 'New Achievement Unlocked!',
    message: 'You earned the "First Blood" achievement and 100 GameCoins!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    read: false,
    actions: [
      {
        label: 'View',
        onClick: () => console.log('View achievement')
      }
    ]
  },
  {
    id: '3',
    type: 'friend',
    title: 'Friend Request',
    message: 'ProPlayer92 sent you a friend request',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    read: true,
    actions: [
      {
        label: 'Accept',
        onClick: () => console.log('Accept friend')
      },
      {
        label: 'Decline',
        onClick: () => console.log('Decline friend')
      }
    ]
  },
  {
    id: '4',
    type: 'reward',
    title: 'Daily Login Bonus',
    message: 'You received 50 GameCoins for logging in today!',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    read: true
  },
  {
    id: '5',
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance tomorrow from 2:00 AM to 4:00 AM UTC',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    read: true
  },
  {
    id: '6',
    type: 'tournament',
    title: 'Tournament Victory!',
    message: 'Congratulations! You finished 3rd in the Weekend Warrior tournament',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    read: true,
    actions: [
      {
        label: 'Claim Prize',
        onClick: () => console.log('Claim prize')
      }
    ]
  }
];