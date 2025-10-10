import { TermsHeader } from './TermsHeader';
import { TableOfContents } from './TableOfContents';
import { TermsContent } from './TermsContent';
import { TermsFooter } from './TermsFooter';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <TermsHeader />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents Sidebar */}
            <div className="lg:w-64 xl:w-80 flex-shrink-0">
              <TableOfContents />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <TermsContent />
            </div>
          </div>
        </div>

        <TermsFooter />
      </div>
    </div>
  );
};