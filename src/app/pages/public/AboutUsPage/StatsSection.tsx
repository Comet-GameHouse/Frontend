import { Card } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StatsSection = () => {
  const stats = [
    {
      value: '1.2M+',
      label: 'Active Players',
      description: 'Join our growing community',
      icon: 'users',
      color: 'text-blue-400',
    },
    {
      value: '50+',
      label: 'Games Available',
      description: 'From casual to competitive',
      icon: 'gamepad',
      color: 'text-green-400',
    },
    {
      value: '24/7',
      label: 'Live Support',
      description: 'Always here to help',
      icon: 'headset',
      color: 'text-purple-400',
    },
    {
      value: '150+',
      label: 'Countries',
      description: 'Global gaming community',
      icon: 'globe',
      color: 'text-yellow-400',
    },
    {
      value: '10M+',
      label: 'Matches Played',
      description: 'And counting every day',
      icon: 'trophy',
      color: 'text-red-400',
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable gaming experience',
      icon: 'server',
      color: 'text-cyan-400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-4"
          data-aos="fade-up"
        >
          By The Numbers
        </h2>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Our journey in numbers - see how we're growing and making an impact in
          the gaming world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            variant="static-feature"
            className="p-6 text-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className={`text-3xl sm:text-4xl font-bold font-orbitron mb-2 ${stat.color}`}
            >
              {stat.value}
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FontAwesomeIcon
                icon={stat.icon as IconProp}
                className={stat.color}
              />
              <h3 className="text-white font-semibold text-lg">{stat.label}</h3>
            </div>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
