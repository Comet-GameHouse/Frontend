import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  INPUT_VARIANTS,
  INPUT_SIZES,
  TEXTAREA_SIZES,
  LABEL_STYLES,
  ERROR_STYLES,
} from './data';
import type { InputSize, InputVariant } from './types';

interface BaseInputProps {
  variant?: InputVariant;
  inputSize?: InputSize;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  label?: string;
  error?: string;
  success?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
  asTextarea?: boolean;
  rows?: number;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    BaseInputProps {
  asTextarea?: false;
}

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    BaseInputProps {
  asTextarea: true;
}

type CombinedInputProps = InputProps | TextareaProps;

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
  asTextarea = false,
  rows,
  className = '',
  ...props
}: CombinedInputProps) => {
  const baseStyles = `transition-all duration-300 font-medium outline-none ${fullWidth ? 'w-full' : ''} ${glow ? 'shadow-lg' : ''} ${success ? '!border-green-500 !ring-2 !ring-green-500/20' : ''}`;

  const inputVariantStyle = INPUT_VARIANTS[variant];
  const inputSizeStyle = asTextarea ? TEXTAREA_SIZES[inputSize] : INPUT_SIZES[inputSize];

  const inputStyles = `
    ${baseStyles}
    ${inputVariantStyle}
    ${inputSizeStyle}
    ${className}
    ${asTextarea ? 'resize-y' : ''}
  `;

  const containerStyles = `relative ${fullWidth ? 'w-full' : ''}`;

  const renderInputElement = () => {
    if (asTextarea) {
      const textareaProps = props as TextareaHTMLAttributes<HTMLTextAreaElement>;
      return (
        <textarea
          {...textareaProps}
          rows={rows || (inputSize === 'sm' ? 3 : inputSize === 'md' ? 4 : 5)}
          className={`
            ${inputStyles}
            ${error ? '!border-red-500 !ring-2 !ring-red-500/20' : ''}
          `}
        />
      );
    }

    const inputProps = props as InputHTMLAttributes<HTMLInputElement>;
    return (
      <input
        {...inputProps}
        className={`
          ${inputStyles}
          ${icon && iconPosition === 'left' ? 'pl-10' : ''}
          ${icon && iconPosition === 'right' ? 'pr-10' : ''}
          ${error ? '!border-red-500 !ring-2 !ring-red-500/20' : ''}
        `}
      />
    );
  };

  const renderInput = () => (
    <div className={containerStyles}>
      {icon && iconPosition === 'left' && !asTextarea && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      )}

      {renderInputElement()}

      {icon && iconPosition === 'right' && !asTextarea && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      )}

      {success && !asTextarea && (
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