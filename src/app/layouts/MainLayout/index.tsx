import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { CometBackground } from '@app/components';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <CometBackground />
      <Header />
      <Sidebar />
      <main className="flex-1 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
