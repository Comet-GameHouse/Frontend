import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, NotificationProvider, notificationRef } from '@contexts';
import { NotificationContainer } from '@components';
import { AppRouter } from '@routes';

import { initAOS } from '@utils';

import '@styles/index.css';

// Set notification function for use outside React components
export const showNotification = notificationRef.showNotification;

function App() {
  initAOS();

  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <AppRouter />
          <NotificationContainer />
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
