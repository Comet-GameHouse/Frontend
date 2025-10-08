import type { FilterCategory } from './types';

export const filterCategories: FilterCategory[] = [
  {
    id: 'timeFrame',
    label: 'Time Frame',
    icon: 'calendar',
    options: [
      { value: 'all-time', label: 'All Time', count: 15200 },
      { value: 'weekly', label: 'This Week', count: 3800 },
      { value: 'monthly', label: 'This Month', count: 8900 },
      { value: 'daily', label: 'Today', count: 1200 }
    ]
  },
  {
    id: 'gameType',
    label: 'Game Type',
    icon: 'gamepad',
    options: [
      { value: 'all', label: 'All Games', count: 15200 },
      { value: 'action', label: 'Action', count: 5400 },
      { value: 'puzzle', label: 'Puzzle', count: 3200 },
      { value: 'strategy', label: 'Strategy', count: 2800 },
      { value: 'adventure', label: 'Adventure', count: 2100 },
      { value: 'sports', label: 'Sports', count: 1700 }
    ]
  },
  {
    id: 'region',
    label: 'Region',
    icon: 'globe',
    options: [
      { value: 'global', label: 'Global', count: 15200 },
      { value: 'na', label: 'North America', count: 6200 },
      { value: 'eu', label: 'Europe', count: 4800 },
      { value: 'asia', label: 'Asia', count: 3500 },
      { value: 'sa', label: 'South America', count: 700 }
    ]
  },
  {
    id: 'sortBy',
    label: 'Sort By',
    icon: 'sort',
    options: [
      { value: 'rank', label: 'Rank' },
      { value: 'score', label: 'Score' },
      { value: 'games', label: 'Games Played' },
      { value: 'winrate', label: 'Win Rate' },
      { value: 'level', label: 'Level' }
    ]
  }
];