import { useState } from 'react';
import { AchievementsHeader } from './AchievementsHeader';
import { AchievementStats } from './AchievementStats';
import { AchievementFilters } from './AchievementFilters';
import { AchievementGrid } from './AchievementGrid';
import { DailyAchievements } from './DailyAchievements';
import { SupportContact } from './SupportContact';
import {
  achievementsData,
  achievementCategories,
  userAchievements,
  dailyAchievements,
} from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'global' | 'daily'>('global');

  const filteredAchievements = achievementsData.filter((achievement) => {
    const matchesCategory =
      activeCategory === 'all' || achievement.category === activeCategory;
    const matchesSearch =
      achievement.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // In the Achievements component, update the userStats calculation:
  const userStats = {
    total: achievementsData.length,
    unlocked: userAchievements.unlockedCount,
    progress: Math.round(
      (userAchievements.unlockedCount / achievementsData.length) * 100
    ),
    points: userAchievements.totalPoints,
    dailyCompleted: dailyAchievements.filter((d) => d.completed).length,
    dailyTotal: dailyAchievements.length,
    averageLevel:
      achievementsData.reduce(
        (sum, achievement) => sum + achievement.currentLevel,
        0
      ) / achievementsData.length,
    maxLevels: achievementsData.filter(
      (achievement) => achievement.currentLevel === achievement.maxLevel
    ).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <AchievementsHeader />

        <AchievementStats stats={userStats} />

        {/* Tab Navigation */}
        <div
          className="flex overflow-x-auto gap-1 mb-6 sm:mb-8 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <button
            onClick={() => setActiveTab('global')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
              activeTab === 'global'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon="trophy" />
            Global Achievements
          </button>
          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
              activeTab === 'daily'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <FontAwesomeIcon icon="calendar-day" />
            Daily Challenges
          </button>
        </div>

        {activeTab === 'global' ? (
          <>
            <AchievementFilters
              categories={achievementCategories}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              onCategoryChange={setActiveCategory}
              onSearchChange={setSearchQuery}
            />

            <AchievementGrid
              achievements={filteredAchievements}
              unlockedAchievements={userAchievements.unlockedIds}
            />
          </>
        ) : (
          <DailyAchievements achievements={dailyAchievements} />
        )}

        <SupportContact />
      </div>
    </div>
  );
};
