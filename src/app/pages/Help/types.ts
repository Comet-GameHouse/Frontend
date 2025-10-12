import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface HelpItem {
  id: string;
  title: string;
  description: string;
  briefAnswer: string;
  discordChannel: string;
  icon: IconProp;
  color: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}