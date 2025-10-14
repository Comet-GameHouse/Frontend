import { RadioIcon } from './RadioIcon';
import type { RadioProps } from './types';
import { sizeStyles, colorStyles, disabledStyles, transitionStyles } from './data';

export const Radio = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  size = 'md',
  color = 'blue',
  icon,
  className = '',
  ...props
}: RadioProps) => {
  const sizeStyle = sizeStyles[size];
  const colorStyle = colorStyles[color];
  const disabledStyle = disabledStyles;

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const containerClasses = [
    'inline-flex items-center space-x-3',
    disabled ? 'opacity-60' : '',
    className
  ].filter(Boolean).join(' ');

  const radioClasses = [
    'flex items-center justify-center rounded-full border-2',
    transitionStyles,
    sizeStyle.container,
    checked ? colorStyle.track : 'bg-gray-600/30 border-gray-500/30',
    disabled ? disabledStyle.track : `${colorStyle.hover} cursor-pointer`,
    !disabled && checked && `${colorStyle.ring} hover:ring-4`
  ].filter(Boolean).join(' ');

  return (
    <label 
      className={containerClasses}
      data-aos="fade-up"
      {...props}
    >
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        className="hidden"
      />
      
      <span className={radioClasses}>
        <RadioIcon 
          checked={checked}
          disabled={disabled}
          size={size}
          color={color}
          icon={icon}
        />
      </span>

      {label && (
        <span className={`${sizeStyle.label} ${disabled ? disabledStyle.label : 'text-gray-300 cursor-pointer'}`}>
          {label}
        </span>
      )}
    </label>
  );
};