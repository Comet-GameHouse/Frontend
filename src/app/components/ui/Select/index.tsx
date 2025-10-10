// Select.tsx
import type { SelectHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  INPUT_VARIANTS,
  SELECT_SIZES,
  LABEL_STYLES,
  ERROR_STYLES,
} from './data';
import type { InputSize, InputVariant } from './types';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize;
  icon?: IconProp;
  label?: string;
  error?: string;
  success?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = ({
  variant = 'primary',
  inputSize = 'md',
  icon,
  label,
  error,
  success,
  glow = false,
  fullWidth = true,
  options,
  placeholder,
  className = '',
  ...props
}: SelectProps) => {
  const baseStyles = `transition-all duration-300 font-medium outline-none ${fullWidth ? 'w-full' : ''} ${glow ? 'shadow-lg' : ''} ${success ? '!border-green-500 !ring-2 !ring-green-500/20' : ''}`;

  const selectStyles = `
    ${baseStyles}
    ${INPUT_VARIANTS[variant]}
    ${SELECT_SIZES[inputSize]}
    ${className}
    ${error ? '!border-red-500 !ring-2 !ring-red-500/20' : ''}
    appearance-none
    cursor-pointer
  `;

  const containerStyles = `relative ${fullWidth ? 'w-full' : ''}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className={`block font-medium ${LABEL_STYLES[variant]}`}>
          {label}
        </label>
      )}

      <div className={containerStyles}>
        {/* Icon on the left */}
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        )}

        {/* Select element */}
        <select
          {...props}
          className={`
            ${selectStyles}
            ${icon ? 'pl-10' : ''}
            ${success ? 'pr-10' : ''}
          `}
        >
          {/* Placeholder option */}
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}

          {/* Options */}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="bg-gray-800 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow - always on the right */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <FontAwesomeIcon icon="chevron-down" className="text-gray-400" />
        </div>

        {/* Success indicator */}
        {success && (
          <FontAwesomeIcon
            icon="gem"
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-green-500 pointer-events-none"
          />
        )}
      </div>

      {error && (
        <div className={ERROR_STYLES}>
          <FontAwesomeIcon icon="lock" className="text-red-400" />
          {error}
        </div>
      )}
    </div>
  );
};
