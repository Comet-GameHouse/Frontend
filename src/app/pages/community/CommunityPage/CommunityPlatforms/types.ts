import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CommunityPlatform {
  id: string;
  name: string;
  icon: IconProp;
  description: string;
  members: string;
  online: string;
  link: string;
  color: string;
  gradient: string;
  features: string[];
}