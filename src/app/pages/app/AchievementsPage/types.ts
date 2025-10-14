export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  currentLevel: number;
  maxLevel: number;
  currentProgress: number;
  requiredProgress: number;
  unlockedAt?: string;
  nextLevelPoints?: number;
}

export interface DailyAchievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  reward: number;
  requiredProgress: number;
  currentProgress: number;
  completed: boolean;
  type: 'daily' | 'weekly';
}

export interface AchievementCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface UserAchievements {
  unlockedCount: number;
  totalPoints: number;
  unlockedIds: string[];
}