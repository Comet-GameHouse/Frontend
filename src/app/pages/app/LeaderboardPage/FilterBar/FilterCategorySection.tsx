import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterOptionButton } from './FilterOptionButton';
import type { FilterCategory } from './types';

interface FilterCategorySectionProps {
  category: FilterCategory;
  selectedValue: string;
  onSelect: (value: string) => void;
  index: number;
}

export const FilterCategorySection = ({
  category,
  selectedValue,
  onSelect,
  index,
}: FilterCategorySectionProps) => {
  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 sm:p-6"
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 50}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon
            icon={category.icon}
            className="text-white text-sm"
          />
        </div>
        <div>
          <h3 className="text-white font-orbitron text-lg font-bold">
            {category.label}
          </h3>
          <p className="text-gray-400 text-sm">
            Choose your {category.label.toLowerCase()} filter
          </p>
        </div>
      </div>

      {/* Filter Options */}
      <div className="flex flex-col md:flex-row flex-wrap gap-2 sm:gap-3">
        {category.options.map((option, optionIndex) => (
          <FilterOptionButton
            key={option.value}
            option={option}
            isSelected={selectedValue === option.value}
            onSelect={() => onSelect(option.value)}
            delay={(index + 1) * 50 + (optionIndex + 1) * 50}
          />
        ))}
      </div>
    </div>
  );
};
