import type { Game } from './types';

export const FEATURED_GAMES: Game[] = [
  {
    id: 1,
    name: '5 Lines Sheep Fight',
    description:
      'Strategic card battle with cute sheep characters in a 5-line formation. Outsmart your opponents!',
    players: '2-4 Players',
    online: '1.2K',
    icon: 'lines-leaning',
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
  },
  {
    id: 2,
    name: 'Animal Chess',
    description:
      'Classic chess reimagined with animal-themed pieces. Strategic gameplay for all skill levels.',
    players: '2 Players',
    online: '856',
    icon: 'chess',
    color: 'from-yellow-500 to-orange-500',
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  },
  {
    id: 3,
    name: 'Space Warriors',
    description:
      'Epic space battle with real-time strategy. Build your fleet and conquer the galaxy!',
    players: '2-8 Players',
    online: '2.4K',
    icon: 'rocket',
    color: 'from-blue-500 to-purple-500',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
  },
  {
    id: 4,
    name: 'Dragon Arena',
    description:
      'Fantasy battle arena with magical creatures. Team up and defeat powerful bosses!',
    players: '3-5 Players',
    online: '1.8K',
    icon: 'dragon',
    color: 'from-red-500 to-pink-500',
    gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
  },
];
