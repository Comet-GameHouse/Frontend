import type { SwitchProps } from './types';
import { sizeStyles, colorStyles, disabledStyles, transitionStyles } from './data';

interface SwitchTrackProps extends Pick<SwitchProps, 'checked' | 'disabled' | 'size' | 'color'> {
  children: React.ReactNode;
}

export const SwitchTrack = ({ checked, disabled, size = 'md', color = 'blue', children }: SwitchTrackProps) => {
  const sizeStyle = sizeStyles[size];
  const colorStyle = colorStyles[color];
  const disabledStyle = disabledStyles;

  const trackClasses = [
    'relative inline-flex items-center rounded-full border-2 border-transparent',
    transitionStyles,
    sizeStyle.track,
    checked ? colorStyle.track : 'bg-gray-600/30 border-gray-500/30',
    disabled ? disabledStyle.track : colorStyle.hover,
    !disabled && 'cursor-pointer'
  ].filter(Boolean).join(' ');

  return (
    <span className={trackClasses}>
      {children}
    </span>
  );
};