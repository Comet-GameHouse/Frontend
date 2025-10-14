export const paddingStyles = {
  none: 'p-0',
  sm: 'p-3 sm:p-4',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8',
  xl: 'p-8 sm:p-12',
};

export const roundedStyles = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  full: 'rounded-full',
};

export const shadowStyles = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

// Color options for different themes
export const colorOptions = {
  blue: {
    base: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    hover: 'hover:bg-blue-500/30 hover:border-blue-400/50 hover:text-blue-100',
  },
  green: {
    base: 'bg-green-500/20 border-green-500/30 text-green-300',
    hover:
      'hover:bg-green-500/30 hover:border-green-400/50 hover:text-green-100',
  },
  yellow: {
    base: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300',
    hover:
      'hover:bg-yellow-500/30 hover:border-yellow-400/50 hover:text-yellow-100',
  },
  red: {
    base: 'bg-red-500/20 border-red-500/30 text-red-300',
    hover: 'hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-100',
  },
  orange: {
    base: 'bg-orange-500/20 border-orange-500/30 text-orange-300',
    hover:
      'hover:bg-orange-500/30 hover:border-orange-400/50 hover:text-orange-100',
  },
  purple: {
    base: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    hover:
      'hover:bg-purple-500/30 hover:border-purple-400/50 hover:text-purple-100',
  },
  cyan: {
    base: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
    hover: 'hover:bg-cyan-500/30 hover:border-cyan-400/50 hover:text-cyan-100',
  },
  gray: {
    base: 'bg-gray-500/20 border-gray-500/30 text-gray-300',
    hover: 'hover:bg-gray-500/30 hover:border-gray-400/50 hover:text-gray-100',
  },
};

// Color Themes
export const colorThemes = {
  // First type: Same colors for all states
  consistent: {
    base: 'bg-gray-800/30 border-gray-700/30 text-gray-300',
    hover: 'hover:bg-gray-700/40 hover:border-gray-600/50 hover:text-white',
    getHighlighted: () => 'bg-gray-700/40 border-gray-600/50 text-white',
    getHighlightedHover: () => 'hover:bg-gray-600/40 hover:border-gray-500/50',
  },
  // Second type: Default for normal, colored for highlighted
  stateful: {
    base: 'bg-gray-800/30 border-gray-700/30 text-gray-300',
    hover: 'hover:bg-gray-700/40 hover:border-gray-600/50 hover:text-white',
    getHighlighted: (color: keyof typeof colorOptions) =>
      colorOptions[color].base,
    getHighlightedHover: (color: keyof typeof colorOptions) =>
      colorOptions[color].hover,
  },
  // Third type: Default initial, colored hover
  hoverColored: {
    base: 'bg-gray-800/30 border-gray-700/30 text-gray-300',
    hover: (color: keyof typeof colorOptions) => colorOptions[color].hover,
    getHighlighted: (color: keyof typeof colorOptions) =>
      colorOptions[color].base,
    getHighlightedHover: (color: keyof typeof colorOptions) =>
      colorOptions[color].hover,
  },
};

// Border Types
export const borderTypes = {
  always: {
    base: 'border',
    hover: 'hover:border',
    highlighted: 'border',
    highlightedHover: 'hover:border',
  },
  highlightedOnly: {
    base: 'border-0',
    hover: 'hover:border-0',
    highlighted: 'border',
    highlightedHover: 'hover:border',
  },
};

// Shadow Types (now independent of highlighted state)
export const shadowTypes = {
  // Colored shadow on hover (regardless of highlighted state)
  dynamic: {
    blue: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-blue-500/20',
    },
    green: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-green-500/20',
    },
    yellow: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-yellow-500/20',
    },
    red: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-red-500/20',
    },
    orange: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-orange-500/20',
    },
    purple: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-purple-500/20',
    },
    cyan: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-cyan-500/20',
    },
    gray: {
      base: 'shadow-gray-500/10',
      hover: 'hover:shadow-gray-500/20',
    },
  },
  // Same shadow always
  static: {
    base: 'shadow-gray-500/10',
    hover: 'hover:shadow-gray-500/10',
  },
};
