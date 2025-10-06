export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  NETWORK_ERROR: 'Network error occurred'
} as const

export const AUTH_MESSAGES = {
  SIGNIN_SUCCESS: 'Welcome back!',
  SIGNOUT_SUCCESS: 'Signed out successfully',
  SIGNUP_SUCCESS: 'Account created successfully!'
} as const