import type { ReactNode } from 'react';
import { paddingStyles, roundedStyles, shadowStyles, variantStyles } from './data';

interface PaperProps {
  children: ReactNode;
  padding?: keyof typeof paddingStyles;
  rounded?: keyof typeof roundedStyles;
  shadow?: keyof typeof shadowStyles;
  variant?: keyof typeof variantStyles;
  className?: string;
}

export const Paper = ({
  children,
  padding = 'md',
  rounded = 'md',
  shadow = 'none',
  variant = 'outlined',
  className = '',
  ...props
}: PaperProps) => {
  const baseStyles = 'backdrop-blur-sm transition-all duration-300';
  
  const finalClassName = [
    baseStyles,
    paddingStyles[padding],
    roundedStyles[rounded],
    shadowStyles[shadow],
    variantStyles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      {...props}
      className={finalClassName}
    >
      {children}
    </div>
  );
};