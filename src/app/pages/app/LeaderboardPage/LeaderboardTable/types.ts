import type { SelectedFilters } from '../types';

export interface TableHeaderProps {
  filters: SelectedFilters;
  onSortChange?: (sortBy: string) => void;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  playerName: string;
  score: number;
  gamesPlayed: number;
  winRate: number;
  level: number;
  avatar: string;
  country: string;
  favoriteGame: string;
  lastActive: string;
  isOnline: boolean;
  isCurrentUser?: boolean;
  achievements: string[];
}
