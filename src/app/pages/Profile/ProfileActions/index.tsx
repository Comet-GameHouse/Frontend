import type { UserProfile } from './types';
import { ProfileActionSection } from './ProfileActionSection';

interface ProfileActionsProps {
  profile: UserProfile;
  onAction: (action: string) => void;
}

export const ProfileActions = ({ profile, onAction }: ProfileActionsProps) => {
  if (profile.isCurrentUser) {
    return (
      <ProfileActionSection
        title="Profile Management"
        icon="user-cog"
        actions={[
          {
            label: 'Customize Profile',
            icon: 'edit',
            variant: 'primary',
            action: 'EDIT_PROFILE'
          },
          {
            label: 'Change Theme',
            icon: 'palette',
            variant: 'secondary',
            action: 'CUSTOMIZE'
          },
          {
            label: 'Share Profile',
            icon: 'share-alt',
            variant: 'secondary',
            action: 'SHARE'
          }
        ]}
        onAction={onAction}
      />
    );
  }

  return (
    <ProfileActionSection
      title="Social Actions"
      icon="users"
      actions={[
        {
          label: profile.isFriend ? 'Remove Friend' : 'Add Friend',
          icon: profile.isFriend ? 'user-minus' : 'user-plus',
          variant: profile.isFriend ? 'secondary' : 'primary',
          action: profile.isFriend ? 'REMOVE_FRIEND' : 'ADD_FRIEND'
        },
        {
          label: 'Send Message',
          icon: 'comment',
          variant: 'secondary',
          action: 'SEND_MESSAGE'
        },
        {
          label: 'Challenge to Game',
          icon: 'gamepad',
          variant: 'secondary',
          action: 'CHALLENGE'
        },
        {
          label: 'Block User',
          icon: 'ban',
          variant: 'danger',
          action: 'BLOCK'
        }
      ]}
      onAction={onAction}
    />
  );
};