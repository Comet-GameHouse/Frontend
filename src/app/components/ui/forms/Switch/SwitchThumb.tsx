import type { SwitchProps } from './types';
import { sizeStyles, colorStyles, disabledStyles, transitionStyles } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SwitchThumbProps extends Pick<SwitchProps, 'checked' | 'disabled' | 'size' | 'color' | 'icons'> {}

export const SwitchThumb = ({ checked, disabled, size = 'md', color = 'blue', icons }: SwitchThumbProps) => {
  const sizeStyle = sizeStyles[size];
  const colorStyle = colorStyles[color];
  const disabledStyle = disabledStyles;

  const thumbClasses = [
    'inline-block rounded-full transform ring-0',
    transitionStyles,
    sizeStyle.thumb,
    checked ? `translate-x-5 ${size === 'sm' ? 'translate-x-4' : size === 'lg' ? 'translate-x-6' : 'translate-x-5'}` : 'translate-x-1',
    disabled ? disabledStyle.thumb : colorStyle.thumb,
    !disabled && `hover:scale-110 ${colorStyle.ring} hover:ring-4`
  ].filter(Boolean).join(' ');

  const icon = checked ? icons?.checked : icons?.unchecked;
  const iconColor = disabled ? disabledStyle.icon : colorStyle.icon;

  return (
    <span className={thumbClasses}>
      {icon && (
        <FontAwesomeIcon 
          icon={icon} 
          className={`${sizeStyle.icon} ${iconColor}`}
        />
      )}
    </span>
  );
};