import type { ButtonVariant } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialProvider {
  name: string;
  icon: IconProp;
  variant: ButtonVariant;
}
