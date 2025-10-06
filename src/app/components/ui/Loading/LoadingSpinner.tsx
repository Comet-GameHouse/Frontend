import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      <FontAwesomeIcon 
        icon="gamepad" 
        className={`text-blue-400 ${iconSizes[size]} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
};