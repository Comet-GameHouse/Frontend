import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CommunityEvent } from './types';
import { Button, Card } from '@components';

interface CommunityEventCardProp {
  event: CommunityEvent;
  index: number;
}

export const CommunityEventCard = ({
  event,
  index,
}: CommunityEventCardProp) => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'tournament':
        return 'trophy';
      case 'meetup':
        return 'users';
      case 'contest':
        return 'palette';
      case 'stream':
        return 'video';
      default:
        return 'calendar';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'text-blue-400 bg-blue-400/20';
      case 'live':
        return 'text-green-400 bg-green-400/20';
      case 'completed':
        return 'text-gray-400 bg-gray-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <Card
      variant="static-feature"
      data-aos="fade-up"
      data-aos-delay={400 + (index + 1) * 50}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon
              icon={getEventIcon(event.type)}
              className="text-white text-lg"
            />
          </div>
          <div>
            <h3 className="text-white font-orbitron text-lg font-bold">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
              >
                {event.status}
              </span>
              <span className="text-gray-400 text-xs">
                {event.participants} participants
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {event.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-400">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon="calendar" className="text-xs" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FontAwesomeIcon icon="clock" className="text-xs" />
            <span>{event.time}</span>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-500"
        >
          {event.status === 'live' ? 'Join Now' : 'Learn More'}
        </Button>
      </div>
    </Card>
  );
};
