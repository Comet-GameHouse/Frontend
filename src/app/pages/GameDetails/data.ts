import type { GameDetail, GameTab, LeaderboardPlayer, GameRoom, Friend, GameAchievement } from './types';

export const gameData: GameDetail = {
  id: 'space-duel',
  name: 'Space Duel 1v1',
  description: 'Intense 1v1 space combat where only the best pilot survives. Test your skills against players worldwide in fast-paced battles.',
  longDescription: 'Engage in thrilling 1v1 space combat where strategy and quick reflexes determine victory. Customize your spacecraft, master different weapons, and climb the global rankings. With multiple game modes and regular tournaments, every battle is a new challenge.',
  icon: 'rocket',
  category: '1v1 Combat',
  difficulty: 'Hard',
  rating: 4.8,
  reviewCount: 1247,
  activePlayers: 2850,
  totalMatches: 158920,
  totalCoins: 2850000,
  tournamentsCount: 24,
  successRate: 32,
  avgSessionTime: '15 minutes',
  avgGameTime: '3-5 minutes',
  playerCount: 1, // 1:1 battle
  minPlayers: 2,
  maxPlayers: 2,
  releaseDate: '2023-11-15',
  lastUpdated: '2024-01-10',
  rank: 3,
  tags: ['1v1', 'Combat', 'Space', 'Competitive', 'Real-time'],
  features: [
    'Real-time 1v1 battles',
    'Multiple spacecraft classes',
    'Weapon customization',
    'Global ranking system',
    'Skill-based matchmaking',
    'Live spectator mode'
  ],
  gameModes: [
    'Ranked 1v1',
    'Quick Match',
    'Tournament',
    'Practice Mode'
  ],
  howToPlay: [
    {
      title: 'Choose Your Entry Fee',
      description: 'Select from 10 to 10,000 GameCoins to enter a match'
    },
    {
      title: 'Matchmaking',
      description: 'Get matched with a player of similar skill level'
    },
    {
      title: 'Battle',
      description: 'Use your skills to defeat your opponent in space combat'
    },
    {
      title: 'Win Prizes',
      description: 'Winner takes 90% of the total entry fee pool'
    }
  ]
};

export const gameTabs: GameTab[] = [
  { id: 'rooms', label: 'Play Now', icon: 'play' },
  { id: 'overview', label: 'Overview', icon: 'info-circle' },
  { id: 'achievements', label: 'Achievements', icon: 'trophy' }
];

export const roomEntryFees = [10, 25, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

// Active players count for each fee category
export const roomPlayerCounts: { [key: number]: number } = {
  10: 156,
  25: 89,
  50: 67,
  100: 45,
  200: 32,
  500: 18,
  1000: 12,
  2000: 8,
  5000: 4,
  10000: 2
};

export const activeRooms: GameRoom[] = [
  {
    id: '1',
    type: 'custom',
    entryFee: 100,
    currentPlayers: 1,
    maxPlayers: 2,
    potentialPrize: 180,
    creator: 'You',
    invitedFriends: ['ProPlayer92']
  },
  {
    id: '2',
    type: 'custom',
    entryFee: 500,
    currentPlayers: 1,
    maxPlayers: 2,
    potentialPrize: 900,
    creator: 'SpaceWarrior',
    invitedFriends: ['You', 'GalaxyHunter']
  },
  {
    id: '3',
    type: 'custom',
    entryFee: 1000,
    currentPlayers: 1,
    maxPlayers: 2,
    potentialPrize: 1800,
    creator: 'AlienDestroyer',
    passwordProtected: true
  }
];

export const friendsList: Friend[] = [
  {
    id: '1',
    name: 'ProPlayer92',
    avatar: 'P',
    status: 'Online'
  },
  {
    id: '2',
    name: 'SpaceWarrior',
    avatar: 'S',
    status: 'In Game'
  },
  {
    id: '3',
    name: 'GalaxyHunter',
    avatar: 'G',
    status: 'Online'
  },
  {
    id: '4',
    name: 'AlienDestroyer',
    avatar: 'A',
    status: 'Offline'
  },
  {
    id: '5',
    name: 'StarDefender',
    avatar: 'S',
    status: 'Online'
  }
];

export const leaderboardData: LeaderboardPlayer[] = [
  { id: '1', rank: 1, name: 'GalaxyHunter', score: 158500, wins: 245, gamesPlayed: 280, winRate: 87.5, totalEarnings: 125000 },
  { id: '2', rank: 2, name: 'SpaceWarrior', score: 142300, wins: 198, gamesPlayed: 225, winRate: 88.0, totalEarnings: 98000 },
  { id: '3', rank: 3, name: 'AlienDestroyer', score: 138900, wins: 187, gamesPlayed: 210, winRate: 89.0, totalEarnings: 87500 },
  { id: '4', rank: 4, name: 'CosmicHero', score: 125600, wins: 165, gamesPlayed: 195, winRate: 84.6, totalEarnings: 72000 },
  { id: '5', rank: 5, name: 'StarDefender', score: 118700, wins: 152, gamesPlayed: 180, winRate: 84.4, totalEarnings: 65000 }
];

export const gameAchievements: GameAchievement[] = [
  {
    id: 'first-blood',
    name: 'First Blood',
    description: 'Win your first 1v1 battle',
    icon: 'tint',
    points: 100,
    rarity: 'common',
    unlocked: true,
    unlockedAt: '2024-01-15T10:30:00Z',
    currentProgress: 1,
    requiredProgress: 1
  },
  {
    id: 'win-streak-5',
    name: 'Hot Streak',
    description: 'Win 5 battles in a row',
    icon: 'fire',
    points: 500,
    rarity: 'rare',
    unlocked: false,
    currentProgress: 3,
    requiredProgress: 5
  },
  {
    id: 'high-roller',
    name: 'High Roller',
    description: 'Win a battle with 10,000 GC entry fee',
    icon: 'crown',
    points: 2000,
    rarity: 'legendary',
    unlocked: false,
    currentProgress: 0,
    requiredProgress: 1
  },
  {
    id: 'veteran',
    name: 'Battle Veteran',
    description: 'Play 100 battles',
    icon: 'shield-alt',
    points: 750,
    rarity: 'rare',
    unlocked: false,
    currentProgress: 45,
    requiredProgress: 100
  },
  {
    id: 'perfect-victory',
    name: 'Perfect Victory',
    description: 'Win without taking any damage',
    icon: 'award',
    points: 1000,
    rarity: 'epic',
    unlocked: true,
    unlockedAt: '2024-01-18T14:20:00Z',
    currentProgress: 1,
    requiredProgress: 1
  },
  {
    id: 'rich-warrior',
    name: 'Rich Warrior',
    description: 'Earn 50,000 GameCoins from battles',
    icon: 'coins',
    points: 1500,
    rarity: 'epic',
    unlocked: false,
    currentProgress: 28700,
    requiredProgress: 50000
  },
  {
    id: 'rival-destroyer',
    name: 'Rival Destroyer',
    description: 'Defeat the same player 10 times',
    icon: 'skull',
    points: 800,
    rarity: 'rare',
    unlocked: false,
    currentProgress: 4,
    requiredProgress: 10
  },
  {
    id: 'quick-draw',
    name: 'Quick Draw',
    description: 'Win a battle in under 60 seconds',
    icon: 'bolt',
    points: 600,
    rarity: 'rare',
    unlocked: false,
    currentProgress: 0,
    requiredProgress: 1
  }
];