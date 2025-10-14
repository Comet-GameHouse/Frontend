import type { Tournament, TournamentCategory, QuickNavigation } from './types';
import { ROUTES } from '@constants';

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Weekly Blitz Championship',
    game: 'Cosmic Clash',
    gameIcon: 'rocket',
    format: '1v1',
    status: 'registration',
    entryFee: 50, // Now represents coins
    prizePool: 1000, // Now represents coins
    maxPlayers: 64,
    registeredPlayers: 42,
    startDate: '2024-01-20T18:00:00Z',
    endDate: '2024-01-20T22:00:00Z',
    duration: '4 hours',
    rules: 'Single elimination, best of 3 matches',
    platform: 'pc',
    difficulty: 'intermediate',
  },
  {
    id: '2',
    name: 'Speedrun Showdown',
    game: 'Nebula Runner',
    gameIcon: 'running',
    format: 'time-trial',
    status: 'live',
    entryFee: 25, // Coins
    prizePool: 500, // Coins
    maxPlayers: 100,
    registeredPlayers: 87,
    startDate: '2024-01-19T14:00:00Z',
    endDate: '2024-01-21T14:00:00Z',
    duration: '48 hours',
    rules: 'Fastest time wins, multiple attempts allowed',
    platform: 'cross-platform',
    difficulty: 'advanced',
  },
  {
    id: '3',
    name: 'Battle Royale Mayhem',
    game: 'Starfall Survivors',
    gameIcon: 'users',
    format: 'battle-royale',
    status: 'upcoming',
    entryFee: 0, // Free tournament
    prizePool: 250, // Coins
    maxPlayers: 50,
    registeredPlayers: 35,
    startDate: '2024-01-22T20:00:00Z',
    endDate: '2024-01-22T23:00:00Z',
    duration: '3 hours',
    rules: 'Last player standing, 3 lives per player',
    platform: 'console',
    difficulty: 'beginner',
  },
  {
    id: '4',
    name: 'Score Attack Masters',
    game: 'Galaxy Defender',
    gameIcon: 'star',
    format: 'score-attack',
    status: 'completed',
    entryFee: 100, // Coins
    prizePool: 2000, // Coins
    maxPlayers: 32,
    registeredPlayers: 32,
    startDate: '2024-01-15T16:00:00Z',
    endDate: '2024-01-15T19:00:00Z',
    duration: '3 hours',
    rules: 'Highest score after 3 attempts wins',
    platform: 'pc',
    difficulty: 'expert',
  },
  {
    id: '5',
    name: 'Quick Match Tournament',
    game: 'Quantum Duels',
    gameIcon: 'bolt',
    format: '1v1',
    status: 'registration',
    entryFee: 10, // Coins
    prizePool: 200, // Coins
    maxPlayers: 16,
    registeredPlayers: 8,
    startDate: '2024-01-21T15:00:00Z',
    endDate: '2024-01-21T17:00:00Z',
    duration: '2 hours',
    rules: 'Single elimination, best of 1 matches',
    platform: 'mobile',
    difficulty: 'beginner',
  },
];

export const tournamentCategories: TournamentCategory[] = [
  {
    id: 'all',
    name: 'All Tournaments',
    description: 'Browse all available tournaments',
    icon: 'trophy',
    count: 5,
  },
  {
    id: 'registration',
    name: 'Open Registration',
    description: 'Tournaments you can join now',
    icon: 'user-plus',
    count: 2,
  },
  {
    id: 'live',
    name: 'Live Now',
    description: 'Currently running tournaments',
    icon: 'play-circle',
    count: 1,
  },
  {
    id: 'upcoming',
    name: 'Upcoming',
    description: 'Tournaments starting soon',
    icon: 'clock',
    count: 1,
  },
  {
    id: 'completed',
    name: 'Completed',
    description: 'Past tournament results',
    icon: 'history',
    count: 1,
  },
  {
    id: 'free',
    name: 'Free Entry',
    description: 'No entry fee required',
    icon: 'dollar-sign',
    count: 1,
  },
];

export const TOURNAMENTS_QUICK_ACTIONS: QuickNavigation[] = [
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
    label: 'Invite Friends',
    description: 'Invite friends to play together',
    path: ROUTES.FRIENDS,
  },
];
