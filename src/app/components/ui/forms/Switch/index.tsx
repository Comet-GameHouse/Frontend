import { SwitchTrack } from './SwitchTrack';
import { SwitchThumb } from './SwitchThumb';
import type { SwitchProps } from './types';
import { sizeStyles, disabledStyles } from './data';

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  size = 'md',
  color = 'blue',
  icons,
  className = '',
  ...props
}: SwitchProps) => {
  const sizeStyle = sizeStyles[size];
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
        className="hidden"
      />
      
      <SwitchTrack checked={checked} disabled={disabled} size={size} color={color}>
        <SwitchThumb checked={checked} disabled={disabled} size={size} color={color} icons={icons} />
      </SwitchTrack>

      {label && (
        <span className={`${sizeStyle.label} ${disabled ? disabledStyle.label : 'text-gray-300 cursor-pointer'}`}>
          {label}
        </span>
      )}
    </label>
  );
};