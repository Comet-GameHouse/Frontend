import type { NotificationSettings as NotificationSettingsType } from './types';
import { notificationOptions } from './data';
import { NotificationToggleCard } from './NotificationToggleCard';

interface NotificationSettingsProps {
  settings: NotificationSettingsType;
  onSettingsChange: (settings: NotificationSettingsType) => void;
}

export const NotificationSettings = ({
  settings,
  onSettingsChange,
}: NotificationSettingsProps) => {
  const toggleSetting = (key: keyof NotificationSettingsType) => {
    onSettingsChange({
      ...settings,
      [key]: !settings[key],
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {notificationOptions.map((option, index) => (
        <NotificationToggleCard
          key={option.key}
          option={option}
          settings={settings}
          onToggle={toggleSetting}
          index={index}
        />
      ))}
    </div>
  );
};

export type { NotificationSettings as NotificationSettingsType } from './types';
