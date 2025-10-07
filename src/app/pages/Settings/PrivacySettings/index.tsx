import type { PrivacySettings as PrivacySettingsType } from './types';
import { privacyOptions } from './data';
import { PrivacyToggleCard } from './PrivacyToggleCard';
import { PrivacySelectCard } from './PrivacySelectCard';

interface PrivacySettingsProps {
  settings: PrivacySettingsType;
  onSettingsChange: (settings: PrivacySettingsType) => void;
}

export const PrivacySettings = ({
  settings,
  onSettingsChange,
}: PrivacySettingsProps) => {
  const updateSetting = <K extends keyof PrivacySettingsType>(
    key: K,
    value: PrivacySettingsType[K]
  ) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {privacyOptions.map((option, index) => {
        if (option.type === 'toggle') {
          return (
            <PrivacyToggleCard
              key={option.key}
              option={option}
              settings={settings}
              onUpdate={(key, value) => updateSetting(key, value)}
              index={index}
            />
          );
        } else {
          return (
            <PrivacySelectCard
              key={option.key}
              option={option}
              settings={settings}
              onUpdate={(key, value) => updateSetting(key, value)}
              index={index}
            />
          );
        }
      })}
    </div>
  );
};

export type { PrivacySettings as PrivacySettingsType } from './types';
