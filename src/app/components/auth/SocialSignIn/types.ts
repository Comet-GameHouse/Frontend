import type { ButtonVariant } from '@components'

export interface SocialProvider {
  name: string
  icon: string
  variant: ButtonVariant
}

export interface SocialSignInProps {
  dataAosDelay?: number
}