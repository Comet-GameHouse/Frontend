import { useState } from 'react';
import { Button, Input } from '@components';
import { SupportStatsCard } from './SupportStatsCard';
import { SupportGrid } from './SupportGrid';
import { SupportCategories } from './SupportCategories';
import { supportStats } from './data';

export const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6"
            data-aos="fade-up"
          >
            Support Center
          </h1>
          <p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get help, report issues, and join our growing community of gamers
          </p>

          {/* Search Bar */}
          <div 
            className="max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Input
              type="text"
              placeholder="Search help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/50 border-gray-700 text-white text-lg py-4 px-6"
              icon="search"
            />
          </div>

          {/* Support Stats */}
          <SupportStatsCard stats={supportStats} />
        </div>
      </section>

      {/* Main Support Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SupportGrid searchQuery={searchQuery} />
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SupportCategories searchQuery={searchQuery} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 md:p-12"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our dedicated support team is here to assist you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="headset"
              >
                Contact Support Team
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon="discord"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};