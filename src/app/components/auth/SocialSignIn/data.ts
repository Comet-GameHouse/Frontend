import type { SocialProvider } from './types';

export const SOCIAL_PROVIDERS: SocialProvider[] = [
  { name: 'Google', icon: ['fab', 'google'], variant: 'secondary' as const },
  { name: 'Discord', icon: ['fab', 'discord'], variant: 'secondary' as const },
] as const;
