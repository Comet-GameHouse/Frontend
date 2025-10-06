import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'premium';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonDesign = 'neon' | 'pixel' | 'gradient';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  design?: ButtonDesign;
  loading?: boolean;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  pulse?: boolean;
  glow?: boolean;
  disabled?: boolean;
}
