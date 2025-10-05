export const ROUTES = {
  // Public routes
  HOME: '/',

  // Auth routes
  AUTH: '/auth',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',

  // App routes
  APP: '/app',
  DASHBOARD: '/app/dashboard',
  SHOP: '/app/shop',
  LEADERBOARD: '/app/leaderboard',
  PROFILE: '/app/profile/:id',

  // Game routes
  GAMES: '/games',
  GAME_LOBBY: '/games/lobby',

  // Other
  NOT_FOUND: '*',
} as const;
