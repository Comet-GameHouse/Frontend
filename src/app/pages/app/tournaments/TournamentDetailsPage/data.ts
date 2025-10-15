import type { QuickAction } from '@app/components';
import type {
  TournamentDetail,
  LeaderboardPlayer,
  PrizeTier,
  TournamentRule,
  ParticipationStep,
  TournamentTab,
} from './types';
import { ROUTES } from '@app/constants';

export const tournamentData: TournamentDetail = {
  id: 'weekly-challenge-1',
  name: 'Weekly Space Invaders Challenge',
  description:
    'Compete for the highest score in our classic Space Invaders tournament',
  startDate: '2024-01-15T00:00:00Z',
  endDate: '2024-01-22T23:59:59Z',
  totalParticipants: 1247,
  totalGames: 15892,
  prizePool: 1150,
  status: 'active',
  game: 'Space Invaders',
  rules: [
    'Best individual score wins',
    'Unlimited attempts during tournament period',
    'No power-ups or cheats allowed',
  ],
};

export const tournamentTabs: {
  id: TournamentTab;
  label: string;
  icon: string;
}[] = [
  { id: 'overview', label: 'Overview', icon: 'chart-line' },
  { id: 'rules', label: 'Rules', icon: 'scroll' },
  { id: 'how-to-play', label: 'How to Play', icon: 'gamepad' },
];

export const leaderboardData: LeaderboardPlayer[] = [
  {
    id: '1',
    rank: 1,
    name: 'ProPlayer92',
    score: 15850,
    wins: 15,
    losses: 0,
    avgTime: '2:15',
    status: 'online',
  },
  {
    id: '2',
    rank: 2,
    name: 'ChampionX',
    score: 14820,
    wins: 14,
    losses: 1,
    avgTime: '2:08',
    status: 'online',
  },
  {
    id: '3',
    rank: 3,
    name: 'GameMaster',
    score: 14230,
    wins: 14,
    losses: 1,
    avgTime: '2:22',
    status: 'offline',
  },
  {
    id: '4',
    rank: 4,
    name: 'EliteGamer',
    score: 13890,
    wins: 13,
    losses: 2,
    avgTime: '1:59',
    status: 'online',
  },
  {
    id: '5',
    rank: 5,
    name: 'VictorySeeker',
    score: 13560,
    wins: 13,
    losses: 2,
    avgTime: '2:31',
    status: 'offline',
  },
  {
    id: '6',
    rank: 6,
    name: 'SpaceWarrior',
    score: 12980,
    wins: 12,
    losses: 3,
    avgTime: '2:45',
    status: 'online',
  },
  {
    id: '7',
    rank: 7,
    name: 'ArcadeKing',
    score: 12540,
    wins: 11,
    losses: 4,
    avgTime: '2:12',
    status: 'offline',
  },
  {
    id: '8',
    rank: 8,
    name: 'RetroGamer',
    score: 12110,
    wins: 10,
    losses: 5,
    avgTime: '2:28',
    status: 'online',
  },
];

export const prizeDistribution: PrizeTier[] = [
  {
    position: 1,
    amount: 500,
    requirement: 'Highest overall score',
    additional: '+ Champion Badge',
  },
  {
    position: 2,
    amount: 300,
    requirement: 'Second highest score',
    additional: '+ Elite Badge',
  },
  {
    position: 3,
    amount: 200,
    requirement: 'Third highest score',
    additional: '+ Pro Badge',
  },
  {
    position: 4,
    amount: 100,
    requirement: 'Fourth place',
    additional: '+ Premium Rewards',
  },
  {
    position: 5,
    amount: 50,
    requirement: 'Fifth place',
    additional: '+ Special Items',
  },
];

export const tournamentRules: TournamentRule[] = [
  {
    id: 'scoring',
    icon: 'star',
    title: 'Scoring System',
    description:
      'Players compete for the highest individual score in Space Invaders.',
    details: [
      'Each alien destroyed: 10 points',
      'Bonus points for completing waves quickly',
      'Extra lives grant 1000 points each',
      'Perfect wave completion: 5000 points',
    ],
  },
  {
    id: 'participation',
    icon: 'users',
    title: 'Participation',
    description:
      'All registered players can participate automatically when they play Space Invaders during the tournament period.',
    details: [
      'No separate registration required',
      'All games played during tournament period count',
      'Unlimited attempts allowed',
      'Only your highest score is considered',
    ],
  },
  {
    id: 'fair-play',
    icon: 'shield-alt',
    title: 'Fair Play Policy',
    description: 'We maintain a fair competitive environment for all players.',
    details: [
      'No cheats, hacks, or exploits allowed',
      'Game modifications are prohibited',
      'Suspicious activity will be investigated',
      'Decisions by tournament admins are final',
    ],
  },
  {
    id: 'prizes',
    icon: 'trophy',
    title: 'Prize Distribution',
    description:
      'Prizes are awarded to the top 5 players based on their highest scores.',
    details: [
      'Prizes distributed within 24 hours of tournament end',
      'Digital prizes credited to your account',
      'Physical prizes require shipping information',
      'Tax responsibilities belong to winners',
    ],
  },
];

export const howToParticipate: ParticipationStep[] = [
  {
    id: 'step-1',
    step: 1,
    icon: 'user-plus',
    title: 'Create Your Account',
    description:
      'Sign up for a free Comet Gamehouse account to participate in tournaments.',
    actions: ['Sign Up', 'Login'],
  },
  {
    id: 'step-2',
    step: 2,
    icon: 'gamepad',
    title: 'Play Space Invaders',
    description:
      'Launch Space Invaders from our games library and start playing. Your scores are automatically tracked.',
    actions: ['Play Game'],
  },
  {
    id: 'step-3',
    step: 3,
    icon: 'chart-line',
    title: 'Check Your Ranking',
    description:
      'Monitor your position on the live leaderboard and see how you stack up against other players.',
    actions: ['View Leaderboard'],
  },
  {
    id: 'step-4',
    step: 4,
    icon: 'trophy',
    title: 'Win Prizes',
    description:
      'Maintain your top position until the tournament ends to claim your prize!',
    actions: ['Prize Info'],
  },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'trophy',
    label: 'All Tournaments',
    description: 'Browse competitions',
    path: ROUTES.TOURNAMENTS,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'chart-bar',
    label: 'Leaderboard',
    description: 'Current standings',
    path: ROUTES.LEADERBOARD,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'gamepad',
    label: 'Game Details',
    description: 'Learn the game',
    path: ROUTES.GAMES,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'users',
    label: 'Community',
    description: 'Tournament discussion',
    path: ROUTES.COMMUNITY,
    color: 'from-purple-500 to-pink-500',
  },
];
