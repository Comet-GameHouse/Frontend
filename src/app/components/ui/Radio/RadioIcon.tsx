import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { RadioProps } from './types';
import { sizeStyles, colorStyles, disabledStyles } from './data';

interface RadioIconProps extends Pick<RadioProps, 'checked' | 'disabled' | 'size' | 'color' | 'icon'> {}

export const RadioIcon = ({ checked, disabled, size = 'md', color = 'blue', icon }: RadioIconProps) => {
  const sizeStyle = sizeStyles[size];
  const colorStyle = colorStyles[color];
  const disabledStyle = disabledStyles;

  const iconColor = disabled ? disabledStyle.icon : colorStyle.icon;

  if (checked) {
    return icon ? (
      <FontAwesomeIcon 
        icon={icon} 
        className={`${sizeStyle.icon} ${iconColor}`}
      />
    ) : (
      <div className={`w-2 h-2 ${disabled ? disabledStyle.thumb : colorStyle.thumb} rounded-full`} />
    );
  }

  return null;
};