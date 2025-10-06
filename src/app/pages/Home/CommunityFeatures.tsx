import { COMMUNITY_FEATURES } from './data'

export const CommunityFeatures = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div 
        className="text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-3">
          Community & Features
        </h2>
        <p className="text-gray-400 text-lg">
          Connect, compete, and grow with our gaming community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COMMUNITY_FEATURES.map((feature, index) => (
          <div
            key={feature.text}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={index * 100}
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
              <span className="text-purple-400 text-lg">🌟</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {feature.text}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}