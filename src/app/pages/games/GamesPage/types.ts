import type { IconProp } from '@fortawesome/fontawesome-svg-core';

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
