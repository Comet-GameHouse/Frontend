import { useState } from 'react';
import { Card, Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameHeader } from './GameHeader';
import { GameStats } from './GameStats';
import { GameRooms } from './GameRooms';
import { GameDescription } from './GameDescription';
import { GameLeaderboard } from './GameLeaderboard';
import { GameAchievements } from './GameAchievements';
import { SupportContact } from './SupportContact';
import type { GameTab } from './types';
import { gameData, gameTabs } from './data';

export const GameDetails = () => {
  const [activeTab, setActiveTab] = useState<GameTab>('rooms');
  const [isFavorite, setIsFavorite] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rooms':
        return <GameRooms game={gameData} />;
      case 'overview':
        return (
          <div className="space-y-8">
            <GameDescription game={gameData} />
            <GameLeaderboard />
          </div>
        );
      case 'achievements':
        return <GameAchievements />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
        
        <GameHeader 
          game={gameData}
          isFavorite={isFavorite}
          onToggleFavorite={() => setIsFavorite(!isFavorite)}
        />

        <GameStats game={gameData} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto gap-2 mb-8" data-aos="fade-up">
            {gameTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={tab.icon} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div data-aos="fade-up">
            {renderTabContent()}
          </div>

          <SupportContact />
        </div>
      </div>
    </div>
  );
};