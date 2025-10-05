export const NOTIFICATION_DURATION = {
  SUCCESS: 5000,
  ERROR: 6000,
  WARNING: 5000,
  INFO: 4000
} as const

export const NOTIFICATION_STYLES = {
  success: 'bg-green-50 border-green-500 text-green-800',
  error: 'bg-red-50 border-red-500 text-red-800',
  warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
  info: 'bg-blue-50 border-blue-500 text-blue-800'
} as const