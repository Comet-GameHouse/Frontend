import type { QuickAction } from '@app/components';
import type {
  ServiceStatus,
  SystemMetric,
  QuickNavigation,
  Incident,
  DailyStatus,
} from './types';
import { ROUTES } from '@constants';

export const systemMetrics: SystemMetric[] = [
  {
    icon: 'users',
    label: 'Active Players',
    value: '12,584',
    color: 'blue',
  },
  {
    icon: 'gamepad',
    label: 'Live Games',
    value: '8,923',
    color: 'green',
  },
  {
    icon: 'bolt',
    label: 'API Latency',
    value: '42ms',
    color: 'purple',
  },
  {
    icon: 'server',
    label: 'Server Load',
    value: '28%',
    color: 'orange',
  },
];

export const servicesStatus: ServiceStatus[] = [
  {
    id: 'game-servers',
    name: 'Game Servers',
    description: 'Core gaming infrastructure and matchmaking',
    status: 'operational',
    lastUpdated: '2024-01-15T14:30:00Z',
    responseTime: 24,
    uptime: '99.98%',
    icon: 'server',
    color: 'green',
  },
  {
    id: 'authentication',
    name: 'Authentication',
    description: 'User login, registration, and account management',
    status: 'operational',
    lastUpdated: '2024-01-15T14:25:00Z',
    responseTime: 18,
    uptime: '99.99%',
    icon: 'user-shield',
    color: 'green',
  },
  {
    id: 'leaderboard-api',
    name: 'Leaderboard API',
    description: 'Rankings, statistics, and player progress',
    status: 'degraded',
    lastUpdated: '2024-01-15T13:45:00Z',
    responseTime: 156,
    uptime: '99.85%',
    icon: 'trophy',
    color: 'yellow',
  },
  {
    id: 'payment-service',
    name: 'Payment Service',
    description: 'Coin purchases and transaction processing',
    status: 'operational',
    lastUpdated: '2024-01-15T14:15:00Z',
    responseTime: 32,
    uptime: '99.97%',
    icon: 'credit-card',
    color: 'green',
  },
  {
    id: 'shop-api',
    name: 'Shop API',
    description: 'Boost cards and in-game items store',
    status: 'operational',
    lastUpdated: '2024-01-15T14:10:00Z',
    responseTime: 28,
    uptime: '99.96%',
    icon: 'store',
    color: 'green',
  },
  {
    id: 'community-api',
    name: 'Community API',
    description: 'Forums, teams, and social features',
    status: 'maintenance',
    lastUpdated: '2024-01-15T12:00:00Z',
    uptime: '99.94%',
    icon: 'users',
    color: 'blue',
  },
];

export const activeIncidents: Incident[] = [
  {
    id: 'inc-2024-001',
    title: 'Leaderboard API Performance',
    description:
      'Some users may experience slower leaderboard updates and statistics loading',
    status: 'monitoring',
    severity: 'minor',
    startTime: '2024-01-15T11:20:00Z',
    updates: [
      {
        timestamp: '2024-01-15T13:45:00Z',
        status: 'monitoring',
        message:
          'Performance improvements deployed. Monitoring system stability and response times.',
      },
    ],
  },
  {
    id: 'inc-2024-002',
    title: 'Community Features Maintenance',
    description:
      'Community forums and team features are undergoing scheduled maintenance',
    status: 'monitoring',
    severity: 'minor',
    startTime: '2024-01-15T10:00:00Z',
    endTime: '2024-01-15T16:00:00Z',
    updates: [
      {
        timestamp: '2024-01-15T12:00:00Z',
        status: 'monitoring',
        message:
          'Database optimization completed. Monitoring performance and preparing to restore services.',
      },
    ],
  },
];

export const STATUS_QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'life-ring',
    label: 'Support Home',
    description: 'All support options',
    path: ROUTES.SUPPORT,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'bug',
    label: 'Bug Reports',
    description: 'Report issues',
    path: ROUTES.BUGS,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'question-circle',
    label: 'Help Center',
    description: 'Help articles',
    path: ROUTES.HELP,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: 'envelope',
    label: 'Contact',
    description: 'Support contact',
    path: ROUTES.CONTACT,
    color: 'from-purple-500 to-pink-500',
  },
];

export const dailyStatus: DailyStatus[] = [
  {
    date: '2024-01-15',
    overall: 'operational',
    uptime: 99.98,
    incidents: 2,
    responseTime: 45,
    timeline: [
      { hour: '00:00', status: 'operational', incidents: 0 },
      { hour: '02:00', status: 'operational', incidents: 0 },
      { hour: '04:00', status: 'operational', incidents: 0 },
      { hour: '06:00', status: 'operational', incidents: 0 },
      { hour: '08:00', status: 'operational', incidents: 0 },
      { hour: '10:00', status: 'maintenance', incidents: 1 },
      { hour: '12:00', status: 'maintenance', incidents: 1 },
      { hour: '14:00', status: 'degraded', incidents: 2 },
      { hour: '16:00', status: 'degraded', incidents: 1 },
      { hour: '18:00', status: 'operational', incidents: 0 },
      { hour: '20:00', status: 'operational', incidents: 0 },
      { hour: '22:00', status: 'operational', incidents: 0 },
    ],
  },
  {
    date: '2024-01-14',
    overall: 'operational',
    uptime: 99.99,
    incidents: 0,
    responseTime: 38,
    timeline: Array(12)
      .fill(null)
      .map((_, i) => ({
        hour: `${i * 2}:00`.padStart(5, '0'),
        status: 'operational' as const,
        incidents: 0,
      })),
  },
  {
    date: '2024-01-13',
    overall: 'operational',
    uptime: 99.97,
    incidents: 1,
    responseTime: 42,
    timeline: [
      { hour: '00:00', status: 'operational', incidents: 0 },
      { hour: '02:00', status: 'operational', incidents: 0 },
      { hour: '04:00', status: 'operational', incidents: 0 },
      { hour: '06:00', status: 'operational', incidents: 0 },
      { hour: '08:00', status: 'operational', incidents: 0 },
      { hour: '10:00', status: 'operational', incidents: 0 },
      { hour: '12:00', status: 'degraded', incidents: 1 },
      { hour: '14:00', status: 'operational', incidents: 0 },
      { hour: '16:00', status: 'operational', incidents: 0 },
      { hour: '18:00', status: 'operational', incidents: 0 },
      { hour: '20:00', status: 'operational', incidents: 0 },
      { hour: '22:00', status: 'operational', incidents: 0 },
    ],
  },
];
