interface WinRateCellProps {
  winRate: number;
}

export const WinRateCell = ({ winRate }: WinRateCellProps) => {
  return (
    <div className="col-span-2 text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="text-white font-bold text-sm">{winRate}%</span>
      </div>
      <div className="w-16 mx-auto bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ${
            winRate >= 70 ? 'bg-green-500' : 
            winRate >= 50 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${winRate}%` }}
        ></div>
      </div>
    </div>
  );
};