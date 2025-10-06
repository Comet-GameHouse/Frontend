import { Navigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { ROUTES } from '@constants';

import type { PublicRouteProps } from './types';

export const PublicRoute = ({
  children,
  restricted = false,
}: PublicRouteProps) => {
  const { user } = useAuth();

  if (user && restricted) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <>{children}</>;
};
