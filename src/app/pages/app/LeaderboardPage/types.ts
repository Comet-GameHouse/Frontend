export interface LeaderboardFilter {
  timeFrame: 'all-time' | 'weekly' | 'monthly' | 'daily';
  gameType: 'all' | 'action' | 'puzzle' | 'strategy' | 'adventure' | 'sports';
  region: 'global' | 'na' | 'eu' | 'asia' | 'sa';
  sortBy: 'rank' | 'score' | 'games' | 'winrate' | 'level';
  search: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface FilterDropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  icon: string;
  variant?: 'primary' | 'secondary';
}

export interface LeaderboardProps {
  showFilters?: boolean;
  compact?: boolean;
}

export interface TimeFrameStats {
  label: string;
  value: string;
  change: number;
}

export interface PlayerStatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
  trend?: number;
}

export interface SelectedFilters {
  timeFrame: string;
  gameType: string;
  region: string;
  sortBy: string;
}
