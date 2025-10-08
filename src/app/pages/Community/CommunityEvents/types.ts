export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'tournament' | 'meetup' | 'contest' | 'stream';
  participants: number;
  status: 'upcoming' | 'live' | 'completed';
  image?: string;
}
