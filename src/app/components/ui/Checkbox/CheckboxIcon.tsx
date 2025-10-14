import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CheckboxProps } from './types';
import { sizeStyles, colorStyles, disabledStyles } from './data';

interface CheckboxIconProps extends Pick<CheckboxProps, 'checked' | 'indeterminate' | 'disabled' | 'size' | 'color' | 'icon'> {}

export const CheckboxIcon = ({ checked, indeterminate, disabled, size = 'md', color = 'blue', icon }: CheckboxIconProps) => {
  const sizeStyle = sizeStyles[size];
  const colorStyle = colorStyles[color];
  const disabledStyle = disabledStyles;

  const iconColor = disabled ? disabledStyle.icon : colorStyle.icon;

  if (indeterminate) {
    return (
      <div className={`w-2 h-0.5 ${disabled ? disabledStyle.thumb : colorStyle.thumb} rounded`} />
    );
  }

  if (checked) {
    return icon ? (
      <FontAwesomeIcon 
        icon={icon} 
        className={`${sizeStyle.icon} ${iconColor}`}
      />
    ) : (
      <div className={`w-2 h-2 ${disabled ? disabledStyle.thumb : colorStyle.thumb} rounded-sm`} />
    );
  }

  return null;
};