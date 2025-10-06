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

export interface GameCategory {
  id: string;
  name: string;
  icon: IconProp;
  count: number;
}

export interface GameFilter {
  category: string;
  sortBy: string;
  search: string;
}

export interface SortOption {
  label: string;
  value: string;
}
