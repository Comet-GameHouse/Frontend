import { createContext, useContext, useState } from 'react'
import type { NotificationContextType, NotificationProviderProps, NotificationItem } from './types'
import type { NotificationType, NotificationPosition } from '@components'

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const notificationRef: { showNotification: NotificationContextType['showNotification'] } = {
  showNotification: () => {}
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  const showNotification = (
    message: string, 
    type: NotificationType = 'info', 
    duration = 5000,
    position: NotificationPosition = 'top-right'
  ) => {
    const id = Math.random().toString(36).substring(2, 9)
    const notification: NotificationItem = { 
      id, 
      message, 
      type, 
      duration,
      position
    }
    
    setNotifications(prev => [...prev, notification])
  }

  const hideNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  // Update the ref
  notificationRef.showNotification = showNotification

  const value: NotificationContextType = {
    notifications,
    showNotification,
    hideNotification
  }

  return (
    <NotificationContext.Provider value={value}>
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