import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ContactMethod {
  id: string;
  type: 'email' | 'live-chat' | 'community' | 'status';
  title: string;
  description: string;
  icon: IconProp;
  availability: string;
  responseTime: string;
  action: string;
  link?: string;
}
