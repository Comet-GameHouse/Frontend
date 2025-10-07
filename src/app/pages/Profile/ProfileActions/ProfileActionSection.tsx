import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ProfileActionSectionProps {
  title: string;
  icon: IconProp;
  actions: Array<{
    label: string;
    icon: IconProp;
    variant: 'primary' | 'secondary' | 'danger';
    action: string;
  }>;
  onAction: (action: string) => void;
}

export const ProfileActionSection = ({
  title,
  icon,
  actions,
  onAction,
}: ProfileActionSectionProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <h2 className="text-xl font-bold text-white font-orbitron mb-4 flex items-center">
        <FontAwesomeIcon icon={icon} className="text-blue-400 mr-2" />
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            size="sm"
            icon={action.icon}
            onClick={() => onAction(action.action)}
            className="justify-center"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
