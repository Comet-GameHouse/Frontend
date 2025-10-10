import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { variantStyles } from './data';

interface CardProps {
  children: ReactNode;
  variant?: 'clickable' | 'static-feature' | 'static-paper' | 'static';
  type?: 'default-link' | 'link' | 'normal';
  to?: string;
  clicked?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  children,
  variant = 'static',
  type = 'normal',
  className = '',
  to = '/',
  clicked = false,
  onClick,
  ...props
}: CardProps) => {
  const baseStyles =
    'backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 transition-all duration-300 overflow-hidden';
  const clickedStyle =
    'bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:border-blue-500/70 hover:bg-blue-500/30 shadow-lg shadow-blue-500/20 text-white cursor-pointer';

  if (type === 'normal')
    return (
      <div
        {...props}
        className={`${baseStyles} ${clicked ? clickedStyle : variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  else if (type === 'link')
    return (
      <Link
        {...props}
        to={to}
        className={`${baseStyles} ${clicked ? clickedStyle : variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  else if (type === 'default-link')
    return (
      <a
        {...props}
        href={to}
        className={`${baseStyles} ${clicked ? clickedStyle : variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
};
