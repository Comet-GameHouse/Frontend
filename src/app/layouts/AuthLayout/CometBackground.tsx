import { STAR_COUNT } from './data';

export const CometBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(STAR_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      {/* Floating Gradient Orbs */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  );
};
