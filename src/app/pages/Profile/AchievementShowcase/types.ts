import type { IconProp } from '@fortawesome/fontawesome-svg-core';

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
