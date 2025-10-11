import type { BugReportForm as BugReportFormType } from './types';

interface Props {
  formData: BugReportFormType;
  onInputChange: (field: keyof BugReportFormType, value: string) => void;
}

export const BugReportDetails = ({ formData, onInputChange }: Props) => {
  return (
    <div data-aos="fade-up" data-aos-delay="250">
      <h2 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">
        Tell us about the bug
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-semibold mb-2">
            Bug Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => onInputChange('title', e.target.value)}
            placeholder="Brief, descriptive title of the bug"
            className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block text-white text-sm font-semibold mb-2">
            Description *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => onInputChange('description', e.target.value)}
            placeholder="Detailed description of the bug, when it occurs, and any relevant context..."
            className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 min-h-[120px]"
            required
          />
        </div>
      </div>
    </div>
  );
};