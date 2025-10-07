import { QuickActionCard } from './QuickActionCard';
import { NOT_FOUND_QUICK_ACTIONS } from './data';

export const QuickActionsGrid = () => {
  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-4 sm:mb-6 text-center px-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Quick Navigation
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
        {NOT_FOUND_QUICK_ACTIONS.map((action, index) => (
          <QuickActionCard key={action.label} action={action} index={index} />
        ))}
      </div>
    </div>
  );
};
