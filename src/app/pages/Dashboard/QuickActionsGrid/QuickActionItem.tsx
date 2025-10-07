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
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group text-left w-full hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-blue-500/20"
      data-aos="zoom-in"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <div
        className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center shadow-lg mb-3 group-hover:scale-105 transition-transform duration-300`}
      >
        <FontAwesomeIcon icon={action.icon} className="text-white text-base" />
      </div>
      <h3 className="font-bold text-white text-base mb-1">{action.label}</h3>
      <p className="text-gray-400 text-sm">{action.description}</p>
    </button>
  );
};
