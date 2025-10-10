import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TermsSection {
  id: string;
  title: string;
  icon: IconProp;
  content: string[];
  lastUpdated?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}
