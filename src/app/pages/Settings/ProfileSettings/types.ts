export interface UserProfile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatar: string;
  joinDate: string;
  status: 'online' | 'away' | 'offline';
}
