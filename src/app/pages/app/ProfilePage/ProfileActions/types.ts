export interface UserProfile {
  id: string;
  username: string;
  avatar: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  joinDate: string;
  status: 'online' | 'away' | 'offline';
  bio?: string;
  country?: string;
  favoriteGame?: string;
  isFriend?: boolean;
  isCurrentUser?: boolean;
  title?: string;
  clan?: string;
  rank?: string;
}
