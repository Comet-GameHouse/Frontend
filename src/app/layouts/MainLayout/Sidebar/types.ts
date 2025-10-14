import type { IconName } from '@fortawesome/fontawesome-svg-core';

export interface SidebarItem {
  label: string;
  path: string;
  icon: IconName;
  badge?: number;
}

export interface SidebarUser {
  name: string;
  avatar: string;
  level: number;
}