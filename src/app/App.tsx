import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@contexts/AuthContext'
import { NotificationProvider, notificationRef } from '@contexts/NotificationContext'
import { NotificationContainer } from '@components'
import { AppRouter } from '@routes'

// Set notification function for use outside React components
export const showNotification = notificationRef.showNotification

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <AppRouter />
          <NotificationContainer />
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App