import { HomeSectionHeader } from '@components';

import { QUICK_ACTIONS } from './data';
import { QuickActionCard } from './QuickActionCard';

export const QuickActions = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <HomeSectionHeader
        title="Quick Actions"
        subtitle="Get started instantly with these options"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {QUICK_ACTIONS.map((action, index) => (
          <QuickActionCard key={action.text} action={action} index={index} />
        ))}
      </div>
    </section>
  );
};
