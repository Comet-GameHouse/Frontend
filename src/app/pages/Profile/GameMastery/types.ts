import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface MasteryLevel {
  level: string;
  color: string;
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
