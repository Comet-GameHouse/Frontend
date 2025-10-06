import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface StatCard {
  label: string;
  value: string | number;
  icon: IconProp;
  color: string;
  description: string;
}

export interface ProfileStats {
  totalGames: number;
  wins: number;
  losses: number;
  winRate: number;
  currentStreak: number;
  bestStreak: number;
  averageGameTime: string;
  favoriteGame: string;
  totalPlayTime: string;
  tournamentsWon: number;
  maxScore: number;
}
