import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface BugCategory {
  id: string;
  name: string;
  description: string;
  icon: IconProp;
  color: string;
}

export interface BugPriority {
  id: string;
  name: string;
  description: string;
  color: string;
  responseTime: string;
}

export interface BugReportForm {
  title: string;
  description: string;
  category: string;
  priority: string;
  stepsToReproduce: string;
  expectedBehavior: string;
  actualBehavior: string;
  gameVersion: string;
  platform: string;
  attachments: File[];
  contactEmail: string;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}