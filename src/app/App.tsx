import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import {
  AuthProvider,
  NotificationProvider,
  notificationRef,
} from '@contexts';
import { NotificationContainer } from '@components';
import { AppRouter } from '@routes';

import '@utils';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Set notification function for use outside React components
export const showNotification = notificationRef.showNotification;

function App() {
  AOS.init({
    duration: 100,
    easing: 'ease-out-cubic',
    once: true,
    offset: 10,
  });

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
