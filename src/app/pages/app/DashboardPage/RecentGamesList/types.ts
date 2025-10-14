export interface RecentGame {
  id: number;
  gameName: string;
  result: 'win' | 'loss' | 'draw';
  score: string;
  duration: string;
  date: string;
  coinsEarned: number;
}