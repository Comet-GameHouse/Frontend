import type { InputSize, InputVariant } from './types';

export const INPUT_VARIANTS: Record<InputVariant, string> = {
  primary:
    'bg-gray-800 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300',
  secondary:
    'bg-gray-900 border-2 border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all duration-300',
  warning:
    'bg-gray-800 border-2 border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 text-white placeholder-gray-400 transition-all duration-300',
  danger:
    'bg-gray-800 border-2 border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-gray-400 transition-all duration-300',
  premium:
    'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 text-white placeholder-purple-300 transition-all duration-300',
} as const;

export const INPUT_SIZES: Record<InputSize, string> = {
  sm: 'px-3 py-2 text-sm rounded-md',
  md: 'px-4 py-3 text-base rounded-lg',
  lg: 'px-5 py-4 text-lg rounded-xl',
} as const;

export const LABEL_STYLES: Record<InputVariant, string> = {
  primary: 'text-blue-300 font-medium',
  secondary: 'text-cyan-300 font-medium',
  warning: 'text-yellow-300 font-medium',
  danger: 'text-red-300 font-medium',
  premium: 'text-purple-300 font-medium',
} as const;

export const ERROR_STYLES = 'text-red-400 text-sm mt-1 flex items-center gap-2';
