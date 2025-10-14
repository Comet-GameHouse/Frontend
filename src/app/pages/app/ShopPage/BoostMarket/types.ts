export interface BoostCard {
  id: string;
  name: string;
  description: string;
  xpBoost: number; // Percentage boost to experience points
  coinBoost: number; // Percentage boost to coins earned
  feeReturnBoost: number; // Win return percentage (85%, 90%, etc.)
  duration: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
  currency: 'coins' | 'gems';
  image: string;
  featured: boolean;
}
