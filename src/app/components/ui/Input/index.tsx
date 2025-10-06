import type { InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  INPUT_VARIANTS,
  INPUT_SIZES,
  LABEL_STYLES,
  ERROR_STYLES,
} from './data';
import type { InputSize, InputVariant } from './types';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  label?: string;
  error?: string;
  success?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
}

export const Input = ({
  variant = 'primary',
  inputSize = 'md',
  icon,
  iconPosition = 'left',
  label,
  error,
  success,
  glow = false,
  fullWidth = true,
  className = '',
  ...props
}: InputProps) => {
  const baseStyles = `transition-all duration-300 font-medium outline-none ${fullWidth ? 'w-full' : ''} ${glow ? 'shadow-lg' : ''} ${success ? '!border-green-500 !ring-2 !ring-green-500/20' : ''}`;

  const inputStyles = `
    ${baseStyles}
    ${INPUT_VARIANTS[variant]}
    ${INPUT_SIZES[inputSize]}
    ${className}
  `;

  const containerStyles = `relative ${fullWidth ? 'w-full' : ''}`;

  const renderInput = () => (
    <div className={containerStyles}>
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      )}

      <input
        {...props}
        className={`
          ${inputStyles}
          ${icon && iconPosition === 'left' ? 'pl-10' : ''}
          ${icon && iconPosition === 'right' ? 'pr-10' : ''}
          ${error ? '!border-red-500 !ring-2 !ring-red-500/20' : ''}
        `}
      />

      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      )}

      {success && (
        <FontAwesomeIcon
          icon="gem"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
        />
      )}
    </div>
  );

  return (
    <div className="space-y-2">
      {label && (
        <label className={`block font-medium ${LABEL_STYLES[variant]}`}>
          {label}
        </label>
      )}

      {renderInput()}

      {error && (
        <div className={ERROR_STYLES}>
          <FontAwesomeIcon icon="lock" className="text-red-400" />
          {error}
        </div>
      )}
    </div>
  );
};
