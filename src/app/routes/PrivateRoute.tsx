import { Navigate } from 'react-router-dom';
import { useAuth } from '@contexts';
import { ROUTES } from '@constants';
import { LoadingSpinner } from '@components';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return <>{children}</>;
};
