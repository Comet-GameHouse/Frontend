import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { InputHTMLAttributes } from 'react';

export type InputVariant = 'primary' | 'secondary' | 'premium';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  label?: string;
  error?: string;
  success?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
}
