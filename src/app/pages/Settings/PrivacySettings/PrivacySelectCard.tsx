import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PrivacyOption } from './types';
import type { PrivacySettings as PrivacySettingsType } from './types';

interface PrivacySelectCardProps {
  option: PrivacyOption;
  settings: PrivacySettingsType;
  onUpdate: (key: keyof PrivacySettingsType, value: any) => void;
  index: number;
}

export const PrivacySelectCard = ({
  option,
  settings,
  onUpdate,
  index,
}: PrivacySelectCardProps) => {
  return (
    <div
      className="backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 sm:p-6 bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 cursor-default"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
            <FontAwesomeIcon
              icon={option.icon}
              className="text-white text-sm sm:text-base"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-bold font-orbitron text-base sm:text-lg lg:text-xl truncate">
              {option.label}
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-1">
              {option.description}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto">
          <select
            value={settings[option.key] as string}
            onChange={(e) => onUpdate(option.key, e.target.value)}
            className="w-full sm:w-48 lg:w-56 bg-gray-800/50 border border-gray-600 text-white rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-colors duration-200 hover:border-gray-500"
          >
            {option.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
