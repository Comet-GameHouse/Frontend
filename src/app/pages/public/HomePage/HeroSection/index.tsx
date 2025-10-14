import { HeroBackground } from './HeroBackground';

import { HeroHeading } from './HeroHeading';
import { HeroButtons } from './HeroButtons';
import { HeroStats } from './HeroStats';

export const HeroSection = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden border border-gray-700/30">
      <HeroBackground />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroHeading />
        <HeroButtons />
        <HeroStats />
      </div>
    </section>
  );
};
