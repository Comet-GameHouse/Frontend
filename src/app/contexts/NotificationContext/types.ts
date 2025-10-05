import type { ReactNode } from 'react'

export interface Notification {
  id: string
  message: string
  type: NotificationType
  duration?: number
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface NotificationContextType {
  notifications: Notification[]
  showNotification: (message: string, type: NotificationType, duration?: number) => void
  hideNotification: (id: string) => void
}

export interface NotificationProviderProps {
  children: ReactNode
}