interface ScoreCellProps {
  score: number;
}

export const ScoreCell = ({ score }: ScoreCellProps) => {
  return (
    <div className="col-span-2 text-center">
      <div className="text-white font-bold text-lg font-orbitron">
        {score.toLocaleString()}
      </div>
      <div className="text-gray-400 text-xs">points</div>
    </div>
  );
};