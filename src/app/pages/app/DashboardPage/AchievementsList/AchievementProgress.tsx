import { ProgressBar } from '@components';

interface AchievementProgressProps {
  progress: number;
  total: number;
  reward: number;
}

export const AchievementProgress = ({
  progress,
  total,
  reward,
}: AchievementProgressProps) => {
  return (
    <div className="flex-1">
      <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
        <ProgressBar progress={progress} total={total} />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>
          {progress}/{total}
        </span>
        <span className="text-yellow-400">+{reward} coins</span>
      </div>
    </div>
  );
};
