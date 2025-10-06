import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '@contexts'
import { USER_MENU_ITEMS } from './data'

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.user-menu') && !target.closest('.user-menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = () => {
    signOut()
    navigate('/')
    setIsOpen(false)
  }

  return (
    <div className="relative user-menu">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="user-menu-button w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
      >
        <FontAwesomeIcon icon="user" className="text-gray-300 text-sm" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-lg py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-700/50 sm:hidden">
            <div className="text-white font-semibold text-sm truncate">{user?.username}</div>
            <div className="text-yellow-400 text-xs flex items-center space-x-1">
              <FontAwesomeIcon icon="coins" className="w-3 h-3" />
              <span>{user?.coins.toLocaleString()} coins</span>
            </div>
          </div>
          {USER_MENU_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full transition-colors duration-200 border-t border-gray-700/50 mt-1"
          >
            <FontAwesomeIcon icon="sign-out-alt" className="w-4 h-4" />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      )}
    </div>
  )
}