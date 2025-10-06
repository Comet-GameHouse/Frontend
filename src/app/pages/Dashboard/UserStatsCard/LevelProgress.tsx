import { ProgressBar } from '@components';

interface LevelProgressProps {
  level: number;
  experience: number;
  nextLevelExp: number;
}

export const LevelProgress = ({
  level,
  experience,
  nextLevelExp,
}: LevelProgressProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">Level {level}</span>
        <span className="text-blue-400 text-sm">
          {experience}/{nextLevelExp} XP
        </span>
      </div>
      <ProgressBar progress={experience} total={nextLevelExp} />
    </div>
  );
};
