interface LoadingDotsProps {
  count?: number;
  className?: string;
}

export const LoadingDots = ({ count = 3, className = '' }: LoadingDotsProps) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
};