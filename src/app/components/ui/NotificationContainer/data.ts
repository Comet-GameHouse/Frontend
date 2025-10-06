export const NOTIFICATION_ICONS = {
  success: 'check-circle',
  error: 'times-circle',
  warning: 'exclamation-triangle',
  info: 'info-circle',
  premium: 'crown',
} as const;

export const NOTIFICATION_POSITION_STYLES = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
} as const;

export const NOTIFICATION_BACKGROUNDS = {
  success:
    'bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-md',
  error: 'bg-gradient-to-r from-red-500/20 to-pink-600/20 backdrop-blur-md',
  warning:
    'bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-md',
  info: 'bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-md',
  premium:
    'bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-md',
} as const;

export const NOTIFICATION_BORDERS = {
  success: 'border-l-green-500',
  error: 'border-l-red-500',
  warning: 'border-l-yellow-500',
  info: 'border-l-blue-500',
  premium: 'border-l-purple-500',
} as const;

export const NOTIFICATION_TEXT_COLORS = {
  success: 'text-green-100',
  error: 'text-red-100',
  warning: 'text-yellow-100',
  info: 'text-blue-100',
  premium: 'text-purple-100',
} as const;

export const NOTIFICATION_ICON_BACKGROUNDS = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
  premium: 'bg-gradient-to-r from-purple-500 to-pink-500',
} as const;

export const NOTIFICATION_ICON_BORDERS = {
  success: 'border-2 border-green-300',
  error: 'border-2 border-red-300',
  warning: 'border-2 border-yellow-300',
  info: 'border-2 border-blue-300',
  premium: 'border-2 border-purple-300',
} as const;

export const NOTIFICATION_PROGRESS_COLORS = {
  success: 'bg-green-400',
  error: 'bg-red-400',
  warning: 'bg-yellow-400',
  info: 'bg-blue-400',
  premium: 'bg-gradient-to-r from-purple-400 to-pink-400',
} as const;
