import type { ProfileTimelineEvent } from './types';
import { TimelineEvent } from './TimelineEvent';

interface ProfileTimelineProps {
  events: ProfileTimelineEvent[];
}

export const ProfileTimeline = ({ events }: ProfileTimelineProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="text-xl font-bold text-white font-orbitron mb-6">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {events.map((event, index) => (
          <TimelineEvent key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};