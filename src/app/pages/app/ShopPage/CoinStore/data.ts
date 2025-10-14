import type { CoinPackage } from './types';

export const coinPackages: CoinPackage[] = [
  {
    id: '1',
    name: 'Starter Pack',
    coins: 1000,
    bonus: 0,
    price: 4.99,
    currency: 'USD',
    popular: false,
    bestValue: false,
  },
  {
    id: '2',
    name: 'Pro Gamer',
    coins: 5000,
    bonus: 20,
    price: 19.99,
    currency: 'USD',
    popular: true,
    bestValue: false,
  },
  {
    id: '3',
    name: 'Elite Bundle',
    coins: 15000,
    bonus: 50,
    price: 49.99,
    currency: 'USD',
    popular: false,
    bestValue: true,
  },
  {
    id: '4',
    name: 'Whale Special',
    coins: 50000,
    bonus: 100,
    price: 149.99,
    currency: 'USD',
    popular: false,
    bestValue: false,
  },
];
