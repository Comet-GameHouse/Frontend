import { 
  faCheckCircle, 
  faExclamationTriangle, 
  faInfoCircle, 
  faTimesCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export const NOTIFICATION_ICONS = {
  success: faCheckCircle,
  error: faTimesCircle,
  warning: faExclamationTriangle,
  info: faInfoCircle,
  close: faTimes
} as const

export const NOTIFICATION_ICON_COLORS = {
  success: 'text-green-500',
  error: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-blue-500'
} as const