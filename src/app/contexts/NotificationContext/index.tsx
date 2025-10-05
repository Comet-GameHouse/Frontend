import { createContext, useContext, useState } from 'react'
import type { Notification, NotificationContextType, NotificationProviderProps, NotificationType } from './types'
import { NOTIFICATION_DURATION } from './data'

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

// Create a ref to hold the showNotification function
let notificationRef: { showNotification: NotificationContextType['showNotification'] } = {
  showNotification: () => {}
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = (message: string, type: NotificationType, duration?: number) => {
    const id = Math.random().toString(36).substring(2, 9)
    const notification = { 
      id, 
      message, 
      type, 
      duration: duration || NOTIFICATION_DURATION[type.toUpperCase() as keyof typeof NOTIFICATION_DURATION]
    }
    
    setNotifications(prev => [...prev, notification])
    
    if (notification.duration > 0) {
      setTimeout(() => {
        hideNotification(id)
      }, notification.duration)
    }
  }

  const hideNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  // Update the ref when component mounts/updates
  notificationRef.showNotification = showNotification

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

// Export the ref for use outside React components
export { notificationRef }