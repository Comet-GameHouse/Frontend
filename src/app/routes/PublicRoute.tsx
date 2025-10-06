import { Navigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { ROUTES } from '@constants';
import type { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
  restricted?: boolean; // If true, redirect to dashboard when user is authenticated
}

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
