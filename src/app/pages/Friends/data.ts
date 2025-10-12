import type { Friend, FriendRequest, QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const friendsList: Friend[] = [
  {
    id: '1',
    username: 'ProGamer99',
    avatar: '',
    status: 'ingame',
    game: 'Cosmic Clash',
    lastOnline: 'Now',
    friendshipDate: '2024-01-10',
    mutualFriends: 12
  },
  {
    id: '2',
    username: 'ShadowHunter',
    avatar: '',
    status: 'online',
    lastOnline: 'Now',
    friendshipDate: '2024-01-05',
    mutualFriends: 8
  },
  {
    id: '3',
    username: 'NeonBlade',
    avatar: '',
    status: 'away',
    lastOnline: '2 hours ago',
    friendshipDate: '2024-01-02',
    mutualFriends: 5
  },
  {
    id: '4',
    username: 'QuantumQueen',
    avatar: '',
    status: 'offline',
    lastOnline: '1 day ago',
    friendshipDate: '2023-12-28',
    mutualFriends: 3
  },
  {
    id: '5',
    username: 'EpicPlayer',
    avatar: '',
    status: 'ingame',
    game: 'Star Raiders',
    lastOnline: 'Now',
    friendshipDate: '2023-12-20',
    mutualFriends: 15
  },
  {
    id: '6',
    username: 'MysticGamer',
    avatar: '',
    status: 'online',
    lastOnline: 'Now',
    friendshipDate: '2023-12-15',
    mutualFriends: 7
  }
];

export const friendRequests: FriendRequest[] = [
  {
    id: 'req1',
    fromUser: {
      id: '7',
      username: 'NewPlayer123',
      avatar: ''
    },
    sentAt: '2 hours ago',
    mutualFriends: 2
  },
  {
    id: 'req2',
    fromUser: {
      id: '8',
      username: 'GameMaster',
      avatar: ''
    },
    sentAt: '1 day ago',
    mutualFriends: 5
  }
];

export const FRIENDS_QUICK_ACTIONS: QuickNavigation[] = [
  {
    icon: 'home',
    label: 'Go Home',
    description: 'Return to the main dashboard',
    path: ROUTES.HOME,
  },
  {
    icon: 'gamepad',
    label: 'Browse Games',
    description: 'Explore our game library',
    path: ROUTES.GAMES,
  },
  {
    icon: 'users',
    label: 'Community',
    description: 'Join our Discord community',
    path: ROUTES.COMMUNITY,
  },
  {
    icon: 'user-plus',
    label: 'Add Friends',
    description: 'Find new friends to play with',
    path: ROUTES.SEARCH,
  },
];