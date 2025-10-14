export interface Friend {
  id: number;
  username: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
  level: number;
  currentGame?: string;
}
