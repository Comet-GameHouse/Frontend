import type { UserStats, RecentGame, Achievement, Friend, QuickAction } from './types';

export const USER_STATS: UserStats = {
  gamesPlayed: 156,
  wins: 89,
  losses: 67,
  winRate: 57.1,
  totalCoins: 12500,
  level: 15,
  experience: 1250,
  nextLevelExp: 2000
};

export const RECENT_GAMES: RecentGame[] = [
  {
    id: 1,
    gameName: "5 Lines Sheep Fight",
    result: "win",
    score: "3-1",
    duration: "15:23",
    date: "2024-01-15 14:30",
    coinsEarned: 250
  },
  {
    id: 2,
    gameName: "Animal Chess",
    result: "loss",
    score: "0-2",
    duration: "08:45",
    date: "2024-01-15 13:15",
    coinsEarned: 50
  },
  {
    id: 3,
    gameName: "Space Warriors",
    result: "win",
    score: "5-2",
    duration: "22:10",
    date: "2024-01-14 20:45",
    coinsEarned: 350
  },
  {
    id: 4,
    gameName: "Dragon Arena",
    result: "draw",
    score: "2-2",
    duration: "18:30",
    date: "2024-01-14 19:20",
    coinsEarned: 150
  },
  {
    id: 5,
    gameName: "Quantum Puzzle",
    result: "win",
    score: "Completed",
    duration: "12:15",
    date: "2024-01-14 16:10",
    coinsEarned: 200
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    name: "First Victory",
    description: "Win your first game",
    icon: "trophy",
    progress: 1,
    total: 1,
    unlocked: true,
    reward: 100
  },
  {
    id: 2,
    name: "Game Collector",
    description: "Play 10 different games",
    icon: "gamepad",
    progress: 7,
    total: 10,
    unlocked: false,
    reward: 500
  },
  {
    id: 3,
    name: "Win Streak",
    description: "Win 5 games in a row",
    icon: "fire",
    progress: 3,
    total: 5,
    unlocked: false,
    reward: 750
  },
  {
    id: 4,
    name: "Social Butterfly",
    description: "Add 10 friends",
    icon: "users",
    progress: 8,
    total: 10,
    unlocked: false,
    reward: 300
  },
  {
    id: 5,
    name: "Daily Player",
    description: "Play for 7 consecutive days",
    icon: "calendar",
    progress: 4,
    total: 7,
    unlocked: false,
    reward: 400
  }
];

export const FRIENDS: Friend[] = [
  {
    id: 1,
    username: "ProGamer99",
    avatar: "PG",
    status: "online",
    level: 18,
    currentGame: "Space Warriors"
  },
  {
    id: 2,
    username: "ChessMaster",
    avatar: "CM",
    status: "online",
    level: 12,
    currentGame: "Animal Chess"
  },
  {
    id: 3,
    username: "SheepLover",
    avatar: "SL",
    status: "away",
    level: 9
  },
  {
    id: 4,
    username: "DragonSlayer",
    avatar: "DS",
    status: "offline",
    level: 21
  },
  {
    id: 5,
    username: "PuzzleSolver",
    avatar: "PS",
    status: "online",
    level: 14,
    currentGame: "Quantum Puzzle"
  }
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: "gamepad",
    label: "Quick Play",
    description: "Jump into a random game",
    path: "/quick-play",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "users",
    label: "Create Room",
    description: "Start a private game session",
    path: "/create-room",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "coins",
    label: "Shop",
    description: "Buy coins and items",
    path: "/shop",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: "trophy",
    label: "Tournaments",
    description: "Compete for prizes",
    path: "/tournaments",
    color: "from-purple-500 to-pink-500"
  }
];