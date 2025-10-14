interface LevelCellProps {
  level: number;
}

export const LevelCell = ({ level }: LevelCellProps) => {
  return (
    <div className="col-span-1 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto">
        {level}
      </div>
    </div>
  );
};