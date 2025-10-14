import { CheckboxIcon } from './CheckboxIcon';
import type { CheckboxProps } from './types';
import { sizeStyles, colorStyles, disabledStyles, transitionStyles } from './data';

export const Checkbox = ({
  checked = false,
  indeterminate = false,
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
}: CheckboxProps) => {
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

  const checkboxClasses = [
    'flex items-center justify-center rounded border-2',
    transitionStyles,
    sizeStyle.container,
    checked || indeterminate ? colorStyle.track : 'bg-gray-600/30 border-gray-500/30',
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
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        className="hidden"
      />
      
      <span className={checkboxClasses}>
        <CheckboxIcon 
          checked={checked} 
          indeterminate={indeterminate}
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