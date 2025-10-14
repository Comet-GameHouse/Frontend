import { communityEvents } from './data';
import { CommunityEventCard } from './CommunityEventCard';

export const CommunityEvents = () => {
  return (
    <div>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron text-center mb-8 sm:mb-12"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Community Events
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mx-auto">
        {communityEvents.map((event, index) => (
          <CommunityEventCard key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};
