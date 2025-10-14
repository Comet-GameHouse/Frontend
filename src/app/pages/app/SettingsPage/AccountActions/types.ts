import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface AccountAction {
  id: string;
  title: string;
  description: string;
  icon: IconProp;
  type: 'danger' | 'warning' | 'info';
  action: () => void;
}
