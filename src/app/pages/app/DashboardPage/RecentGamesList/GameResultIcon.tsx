import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GameResultIconProps {
  result: 'win' | 'loss' | 'draw';
}

export const GameResultIcon = ({ result }: GameResultIconProps) => {
  const getResultColor = (result: string) => {
    switch (result) {
      case 'win': return 'text-green-400';
      case 'loss': return 'text-red-400';
      case 'draw': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getResultIcon = (result: string) => {
    switch (result) {
      case 'win': return 'trophy';
      case 'loss': return 'times';
      case 'draw': return 'minus';
      default: return 'question';
    }
  };

  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getResultColor(result)} bg-gray-600/50`}>
      <FontAwesomeIcon icon={getResultIcon(result)} className="w-4 h-4" />
    </div>
  );
};