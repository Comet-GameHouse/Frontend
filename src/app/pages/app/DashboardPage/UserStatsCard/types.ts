export interface UserStats {
  gamesPlayed: number;
  wins: number;
  losses: number;
  winRate: number;
  totalCoins: number;
  level: number;
  experience: number;
  nextLevelExp: number;
}

// New interfaces for smaller components
export interface StatItem {
  value: string | number;
  label: string;
  color: string;
}
