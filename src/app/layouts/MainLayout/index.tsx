import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { CometBackground } from '@app/components';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <CometBackground />
      <Header />
      <main className="flex-1 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
