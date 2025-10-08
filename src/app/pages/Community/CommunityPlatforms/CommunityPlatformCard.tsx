import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CommunityPlatform } from './types';
import { Button, Card } from '@components';

interface CommunityPlatformCardProp {
  platform: CommunityPlatform;
  index: number;
}

export const CommunityPlatformCard = ({
  platform,
  index,
}: CommunityPlatformCardProp) => {
  return (
    <Card
      variant="static-feature"
      className="p-6 sm:p-8"
      data-aos="fade-up"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl"
            style={{ backgroundColor: platform.color }}
          >
            <FontAwesomeIcon icon={platform.icon} />
          </div>
          <div>
            <h3 className="text-white font-orbitron text-xl font-bold">
              {platform.name}
            </h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-green-400 text-sm">
                {platform.online} online
              </span>
              <span className="text-gray-400 text-sm">
                {platform.members} members
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
        {platform.description}
      </p>

      <div className="space-y-3 mb-6">
        {platform.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex items-center gap-3 text-gray-400 text-sm"
            data-aos="fade-right"
            data-aos-delay={featureIndex * 50}
          >
            <FontAwesomeIcon icon="check" className="text-green-400 text-xs" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={() => window.open(platform.link, '_blank')}
        className="w-full justify-center"
      >
        <FontAwesomeIcon icon={platform.icon} className="mr-2" />
        Join {platform.name}
      </Button>
    </Card>
  );
};
