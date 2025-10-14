import type { IconName } from '@fortawesome/fontawesome-svg-core';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'cyan';
  icon?: IconName;
  className?: string;
}

export interface CheckboxSize {
  container: string;
  icon: string;
  label: string;
}

export interface CheckboxColor {
  track: string;
  thumb: string;
  icon: string;
  ring: string;
  hover: string;
}