import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routesConfig';

export const AppRouter = () => {
  const element = useRoutes(routesConfig);
  return element;
};