import type { IconProp } from '@fortawesome/fontawesome-svg-core';

// Add NotFound types
export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}
