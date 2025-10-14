import type { AccountAction } from './types';
import { AccountActionCard } from './AccountActionCard';

interface AccountActionsProps {
  actions: AccountAction[];
}

export const AccountActions = ({ actions }: AccountActionsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {actions.map((action, index) => (
        <AccountActionCard key={action.id} action={action} index={index} />
      ))}
    </div>
  );
};

export type { AccountAction } from './types';
