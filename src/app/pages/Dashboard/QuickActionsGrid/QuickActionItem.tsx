import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { QuickAction } from './types';
import { useNavigate } from 'react-router-dom';

interface QuickActionItemProps {
  action: QuickAction;
  index: number;
}

export const QuickActionItem = ({ action, index }: QuickActionItemProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(action.path)}
      className={`bg-gradient-to-r ${action.color} rounded-xl p-4 text-white text-left hover:scale-105 transition-all duration-300 group`}
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-delay={index * 100}
    >
      <FontAwesomeIcon
        icon={action.icon}
        className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300"
      />
      <h3 className="font-bold text-lg mb-1">{action.label}</h3>
      <p className="text-white/80 text-sm h-10">{action.description}</p>
    </button>
  );
};
