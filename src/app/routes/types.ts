export interface PrivateRouteProps {
  children: React.ReactNode;
}

export interface PublicRouteProps {
  children: React.ReactNode;
  restricted?: boolean; // If true, redirect to dashboard when user is authenticated
}
