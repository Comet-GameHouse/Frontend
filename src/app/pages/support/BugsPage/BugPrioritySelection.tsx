import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bugPriorities } from './data';

interface Props {
  selectedPriority: string;
  onPrioritySelect: (priorityId: string) => void;
}

export const BugPrioritySelection = ({ selectedPriority, onPrioritySelect }: Props) => {
  return (
    <div>
      <label className="block text-white text-sm font-semibold mb-4">
        Priority Level *
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {bugPriorities.map((priority) => (
          <button
            key={priority.id}
            type="button"
            onClick={() => onPrioritySelect(priority.id)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
              selectedPriority === priority.id
                ? `bg-${priority.color}-500/20 border-${priority.color}-500/50 scale-[1.02]`
                : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-500/30 hover:bg-gray-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-${priority.color}-400 font-semibold text-sm`}>
                {priority.name}
              </span>
              <FontAwesomeIcon 
                icon="circle" 
                className={`text-${priority.color}-400 text-xs`}
              />
            </div>
            <p className="text-gray-400 text-xs mb-2">
              {priority.description}
            </p>
            <div className="text-gray-500 text-xs">
              Response: {priority.responseTime}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};