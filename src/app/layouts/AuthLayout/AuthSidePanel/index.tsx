import { BrandLogo } from './BrandLogo';
import { MainContent } from './MainContent';
import { StatsGrid } from './StatsGrid';

export const AuthSidePanel = () => {
  return (
    <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg border-b lg:border-b-0 lg:border-r border-gray-700/30 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col">
      <BrandLogo />
      <MainContent />
      <StatsGrid />
    </div>
  );
};
