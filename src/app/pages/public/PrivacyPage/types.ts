import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface PrivacySection {
  id: string;
  title: string;
  icon: IconProp;
  content: string[];
  subsections?: PrivacySubsection[];
}

export interface PrivacySubsection {
  title: string;
  content: string[];
}

export interface DataCollectionItem {
  category: string;
  purpose: string;
  examples: string[];
  required: boolean;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
//   icon?: string;
//   parentId?: string; // For nested TOC items
//   children?: TableOfContentsItem[]; // For hierarchical TOC
//   isActive?: boolean;
}