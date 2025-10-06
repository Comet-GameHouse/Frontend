import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface UserProfile {
  id: string;
  username: string;
  avatar: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  joinDate: string;
  status: 'online' | 'away' | 'offline';
  bio?: string;
  country?: string;
  favoriteGame?: string;
  isFriend?: boolean;
  isCurrentUser?: boolean;
  title?: string;
  clan?: string;
  rank?: string;
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

export interface ProfileGame {
  id: number;
  name: string;
  icon: IconProp;
  playCount: number;
  winRate: number;
  lastPlayed: string;
  totalTime: string;
  bestScore: number;
}

export interface ProfileAchievement {
  id: number;
  name: string;
  icon: IconProp;
  description: string;
  unlockedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'gaming' | 'social' | 'skill' | 'collection';
}

export interface ProfileBadge {
  id: number;
  name: string;
  icon: IconProp;
  description: string;
  unlockedAt: string;
  type: 'seasonal' | 'event' | 'rank' | 'special';
}

export interface ProfileTimelineEvent {
  id: number;
  type: 'achievement' | 'level_up' | 'game_played' | 'tournament' | 'friend_added';
  title: string;
  description: string;
  date: string;
  icon: IconProp;
  game?: string;
}

export interface StatCard {
  label: string;
  value: string | number;
  icon: IconProp;
  color: string;
  description: string;
}

export interface MasteryLevel {
  level: string;
  color: string;
}