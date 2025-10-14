import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Tournament {
  id: string;
  name: string;
  game: string;
  gameIcon: IconProp;
  format: '1v1' | 'battle-royale' | 'score-attack' | 'time-trial';
  status: 'upcoming' | 'registration' | 'live' | 'completed' | 'cancelled';
  entryFee: number;
  prizePool: number;
  maxPlayers: number;
  registeredPlayers: number;
  startDate: string;
  endDate: string;
  duration: string;
  rules: string;
  platform: 'pc' | 'console' | 'mobile' | 'cross-platform';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface TournamentCategory {
  id: string;
  name: string;
  description: string;
  icon: IconProp;
  count: number;
}

export interface QuickNavigation {
  icon: IconProp;
  label: string;
  description: string;
  path: string;
}