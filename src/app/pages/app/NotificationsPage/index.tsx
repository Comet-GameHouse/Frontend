import { useState } from 'react';
import { NotificationsHeader } from './NotificationsHeader';
import { NotificationsSidebar } from './NotificationsSidebar';
import { NotificationsList } from './NotificationsList';
import { QuickActionsGrid } from './QuickActionsGrid';
import { NotificationsContact } from './NotificationsContact';

export const NotificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterRead, setFilterRead] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <NotificationsHeader />
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          <NotificationsSidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            filterRead={filterRead}
            onFilterReadChange={setFilterRead}
          />
          <NotificationsList 
            selectedCategory={selectedCategory}
            filterRead={filterRead}
          />
        </div>
        <QuickActionsGrid />
        <NotificationsContact />
      </div>
    </div>
  );
};