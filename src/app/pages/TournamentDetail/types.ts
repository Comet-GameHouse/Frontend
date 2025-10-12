export interface TournamentDetail {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  totalParticipants: number;
  totalGames: number;
  prizePool: number;
  status: 'upcoming' | 'active' | 'completed';
  game: string;
  rules: string[];
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

export interface LeaderboardPlayer {
  id: string;
  rank: number;
  name: string;
  score: number;
  wins: number;
  losses: number;
  avgTime: string;
  status: 'online' | 'offline';
}

export interface PrizeTier {
  position: number;
  amount: number;
  requirement: string;
  additional: string;
}

export interface TournamentRule {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ParticipationStep {
  id: string;
  step: number;
  icon: string;
  title: string;
  description: string;
  actions?: string[];
}

export type TournamentTab = 'overview' | 'rules' | 'how-to-play';