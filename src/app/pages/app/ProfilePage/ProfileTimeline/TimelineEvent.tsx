import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProfileTimelineEvent } from './types';
import { Card } from '@components';

interface TimelineEventProps {
  event: ProfileTimelineEvent;
  index: number;
}

export const TimelineEvent = ({ event, index }: TimelineEventProps) => {
  const getEventColor = (type: string) => {
    switch (type) {
      case 'level_up':
        return 'bg-green-500/20 text-green-400';
      case 'achievement':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'game_played':
        return 'bg-blue-500/20 text-blue-400';
      case 'tournament':
        return 'bg-purple-500/20 text-purple-400';
      case 'friend_added':
        return 'bg-cyan-500/20 text-cyan-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'level_up':
        return 'level-up-alt';
      case 'achievement':
        return 'trophy';
      case 'game_played':
        return 'gamepad';
      case 'tournament':
        return 'award';
      case 'friend_added':
        return 'user-plus';
      default:
        return 'circle';
    }
  };

  return (
    <Card
      variant="static-paper"
      className="flex items-start space-x-3 !p-3"
      data-aos="fade-left"
      data-aos-delay={400 + (index + 1) * 50}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center ${getEventColor(event.type)} transition-transform duration-300 flex-shrink-0`}
      >
        <FontAwesomeIcon icon={getEventIcon(event.type)} className="text-xs" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-white font-bold text-sm">{event.title}</h3>
        <p className="text-gray-400 text-xs mt-1">{event.description}</p>
        {event.game && (
          <div className="flex items-center space-x-1 mt-1">
            <FontAwesomeIcon icon="gamepad" className="text-blue-400 w-2 h-2" />
            <span className="text-blue-400 text-xs">{event.game}</span>
          </div>
        )}
      </div>

      <div className="text-right flex-shrink-0">
        <div className="text-gray-500 text-xs">
          {new Date(event.date).toLocaleDateString()}
        </div>
        <div className="text-gray-600 text-xs">
          {new Date(event.date).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </Card>
  );
};
