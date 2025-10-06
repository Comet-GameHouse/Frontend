import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, NotificationProvider } from '@contexts';
import { NotificationContainer } from '@components';
import { AppRouter } from '@routes';

import { initAOS } from '@utils';

import '@styles/index.css';

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
