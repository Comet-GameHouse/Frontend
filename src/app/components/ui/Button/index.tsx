import type { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_DESIGNS } from './data';
import type { ButtonDesign, ButtonSize, ButtonVariant } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  design?: ButtonDesign;
  loading?: boolean;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  pulse?: boolean;
  glow?: boolean;
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  design = 'pixel',
  loading = false,
  icon,
  iconPosition = 'left',
  pulse = false,
  glow = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = `cursor-pointer rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:brightness-110 active:translate-y-0.5 ${pulse ? 'animate-pulse' : ''} ${glow ? 'shadow-lg shadow-current' : ''}`;

  const buttonStyles = `
    ${baseStyles}
    ${BUTTON_VARIANTS[variant]}
    ${BUTTON_SIZES[size]}
    ${BUTTON_DESIGNS[design]}
    ${className}
  `;

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <FontAwesomeIcon icon="spinner" className="animate-spin" />
          <span>Loading...</span>
        </>
      );
    }

    return (
      <>
        {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} />}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} />}
      </>
    );
  };

  return (
    <button {...props} disabled={disabled || loading} className={buttonStyles}>
      {renderContent()}
    </button>
  );
};

export type { ButtonVariant } from './types';
