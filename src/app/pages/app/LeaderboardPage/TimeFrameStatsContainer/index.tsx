import { TimeFrameStats } from './TimeFrameStats';
import type { TimeFrameStats as TimeFrameStatsType } from './types';

interface TimeFrameStatsContainerProps {
  stats: TimeFrameStatsType[];
}

export const TimeFrameStatsContainer = ({
  stats,
}: TimeFrameStatsContainerProps) => {
  return <TimeFrameStats stats={stats} />;
};
