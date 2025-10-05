import { Navigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { ROUTES } from '@constants';
import { LoadingSpinner } from '@components';

interface PublicRouteProps {
  children: React.ReactNode;
  restricted?: boolean; // If true, redirect to dashboard when user is authenticated
}

export const PublicRoute = ({
  children,
  restricted = false,
}: PublicRouteProps) => {
  const { user, isLoading } = useAuth();
  console.log(user, isLoading)
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (user && restricted) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <>{children}</>;
};
