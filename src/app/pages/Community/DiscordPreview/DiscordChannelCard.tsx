import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { DiscordChannel } from './types';
import { Card } from '@components';

interface DiscordChannelCardProp {
  channel: DiscordChannel;
  index: number;
}

export const DiscordChannelCard = ({
  channel,
  index,
}: DiscordChannelCardProp) => {
  return (
    <Card
      variant="static-paper"
      data-aos="fade-right"
      data-aos-delay={300 + (index + 1) * 50}
    >
      <FontAwesomeIcon
        icon={channel.type === 'voice' ? 'volume-up' : 'hashtag'}
        className={`text-sm ${channel.unread ? 'text-white' : 'text-gray-400'}`}
      />
      <span
        className={`flex-1 text-sm ${
          channel.unread ? 'text-white font-medium' : 'text-gray-400'
        }`}
      >
        {channel.name}
      </span>
      {channel.members && (
        <span className="text-gray-500 text-xs">
          {channel.members.toLocaleString()}
        </span>
      )}
    </Card>
  );
};
