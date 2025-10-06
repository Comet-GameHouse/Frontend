import { STATS } from './data'

export const StatsSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="text-center group"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={index * 100}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-blue-300 text-sm sm:text-base font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}