import { Button, Input } from '@components';
import type { UserProfile } from './types';
import { ProfileAvatarCard } from './ProfileAvatarCard';

interface ProfileSettingsProps {
  profile: UserProfile;
  onProfileUpdate: (profile: UserProfile) => void;
}

export const ProfileSettings = ({
  profile,
  onProfileUpdate,
}: ProfileSettingsProps) => {
  const handleInputChange = (field: keyof UserProfile, value: string) => {
    onProfileUpdate({
      ...profile,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <ProfileAvatarCard profile={profile} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <Input
          label="First Name"
          icon="user"
          value={profile.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          placeholder="Enter your First Name"
        />
        <Input
          label="Last Name"
          icon="user"
          value={profile.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          placeholder="Enter your Last Name"
        />
        <Input
          label="Username"
          icon="id-badge"
          value={profile.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          placeholder="Enter your username"
        />
        <Input
          label="Email"
          type="email"
          icon="envelope-open"
          value={profile.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
        <Button variant="primary" icon="save">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export type { UserProfile } from './types';
