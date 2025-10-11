import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bugCategories } from './data';

interface Props {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const BugCategorySelection = ({ selectedCategory, onCategorySelect }: Props) => {
  return (
    <div className="mb-8">
      <label className="block text-white text-sm font-semibold mb-4">
        Category *
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bugCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategorySelect(category.id)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
              selectedCategory === category.id
                ? `bg-${category.color}-500/20 border-${category.color}-500/50 scale-[1.02]`
                : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-500/30 hover:bg-gray-500/10'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-${category.color}-500/20 border border-${category.color}-500/30 flex items-center justify-center`}>
                <FontAwesomeIcon 
                  icon={category.icon} 
                  className={`text-${category.color}-400 text-sm`}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {category.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};