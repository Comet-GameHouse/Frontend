export interface GameDetail {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
  activePlayers: number;
  totalMatches: number;
  totalCoins: number;
  tournamentsCount: number;
  successRate: number;
  avgSessionTime: string;
  avgGameTime: string;
  playerCount: number; // 1 for 1:1, 2 for 2:2, etc.
  minPlayers: number;
  maxPlayers: number;
  releaseDate: string;
  lastUpdated: string;
  rank: number;
  tags: string[];
  features: string[];
  gameModes: string[];
  howToPlay: {
    title: string;
    description: string;
  }[];
}

export interface GameTab {
  id: 'rooms' | 'overview' | 'achievements';
  label: string;
  icon: string;
}

export interface LeaderboardPlayer {
  id: string;
  rank: number;
  name: string;
  score: number;
  wins: number;
  gamesPlayed: number;
  winRate: number;
  totalEarnings: number;
}

export interface GameRoom {
  id: string;
  type: 'random' | 'custom';
  entryFee: number;
  currentPlayers: number;
  maxPlayers: number;
  potentialPrize: number;
  creator: string;
  passwordProtected?: boolean;
  invitedFriends?: string[];
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: 'Online' | 'Offline' | 'In Game';
}

export interface GameAchievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  unlockedAt?: string;
  currentProgress: number;
  requiredProgress: number;
}