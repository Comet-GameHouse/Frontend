export const BUTTON_VARIANTS = {
  primary: 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-600 text-white', // Space blue
  secondary: 'bg-gray-700 border-gray-600 text-white',
  danger: 'bg-gradient-to-r from-red-500 to-pink-500 border-red-600 text-white',
  success: 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-600 text-white',
  premium: 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-600 text-white'
}

export const BUTTON_SIZES = {
  sm: 'px-4 py-2 text-sm border-b-2',
  md: 'px-6 py-3 text-base border-b-4',
  lg: 'px-8 py-4 text-lg border-b-4'
} as const

export const BUTTON_DESIGNS = {
  '3d': 'transform active:translate-y-1 active:border-b-0 transition-all duration-75 hover:brightness-110 font-bold shadow-lg',
  neon: 'border-0 shadow-[0_0_5px_theme(colors.blue.400),0_0_10px_theme(colors.blue.400),0_0_15px_theme(colors.blue.400)] hover:shadow-[0_0_10px_theme(colors.blue.400),0_0_20px_theme(colors.blue.400),0_0_30px_theme(colors.blue.400)] transition-shadow',
  pixel: 'border-0 pixelated font-pixel',
  gradient: 'border-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all'
} as const