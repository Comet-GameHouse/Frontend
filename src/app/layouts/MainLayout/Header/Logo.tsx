import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
      data-aos="fade-right"
      data-aos-duration="400"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
        <span className="text-white font-bold text-sm sm:text-base lg:text-lg">🚀</span>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron leading-tight">
          Comet-GameHouse
        </h1>
        <p className="text-blue-300 text-xs hidden sm:block">Play & Earn</p>
      </div>
    </Link>
  )
}