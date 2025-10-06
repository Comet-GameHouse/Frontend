import { Button } from '@components'
import { useAuth } from '@contexts'
import { ROUTES } from '@constants'

export const HeroSection = () => {
  const { user } = useAuth()

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl sm:rounded-[2rem] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div 
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <span className="text-2xl sm:text-3xl font-bold text-white">🚀</span>
        </div>
        
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-orbitron mb-4 sm:mb-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Welcome to<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Comet-GameHouse
          </span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          The ultimate platform for multiplayer gaming. Play, compete, and earn rewards with players worldwide.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {user ? (
            <>
              <Button
                variant="primary"
                size="lg"
                icon="gamepad"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = ROUTES.GAMES}
              >
                Play Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon="dashboard"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = ROUTES.DASHBOARD}
              >
                Dashboard
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                size="lg"
                icon="user-plus"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = ROUTES.SIGN_UP}
              >
                Join Free
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon="user"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = ROUTES.SIGN_IN}
              >
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}