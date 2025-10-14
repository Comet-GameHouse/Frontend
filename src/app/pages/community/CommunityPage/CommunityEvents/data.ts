import type { CommunityEvent } from './types';

export const communityEvents: CommunityEvent[] = [
  {
    id: '1',
    title: 'Weekly Space Raiders Tournament',
    description:
      'Compete in our weekly Space Raiders championship with amazing prizes!',
    date: 'Every Saturday',
    time: '18:00 UTC',
    type: 'tournament',
    participants: 247,
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Developer Q&A Session',
    description:
      'Chat with the developers about upcoming features and provide feedback.',
    date: 'March 15, 2024',
    time: '20:00 UTC',
    type: 'meetup',
    participants: 89,
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Cosmic Art Contest',
    description:
      'Show off your artistic skills with Comet GameHouse themed artwork.',
    date: 'March 10-20, 2024',
    time: 'All Day',
    type: 'contest',
    participants: 156,
    status: 'live',
  },
  {
    id: '4',
    title: 'Pro Player Stream',
    description: 'Watch CometMaster showcase advanced strategies and gameplay.',
    date: 'March 8, 2024',
    time: '19:00 UTC',
    type: 'stream',
    participants: 523,
    status: 'completed',
  },
];
