import { CommunityPlatformCard } from './CommunityPlatformCard';
import { communityPlatforms } from './data';

export const CommunityPlatforms = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Join Our Platforms
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {communityPlatforms.map((platform, index) => (
          <CommunityPlatformCard
            key={index}
            platform={platform}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
