import type { SwitchSize, SwitchColor } from './types';

export const sizeStyles: Record<'sm' | 'md' | 'lg', SwitchSize> = {
  sm: {
    container: 'w-10 h-6',
    track: 'w-10 h-6',
    thumb: 'w-4 h-4',
    icon: 'text-xs',
    label: 'text-sm'
  },
  md: {
    container: 'w-12 h-7',
    track: 'w-12 h-7',
    thumb: 'w-5 h-5',
    icon: 'text-sm',
    label: 'text-base'
  },
  lg: {
    container: 'w-14 h-8',
    track: 'w-14 h-8',
    thumb: 'w-6 h-6',
    icon: 'text-base',
    label: 'text-lg'
  }
};

export const colorStyles: Record<'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'cyan', SwitchColor> = {
  blue: {
    track: 'bg-blue-500/20 border-blue-500/30',
    thumb: 'bg-blue-500',
    icon: 'text-blue-500',
    ring: 'ring-blue-500/50',
    hover: 'hover:bg-blue-500/30 hover:border-blue-400/50'
  },
  green: {
    track: 'bg-green-500/20 border-green-500/30',
    thumb: 'bg-green-500',
    icon: 'text-green-500',
    ring: 'ring-green-500/50',
    hover: 'hover:bg-green-500/30 hover:border-green-400/50'
  },
  purple: {
    track: 'bg-purple-500/20 border-purple-500/30',
    thumb: 'bg-purple-500',
    icon: 'text-purple-500',
    ring: 'ring-purple-500/50',
    hover: 'hover:bg-purple-500/30 hover:border-purple-400/50'
  },
  red: {
    track: 'bg-red-500/20 border-red-500/30',
    thumb: 'bg-red-500',
    icon: 'text-red-500',
    ring: 'ring-red-500/50',
    hover: 'hover:bg-red-500/30 hover:border-red-400/50'
  },
  yellow: {
    track: 'bg-yellow-500/20 border-yellow-500/30',
    thumb: 'bg-yellow-500',
    icon: 'text-yellow-500',
    ring: 'ring-yellow-500/50',
    hover: 'hover:bg-yellow-500/30 hover:border-yellow-400/50'
  },
  cyan: {
    track: 'bg-cyan-500/20 border-cyan-500/30',
    thumb: 'bg-cyan-500',
    icon: 'text-cyan-500',
    ring: 'ring-cyan-500/50',
    hover: 'hover:bg-cyan-500/30 hover:border-cyan-400/50'
  }
};

export const disabledStyles = {
  track: 'bg-gray-500/10 border-gray-500/20 cursor-not-allowed',
  thumb: 'bg-gray-400',
  icon: 'text-gray-400',
  label: 'text-gray-400 cursor-not-allowed'
};

export const transitionStyles = 'transition-all duration-300 ease-out';