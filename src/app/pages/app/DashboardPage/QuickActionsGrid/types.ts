import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface QuickAction {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
  color: string;
}
