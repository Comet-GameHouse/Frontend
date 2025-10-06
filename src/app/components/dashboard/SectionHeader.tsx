interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

export const SectionHeader = ({ title, actionText, onActionClick }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
        {title}
      </h2>
      {actionText && (
        <button 
          onClick={onActionClick}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};