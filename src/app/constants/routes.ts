export const ROUTES = {
  // Public routes
  HOME: '/',
  PROFILE: '/profile/:id',
  TERMS: '/terms',
  PRIVACY: '/privacy',

  // Support routes
  SUPPORT: '/support',
  CONTACT: '/support/contact',
  HELP: '/support/help',
  STATUS: '/support/status',
  BUGS: '/support/bugs',
  FEEDBACK: '/support/feedback',
  ABOUT_US: '/support/aboutus',

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
  MY_PROFILE: '/app/profile',
  SETTINGS: '/app/settings',
  PLAYERS: '/app/players',
  FRIENDS: '/app/friends',
  NOTIFICATIONS: '/app/notifications',
  TOURNAMENTS: '/app/tournaments',
  ACHIEVEMENTS: '/app/achievements',
  TOURNAMENT_DETAIL: '/app/tournaments/:id',
  GAME_DETAIL: '/app/games/:id',
  ROOM_DETAIL: '/app/rooms/:id',

  // Community routes
  COMMUNITY: '/community',
  FORUMS: '/community/forums',

  // Game routes
  GAME_PREFIX: '/games',
  GAME_LOBBY: '/games/lobby',

  // Other
  NOT_FOUND: '*',
} as const;
