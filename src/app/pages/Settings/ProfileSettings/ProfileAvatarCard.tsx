import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { UserProfile } from './types';

interface ProfileAvatarCardProps {
  profile: UserProfile;
}

export const ProfileAvatarCard = ({ profile }: ProfileAvatarCardProps) => {
  return (
    <div className="flex items-center space-x-4 sm:space-x-6" data-aos="fade-up">
      <div className="relative">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-500/50"
        />
        <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-1 sm:p-2 rounded-full text-xs transition-all duration-300 hover:shadow-lg cursor-pointer shadow-md shadow-blue-500">
          <FontAwesomeIcon icon="camera" className="text-xs" />
        </button>
      </div>
      <div>
        <h4 className="text-white font-bold font-orbitron text-lg sm:text-xl">{profile.username}</h4>
        <p className="text-gray-400 text-sm sm:text-base">
          Member since {new Date(profile.joinDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};