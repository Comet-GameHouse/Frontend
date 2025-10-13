import { Card } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MissionVision = () => {
  const values = [
    {
      icon: 'rocket',
      title: 'Our Mission',
      description:
        'To create the most engaging and accessible gaming platform where players of all skill levels can compete, connect, and create unforgettable memories.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'eye',
      title: 'Our Vision',
      description:
        'To be the leading destination for competitive gaming, fostering a global community where every player can achieve their gaming aspirations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'heart',
      title: 'Our Values',
      description:
        'We believe in fair play, innovation, community, and creating gaming experiences that bring people together across the world.',
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16 sm:mb-20 lg:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {values.map((value, index) => (
          <Card
            key={value.title}
            variant="static-feature"
            className="p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              <FontAwesomeIcon
                icon={value.icon as IconProp}
                className="text-white text-2xl"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-4">
              {value.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {value.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
