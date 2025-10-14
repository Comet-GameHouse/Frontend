interface GamesCellProps {
  gamesPlayed: number;
}

export const GamesCell = ({ gamesPlayed }: GamesCellProps) => {
  return (
    <div className="col-span-2 text-center">
      <div className="text-white font-bold text-sm">{gamesPlayed}</div>
      <div className="text-gray-400 text-xs">games</div>
    </div>
  );
};