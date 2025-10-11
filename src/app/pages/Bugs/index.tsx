import { BugReportHeader } from './BugReportHeader';
import { BugReportForm } from './BugReportForm';
import { QuickActionsGrid } from './QuickActionsGrid';
import { BugReportContact } from './BugReportContact';

export const Bugs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <BugReportHeader />
        <BugReportForm />
        <QuickActionsGrid />
        <BugReportContact />
      </div>
    </div>
  );
};