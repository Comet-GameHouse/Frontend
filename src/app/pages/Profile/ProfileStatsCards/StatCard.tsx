import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { StatCard as StatCardType } from './types';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface StatCardProps {
  card: StatCardType;
  index: number;
}

export const StatCard = ({ card, index }: StatCardProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300 group hover:scale-[1.01] cursor-default"
      data-aos="zoom-in"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={`w-10 h-10 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center shadow-lg`}
        >
          <FontAwesomeIcon
            icon={card.icon as IconProp}
            className="text-white text-sm"
          />
        </div>
        <div className="text-gray-400 text-xs">{card.description}</div>
      </div>
      <div className="text-2xl font-bold text-white font-orbitron mb-1">
        {card.value}
      </div>
      <div className="text-gray-400 text-sm font-medium">{card.label}</div>
    </div>
  );
};
