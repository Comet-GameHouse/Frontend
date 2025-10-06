import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface QuickAction {
  icon: IconProp;
  text: string;
  description: string;
  path: string;
}
