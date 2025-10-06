import { ROUTES } from '@constants';
import { MainLayout, AuthLayout, GameLayout } from '@layouts';
import {
  Home,
  SignIn,
  SignUp,
  Dashboard,
  GameLobby,
  Shop,
  Leaderboard,
  Profile,
  NotFound,
} from '@pages';
import { PrivateRoute, PublicRoute } from './routes';

export const routesConfig = [
  {
    path: ROUTES.HOME,
    element: (
      <PublicRoute>
        <MainLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTES.AUTH,
    element: (
      <PublicRoute restricted>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: ROUTES.SIGN_IN.replace(`${ROUTES.AUTH}/`, ''),
        element: <SignIn />,
      },
      {
        path: ROUTES.SIGN_UP.replace(`${ROUTES.AUTH}/`, ''),
        element: <SignUp />,
      },
    ],
  },
  {
    path: ROUTES.APP,
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.DASHBOARD.replace(`${ROUTES.APP}/`, ''),
        element: <Dashboard />,
      },
      {
        path: ROUTES.SHOP.replace(`${ROUTES.APP}/`, ''),
        element: <Shop />,
      },
      {
        path: ROUTES.LEADERBOARD.replace(`${ROUTES.APP}/`, ''),
        element: <Leaderboard />,
      },
      {
        path: ROUTES.PROFILE.replace(`${ROUTES.APP}/`, ''),
        element: <Profile />,
      },
    ],
  },
  {
    path: ROUTES.GAMES,
    element: (
      <PrivateRoute>
        <GameLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.GAME_LOBBY.replace(`${ROUTES.GAMES}/`, ''),
        element: <GameLobby />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
