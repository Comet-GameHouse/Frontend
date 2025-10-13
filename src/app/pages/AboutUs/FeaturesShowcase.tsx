import { Card } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FeaturesShowcase = () => {
  const features = [
    {
      icon: 'trophy',
      title: 'Competitive Tournaments',
      description:
        'Join daily, weekly, and monthly tournaments with amazing prizes and global rankings.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: 'coins',
      title: 'GameCoin Rewards',
      description:
        'Earn GameCoins by playing, winning, and completing achievements. Spend them on exclusive items.',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: 'users',
      title: 'Social Features',
      description:
        'Connect with friends, join clans, and build your gaming community with advanced social tools.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'chart-line',
      title: 'Advanced Stats',
      description:
        'Track your performance with detailed analytics, heat maps, and improvement recommendations.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'mobile',
      title: 'Cross-Platform',
      description:
        'Play seamlessly across desktop, mobile, and tablet devices with synchronized progress.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'shield-alt',
      title: 'Fair Play',
      description:
        'Advanced anti-cheat systems and dedicated moderators ensure a fair gaming environment for all.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-4"
          data-aos="fade-up"
        >
          Why Choose Comet Gamehouse?
        </h2>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          We're constantly innovating to provide the best gaming experience with
          features designed for players, by players.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            variant="static-feature"
            className="p-6 hover:scale-105 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className={`w-14 h-14 mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <FontAwesomeIcon
                icon={feature.icon as IconProp}
                className="text-white text-xl"
              />
            </div>

            <h3 className="text-xl font-bold text-white font-orbitron mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
