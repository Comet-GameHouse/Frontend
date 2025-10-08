import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FilterCategory {
  id: string;
  label: string;
  icon: IconProp;
  options: FilterOption[];
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}
