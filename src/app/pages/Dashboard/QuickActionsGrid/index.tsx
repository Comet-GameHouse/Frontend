import type { QuickAction } from './types';
import { QuickActionItem } from './QuickActionItem';
import { DashboardSectionHeader } from '@components';

interface QuickActionsGridProps {
  actions: QuickAction[];
}

export const QuickActionsGrid = ({ actions }: QuickActionsGridProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="100"
    >
      <DashboardSectionHeader title="Quick Actions" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <QuickActionItem key={action.label} action={action} index={index} />
        ))}
      </div>
    </div>
  );
};
