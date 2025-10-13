import { useState, useEffect } from 'react';
import { TournamentHeader } from './TournamentHeader';
import { TournamentStats } from './TournamentStats';
import { TournamentTabs } from './TournamentTabs';
import { LeaderboardSection } from './LeaderboardSection';
import { PrizeDistribution } from './PrizeDistribution';
import { TournamentRules } from './TournamentRules';
import { HowToParticipate } from './HowToParticipate';
// import { SupportContact } from './SupportContact';
import type { TournamentTab } from './types';
import { tournamentData, tournamentTabs } from './data';

export const TournamentDetails = () => {
  const [activeTab, setActiveTab] = useState<TournamentTab>('overview');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endDate = new Date(tournamentData.endDate);
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isEnded: false,
    };
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <LeaderboardSection />
            <PrizeDistribution />
          </div>
        );
      case 'rules':
        return <TournamentRules />;
      case 'how-to-play':
        return <HowToParticipate />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        {/* Tournament Header */}
        <TournamentHeader tournament={tournamentData} timeLeft={timeLeft} />

        {/* Tournament Stats */}
        <TournamentStats tournament={tournamentData} timeLeft={timeLeft} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <TournamentTabs
            tabs={tournamentTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          <div data-aos="fade-up">{renderTabContent()}</div>

          {/* Support Contact */}
          {/* <SupportContact /> */}
        </div>
      </div>
    </div>
  );
};
