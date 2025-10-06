import { Button } from '@components'
import { FEATURED_GAMES } from './data'

export const FeaturedGames = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div 
        className="text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-3">
          Featured Games
        </h2>
        <p className="text-gray-400 text-lg">
          Jump into our most popular multiplayer experiences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {FEATURED_GAMES.map((game, index) => (
          <div
            key={game.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={index * 100}
          >
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${game.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <span className="text-white text-xl sm:text-2xl">🎮</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-2">
                  {game.name}
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <span>👥</span>
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🟢</span>
                    <span>{game.online} online</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    icon="play"
                    className="flex-1 sm:flex-none"
                  >
                    Play Now
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon="info-circle"
                    className="flex-1 sm:flex-none"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}