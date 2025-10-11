export interface SupportCard {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  path: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  stats?: string;
}

export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  articles: SupportArticle[];
}

export interface SupportArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  popular?: boolean;
}

export interface SupportStats {
  activeTickets: number;
  resolvedToday: number;
  avgResponseTime: string;
  satisfactionRate: string;
}