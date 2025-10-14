import type { IconName } from '@fortawesome/fontawesome-svg-core';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'cyan';
  icons?: {
    checked?: IconName;
    unchecked?: IconName;
  };
  className?: string;
}

export interface SwitchSize {
  container: string;
  track: string;
  thumb: string;
  icon: string;
  label: string;
}

export interface SwitchColor {
  track: string;
  thumb: string;
  icon: string;
  ring: string;
  hover: string;
}