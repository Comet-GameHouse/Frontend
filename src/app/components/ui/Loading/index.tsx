import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingSpinner } from './LoadingSpinner';
import { LoadingDots } from './LoadingDots';

interface LoadingProps {
  type?: 'spinner' | 'dots' | 'page' | 'card';
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  subMessage?: string;
  showProgress?: boolean;
  className?: string;
}

export const Loading = ({ 
  type = 'page', 
  size = 'md', 
  message, 
  subMessage, 
  showProgress = false,
  className = '' 
}: LoadingProps) => {
  // Default messages based on type
  const defaultMessages = {
    page: 'Loading...',
    card: 'Loading content...',
    spinner: '',
    dots: ''
  };

  const finalMessage = message || defaultMessages[type];

  if (type === 'spinner') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <LoadingSpinner size={size} />
        {finalMessage && (
          <p className="text-gray-400 text-sm mt-2">{finalMessage}</p>
        )}
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <LoadingDots />
        {finalMessage && (
          <p className="text-gray-400 text-sm mt-2">{finalMessage}</p>
        )}
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 ${className}`}>
        <div className="flex items-center justify-center space-x-3">
          <LoadingSpinner size="sm" />
          <div>
            <p className="text-white font-medium">{finalMessage}</p>
            {subMessage && (
              <p className="text-gray-400 text-sm">{subMessage}</p>
            )}
          </div>
        </div>
        {showProgress && (
          <div className="mt-4 w-full bg-gray-700/50 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 rounded-full animate-pulse"
              style={{ width: '60%' }}
            ></div>
          </div>
        )}
      </div>
    );
  }

  // Default page loading
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10 flex items-center justify-center ${className}`}>
      <div className="text-center" data-aos="zoom-in" data-aos-duration="600">
        {/* Animated Logo/Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
            <FontAwesomeIcon icon="gamepad" className="text-white text-2xl" />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-6 flex justify-center">
          <LoadingSpinner size="lg" />
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white font-orbitron">
            {finalMessage}
          </h2>
          {subMessage && (
            <p className="text-gray-400 text-lg">
              {subMessage}
            </p>
          )}
        </div>

        {/* Animated Dots */}
        <div className="mt-6 flex justify-center">
          <LoadingDots />
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse"
                style={{ width: '60%' }}
              ></div>
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Loading content...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};