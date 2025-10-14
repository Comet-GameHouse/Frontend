import { SettingsSection } from './SettingsSection';
import { ProfileSettings } from './ProfileSettings';
import { NotificationSettings } from './NotificationSettings';
import { PrivacySettings } from './PrivacySettings';
import { AccountActions } from './AccountActions';

import type { AccountAction } from './AccountActions';
import type { PrivacySettingsType } from './PrivacySettings';
import type { NotificationSettingsType } from './NotificationSettings';
import type { UserProfile } from './ProfileSettings';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SettingsContentProps {
  activeSection: string;
  userProfile: UserProfile;
  notificationSettings: NotificationSettingsType;
  privacySettings: PrivacySettingsType;
  accountActions: AccountAction[];
  onProfileUpdate: (profile: UserProfile) => void;
  onNotificationSettingsChange: (settings: NotificationSettingsType) => void;
  onPrivacySettingsChange: (settings: PrivacySettingsType) => void;
}

export const SettingsContent = ({
  activeSection,
  userProfile,
  notificationSettings,
  privacySettings,
  accountActions,
  onProfileUpdate,
  onNotificationSettingsChange,
  onPrivacySettingsChange,
}: SettingsContentProps) => {
  const sectionConfigs = [
    {
      id: 'profile',
      title: 'Profile Settings',
      description: 'Manage your personal information and profile details',
      icon: 'user-edit',
      component: (
        <ProfileSettings
          profile={userProfile}
          onProfileUpdate={onProfileUpdate}
        />
      ),
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      description: 'Control how and when you receive notifications',
      icon: 'bell',
      component: (
        <NotificationSettings
          settings={notificationSettings}
          onSettingsChange={onNotificationSettingsChange}
        />
      ),
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      description: 'Manage your privacy settings and security preferences',
      icon: 'shield-alt',
      component: (
        <PrivacySettings
          settings={privacySettings}
          onSettingsChange={onPrivacySettingsChange}
        />
      ),
    },
    {
      id: 'account',
      title: 'Account Actions',
      description: 'Important actions for your account',
      icon: 'cog',
      component: <AccountActions actions={accountActions} />,
    },
  ];

  return (
    <div className="flex-1">
      {sectionConfigs.map((section) =>
        activeSection === section.id ? (
          <SettingsSection
            key={section.id}
            title={section.title}
            description={section.description}
            icon={section.icon as IconProp}
          >
            {section.component}
          </SettingsSection>
        ) : null
      )}
    </div>
  );
};
