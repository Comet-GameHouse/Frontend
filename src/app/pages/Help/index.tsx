import { useState } from 'react';
import { HelpHeader } from './HelpHeader';
import { HelpSearch } from './HelpSearch';
import { HelpItemsGrid } from './HelpItemsGrid';
import { FAQSection } from './FAQSection';
import { QuickActionsGrid } from './QuickActionsGrid';
import { HelpContact } from './HelpContact';

export const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <HelpHeader />
        <HelpSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <HelpItemsGrid searchQuery={searchQuery} />
        <FAQSection searchQuery={searchQuery} />
        <QuickActionsGrid />
        <HelpContact />
      </div>
    </div>
  );
};