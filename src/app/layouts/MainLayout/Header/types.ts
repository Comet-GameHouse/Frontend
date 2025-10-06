import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface NavigationItem {
  path: string;
  label: string;
  icon: IconProp;
}

export interface UserMenuItem {
  label: string;
  icon: IconProp;
  path: string;
}
