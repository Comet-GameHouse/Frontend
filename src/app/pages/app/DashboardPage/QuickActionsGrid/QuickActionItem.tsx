import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { QuickAction } from './types';
import { useNavigate } from 'react-router-dom';
import { Card } from '@components';

interface QuickActionItemProps {
  action: QuickAction;
  index: number;
}

export const QuickActionItem = ({ action, index }: QuickActionItemProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(action.path)}
      variant="clickable"
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
    </Card>
  );
};
