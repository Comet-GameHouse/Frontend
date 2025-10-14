import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: IconProp;
  progress: number;
  total: number;
  unlocked: boolean;
  reward: number;
}
