export const ROUTES = {
  // Public routes
  HOME: '/',
  SUPPORT: '/support',
  PROFILE: '/profile/:id',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  CONTACT: '/contact',

  // Auth routes
  AUTH: '/auth',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  SIGN_OUT: '/auth/sign-out',

  // App routes
  APP: '/app',
  GAMES: '/app/games',
  DASHBOARD: '/app/dashboard',
  SHOP: '/app/shop',
  LEADERBOARD: '/app/leaderboard',
  COMMUNITY: '/app/community',
  MY_PROFILE: '/app/profile',
  SETTINGS: '/app/settings',
  PLAYERS: '/app/players',

  // Game routes
  GAME_PREFIX: '/games',
  GAME_LOBBY: '/games/lobby',

  // Other
  NOT_FOUND: '*',
} as const;
