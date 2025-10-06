interface ProgressBarProps {
  progress: number;
  total: number;
  color?: string;
}

export const ProgressBar = ({
  progress,
  total,
  color = 'from-blue-500 to-cyan-500',
}: ProgressBarProps) => {
  const percentage = (progress / total) * 100;

  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
