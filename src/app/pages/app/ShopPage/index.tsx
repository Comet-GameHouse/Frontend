import { useState } from 'react';
import { ShopHeader } from './ShopHeader';
import { UserWallet } from './UserWallet';
import { CoinStore } from './CoinStore';
import { BoostMarket } from './BoostMarket';
import { userWallet } from './data';

export const ShopPage = () => {
  const [activeTab, setActiveTab] = useState<'coins' | 'boosts'>('coins');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <UserWallet wallet={userWallet} />
        <ShopHeader activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mx-auto">
          {activeTab === 'coins' && <CoinStore />}
          {activeTab === 'boosts' && <BoostMarket />}
        </div>
      </div>
    </div>
  );
};