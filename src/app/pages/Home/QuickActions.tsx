import { QUICK_ACTIONS } from './data'

export const QuickActions = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div 
        className="text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-3">
          Quick Actions
        </h2>
        <p className="text-gray-400 text-lg">
          Get started instantly with these options
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {QUICK_ACTIONS.map((action, index) => (
          <div
            key={action.text}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay={index * 100}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
              <span className="text-cyan-400 text-lg">⚡</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {action.text}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {action.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}