import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NotificationOption } from './types';
import type { NotificationSettings as NotificationSettingsType } from './types';
import { Card } from '@components';

interface NotificationToggleCardProps {
  option: NotificationOption;
  settings: NotificationSettingsType;
  onToggle: (key: keyof NotificationSettingsType) => void;
  index: number;
}

export const NotificationToggleCard = ({
  option,
  settings,
  onToggle,
  index,
}: NotificationToggleCardProps) => {
  const getColorClass = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500',
      green: 'from-green-500 to-emerald-500',
      yellow: 'from-yellow-500 to-amber-500',
      indigo: 'from-indigo-500 to-blue-500',
      pink: 'from-pink-500 to-rose-500',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card
      variant="static-paper"
      className="sm:p-6"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${getColorClass(option.color)} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
          >
            <FontAwesomeIcon icon={option.icon} className="text-white text-base" />
          </div>
          <div>
            <h4 className="text-white font-bold font-orbitron text-base sm:text-lg">
              {option.label}
            </h4>
            <p className="text-gray-400 text-sm sm:text-base">
              {option.description}
            </p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings[option.key]}
            onChange={() => onToggle(option.key)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
      </div>
    </Card>
  );
};