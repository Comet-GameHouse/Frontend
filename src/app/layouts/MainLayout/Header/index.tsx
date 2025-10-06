import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

import { Logo } from './Logo'
import { DesktopNavigation } from './DesktopNavigation'
import { UserInfo } from './UserInfo'
import { UserMenu } from './UserMenu'
import { AuthButtons } from './AuthButtons'
import { MobileMenu } from './MobileMenu'
import { MobileMenuButton } from './MobileMenuButton'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
      <div className="relative container mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 px-3 sm:px-4 lg:px-6 xl:px-8">
          <Logo />
          <DesktopNavigation />
          
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {user ? (
              <>
                <UserInfo />
                <UserMenu />
              </>
            ) : (
              <AuthButtons />
            )}
            <MobileMenuButton 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Backdrop overlay for mobile menu
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 mt-14 sm:mt-16"
          onClick={() => setIsMobileMenuOpen(false)}
          data-aos="fade-in"
          data-aos-duration="300"
        />
      )} */}
    </header>
  )
}