import { Outlet } from 'react-router-dom'
import { CometBackground } from './CometBackground'
import { AuthSidePanel } from './AuthSidePanel'

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <CometBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        <AuthSidePanel />
        
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-lg sm:shadow-2xl p-6 sm:p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}