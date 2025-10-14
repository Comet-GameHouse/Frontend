import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FeedbackForm {
  rating: number;
  description: string;
  category: string;
  contactEmail: string;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}