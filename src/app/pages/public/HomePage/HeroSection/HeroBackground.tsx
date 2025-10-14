export const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
    </div>
  );
};