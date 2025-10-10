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
  Community,
  Games,
  Settings,
  Terms,
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
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.TERMS,
        element: <Terms />,
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
        path: ROUTES.GAMES.replace(`${ROUTES.APP}/`, ''),
        element: <Games />,
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
        path: ROUTES.COMMUNITY.replace(`${ROUTES.APP}/`, ''),
        element: <Community />,
      },
      {
        path: ROUTES.MY_PROFILE.replace(`${ROUTES.APP}/`, ''),
        element: <Profile />,
      },
      {
        path: ROUTES.SETTINGS.replace(`${ROUTES.APP}/`, ''),
        element: <Settings />,
      },
    ],
  },
  {
    path: ROUTES.GAME_PREFIX,
    element: (
      <PrivateRoute>
        <GameLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.GAME_LOBBY.replace(`${ROUTES.GAME_PREFIX}/`, ''),
        element: <GameLobby />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
