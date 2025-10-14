import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  paddingStyles,
  roundedStyles,
  shadowStyles,
  colorThemes,
  borderTypes,
  shadowTypes,
  colorOptions,
} from './data';

interface CardProps {
  children: ReactNode;
  // Layout
  padding?: keyof typeof paddingStyles;
  rounded?: keyof typeof roundedStyles;
  shadow?: keyof typeof shadowStyles;
  // Color Theme (3 types) with specific color
  colorTheme?: keyof typeof colorThemes;
  color?: keyof typeof colorOptions;
  // Border Type (2 types)
  borderType?: keyof typeof borderTypes;
  // Shadow Type (2 types) with specific color
  shadowType?: 'dynamic' | 'static';
  // States
  highlighted?: boolean;
  clickable?: boolean;
  // Link behavior
  type?: 'link' | 'normal';
  to?: string;
  onClick?: () => void;
  className?: string;
}

export const Card = ({
  children,
  // Layout defaults
  padding = 'md',
  rounded = 'md',
  shadow = 'md',
  // Theme defaults
  colorTheme = 'consistent',
  color = 'blue',
  borderType = 'always',
  shadowType = 'static',
  // State defaults
  highlighted = false,
  clickable = false,
  // Link defaults
  type = 'normal',
  to = '/',
  onClick,
  className = '',
  ...props
}: CardProps) => {
  // Base styles
  const baseStyles =
    'backdrop-blur-sm transition-all duration-300 overflow-hidden';

  // Get current theme values
  const currentColorTheme = colorThemes[colorTheme];
  const currentBorderType = borderTypes[borderType];

  // Get shadow based on type and color
  const getShadowStyles = () => {
    if (shadowType === 'dynamic') {
      const dynamicShadow = shadowTypes.dynamic[color];
      return {
        base: dynamicShadow.base,
        hover: clickable ? dynamicShadow.hover : dynamicShadow.base,
      };
    }

    return {
      base: shadowTypes.static.base,
      hover: shadowTypes.static.hover,
    };
  };

  const shadowStylesConfig = getShadowStyles();

  // Build styles based on state
  const getStyles = () => {
    if (highlighted) {
      return [
        currentColorTheme.getHighlighted(color),
        currentBorderType.highlighted,
        clickable && currentColorTheme.getHighlightedHover(color),
        clickable && currentBorderType.highlightedHover,
      ]
        .filter(Boolean)
        .join(' ');
    }

    const baseStyles = [currentColorTheme.base, currentBorderType.base];

    // Add hover styles for hoverColored theme
    if (clickable && colorTheme === 'hoverColored') {
      baseStyles.push((currentColorTheme.hover as Function)(color));
    } else if (clickable) {
      baseStyles.push(currentColorTheme.hover as string);
    }

    if (clickable) {
      baseStyles.push(currentBorderType.hover);
    }

    return baseStyles.join(' ');
  };

  const getCurrentShadow = () => {
    return clickable ? shadowStylesConfig.hover : shadowStylesConfig.base;
  };

  const finalClassName = [
    baseStyles,
    paddingStyles[padding],
    roundedStyles[rounded],
    shadowStyles[shadow],
    getCurrentShadow(),
    getStyles(),
    clickable && 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render based on type
  if (type === 'link') {
    return (
      <Link {...props} to={to} className={finalClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <div
      {...props}
      className={finalClassName}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  );
};
