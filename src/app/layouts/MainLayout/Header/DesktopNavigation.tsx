import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NAVIGATION_ITEMS } from './data'

export const DesktopNavigation = () => {
  const location = useLocation()

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === item.path
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
          }`}
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-delay={index * 100}
        >
          <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
          <span className="font-semibold text-sm xl:text-base">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}