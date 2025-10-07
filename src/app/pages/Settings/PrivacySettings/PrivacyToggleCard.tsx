import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PrivacyOption } from './types';
import type { PrivacySettings as PrivacySettingsType } from './types';
import { Card } from '@components';

interface PrivacyToggleCardProps {
  option: PrivacyOption;
  settings: PrivacySettingsType;
  onUpdate: (key: keyof PrivacySettingsType, value: boolean) => void;
  index: number;
}

export const PrivacyToggleCard = ({
  option,
  settings,
  onUpdate,
  index,
}: PrivacyToggleCardProps) => {
  return (
    <Card
      variant="static-paper"
      className="sm:p-6"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
            <FontAwesomeIcon
              icon={option.icon}
              className="text-white text-base"
            />
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
            checked={settings[option.key] as boolean}
            onChange={(e) => onUpdate(option.key, e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
        </label>
      </div>
    </Card>
  );
};
