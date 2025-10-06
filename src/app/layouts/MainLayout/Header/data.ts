export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/games', label: 'Games', icon: 'gamepad' },
  { path: '/shop', label: 'Shop', icon: 'shopping-bag' },
  { path: '/leaderboard', label: 'Leaderboard', icon: 'trophy' },
  { path: '/community', label: 'Community', icon: 'users' }
] as const

export const USER_MENU_ITEMS = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'Profile', icon: 'user', path: '/profile' },
  { label: 'Settings', icon: 'cog', path: '/settings' },
  { label: 'Logout', icon: 'sign-out-alt', path: '/logout' }
] as const