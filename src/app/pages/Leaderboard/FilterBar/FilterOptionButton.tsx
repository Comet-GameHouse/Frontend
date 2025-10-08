import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FilterOptionButtonProps {
  option: {
    value: string;
    label: string;
    count?: number;
  };
  isSelected: boolean;
  onSelect: () => void;
  delay: number;
}

export const FilterOptionButton = ({
  option,
  isSelected,
  onSelect,
  delay,
}: FilterOptionButtonProps) => {
  return (
    <Card
      variant="clickable"
      className="!py-2 space-x-1 text-sm"
      clicked={isSelected}
      onClick={onSelect}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <span className="font-orbitron font-medium">{option.label}</span>
      {option.count !== undefined && (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isSelected
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700/50 text-gray-400'
          }`}
        >
          {option.count >= 1000
            ? `${(option.count / 1000).toFixed(1)}K`
            : option.count}
        </span>
      )}
      {isSelected && (
        <FontAwesomeIcon icon="check" className="text-blue-400 text-sm" />
      )}
    </Card>
  );
};
