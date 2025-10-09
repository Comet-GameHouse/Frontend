import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type TabType = 'coins' | 'boosts';

export interface Tab {
  id: TabType;
  name: string;
  icon: IconProp;
}

export interface UserWallet {
  coins: number;
  activeBoosts: string[];
  feeReturn: number;
  activeBoostDetails?: {
    xpBoost: number;
    coinBoost: number;
    feeReturnBoost: number;
    expiresAt: string; // ISO date string
  };
}

export interface ShopFilter {
  rarity: string;
  sortBy: string;
}
