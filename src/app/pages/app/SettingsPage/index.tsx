import { useState } from 'react';
import { SettingsHeader } from './SettingsHeader';
import { SettingsNavigation } from './SettingsNavigation';
import { SettingsContent } from './SettingsContent';

import type { UserProfile } from './ProfileSettings';
import type { NotificationSettingsType } from './NotificationSettings';
import type { PrivacySettingsType } from './PrivacySettings';

import {
  initialUserProfile,
  initialNotificationSettings,
  initialPrivacySettings,
  accountActions,
  navigationItems,
} from './data';

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [userProfile, setUserProfile] =
    useState<UserProfile>(initialUserProfile);
  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettingsType>(initialNotificationSettings);
  const [privacySettings, setPrivacySettings] = useState<PrivacySettingsType>(
    initialPrivacySettings
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <SettingsHeader />

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-6xl mx-auto">
          <SettingsNavigation
            navigationItems={navigationItems}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <SettingsContent
            activeSection={activeSection}
            userProfile={userProfile}
            notificationSettings={notificationSettings}
            privacySettings={privacySettings}
            accountActions={accountActions}
            onProfileUpdate={setUserProfile}
            onNotificationSettingsChange={setNotificationSettings}
            onPrivacySettingsChange={setPrivacySettings}
          />
        </div>
      </div>
    </div>
  );
};
