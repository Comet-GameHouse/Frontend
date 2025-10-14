import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RankCellProps {
  rank: number;
}

export const RankCell = ({ rank }: RankCellProps) => {
  const getRankStyles = () => {
    switch (rank) {
      case 1:
        return 'text-yellow-500 bg-yellow-500/20 border-yellow-500/50';
      case 2:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/50';
      case 3:
        return 'text-amber-700 bg-amber-700/20 border-amber-700/50';
      default:
        return 'text-white bg-gray-700/50 border-gray-600/50';
    }
  };

  return (
    <div className="col-span-1 flex justify-center">
      <div className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 ${getRankStyles()}`}>
        {rank <= 3 ? (
          <FontAwesomeIcon icon="crown" className="text-sm" />
        ) : (
          <span className="font-bold text-sm">#{rank}</span>
        )}
      </div>
    </div>
  );
};