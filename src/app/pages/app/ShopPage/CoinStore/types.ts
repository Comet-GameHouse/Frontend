export interface CoinPackage {
  id: string;
  name: string;
  coins: number;
  bonus: number;
  price: number;
  currency: 'USD';
  popular: boolean;
  bestValue: boolean;
}