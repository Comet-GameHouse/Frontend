export interface TimeFrameStats {
  label: string;
  value: string;
  change: number;
  description?: string;
}

export interface TimeFrameStatsContainerProps {
  stats: TimeFrameStats[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
}