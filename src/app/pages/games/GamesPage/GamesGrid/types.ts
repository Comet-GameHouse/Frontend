import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Game {
  id: number;
  name: string;
  description: string;
  players: string;
  online: string;
  icon: IconProp;
  color: string;
  gradient: string;
  category: string;
  rating: number;
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
}
