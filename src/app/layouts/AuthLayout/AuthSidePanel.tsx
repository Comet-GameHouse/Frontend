import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FEATURES, STATS, TESTIMONIALS } from './data'

export const AuthSidePanel = () => {
  return (
    <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg border-b lg:border-b-0 lg:border-r border-gray-700/30 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col">
      {/* Logo & Brand - Mobile & Desktop */}
      <div className="text-center lg:text-left mb-6 lg:mb-0" data-aos="fade-down" data-aos-duration="400">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 space-y-3 lg:space-y-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
            <span className="text-xl font-bold text-white">🚀</span>
          </div>
          <div className="ml-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white font-orbitron">Comet GameHouse</h1>
            <p className="text-blue-300 text-sm">Where gamers unite</p>
          </div>
        </div>
      </div>

      {/* Main Content - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:flex flex-1 flex-col justify-between space-y-6 lg:space-y-8 my-4 lg:my-8">
        {/* Hero Section */}
        <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="100">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-3 lg:mb-4 font-orbitron leading-tight">
            Join the Ultimate<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Gaming Universe
            </span>
          </h2>
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
            Experience next-gen multiplayer gaming with players worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-3 lg:space-y-4">
          <h3 className="text-lg lg:text-xl font-bold text-white font-orbitron" data-aos="fade-right" data-aos-delay="150">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay={200 + (index * 50)}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <FontAwesomeIcon icon={feature.icon} className="text-blue-400 text-xs lg:text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-200 group-hover:text-white transition-colors duration-300 font-semibold text-sm lg:text-base">
                    {feature.text}
                  </div>
                  <div className="text-gray-400 text-xs lg:text-sm mt-1">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials - Hidden on small tablets, shown on medium+ */}
        <div className="hidden lg:block space-y-3 lg:space-y-4">
          <h3 className="text-lg lg:text-xl font-bold text-white font-orbitron" data-aos="fade-right" data-aos-delay="500">
            What Players Say
          </h3>
          <div className="space-y-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-blue-500/10 rounded-xl p-3 lg:p-4 border border-blue-500/20"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-delay={550 + (index * 100)}
              >
                <p className="text-gray-200 text-sm italic">"{testimonial.text}"</p>
                <div className="mt-2">
                  <div className="text-blue-300 font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats - Always visible */}
      <div 
        className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-gray-700/30"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="700"
      >
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className="text-center group cursor-pointer"
          >
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron group-hover:scale-110 transition-transform duration-200">
              {stat.value}
            </div>
            <div className={`${stat.color} text-xs sm:text-sm group-hover:scale-105 transition-transform duration-200`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}