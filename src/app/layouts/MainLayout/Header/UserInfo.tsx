import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '@contexts'

export const UserInfo = () => {
  const { user } = useAuth()

  if (!user) return null

  return (
    <>
      {/* Desktop User Info */}
      <div 
        className="hidden sm:flex items-center space-x-2 lg:space-x-3 bg-gray-700/50 rounded-lg px-3 lg:px-4 py-1.5 lg:py-2 min-w-0"
        data-aos="fade-left"
        data-aos-duration="400"
        data-aos-delay="200"
      >
        <div className="text-right min-w-0 flex-1">
          <div className="text-white font-semibold text-xs lg:text-sm truncate max-w-20 xl:max-w-none">
            {user.username}
          </div>
          <div className="text-yellow-400 text-xs flex items-center space-x-1 justify-end">
            <FontAwesomeIcon icon="coins" className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{user.coins.toLocaleString()}</span>
          </div>
        </div>
        <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">
            {user.username.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {/* Mobile Coins Only */}
      <div className="sm:hidden flex items-center space-x-1 bg-gray-700/50 rounded-lg px-2 py-1.5">
        <FontAwesomeIcon icon="coins" className="text-yellow-400 w-3 h-3" />
        <span className="text-yellow-400 text-xs font-semibold">
          {user.coins > 999 ? `${Math.floor(user.coins / 1000)}k` : user.coins}
        </span>
      </div>
    </>
  )
}