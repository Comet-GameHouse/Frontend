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
  Privacy,
  Contact,
  Support,
  Status,
  Bugs,
  Feedback,
  Help,
  Friends,
  Notifications,
  Tournaments,
  TournamentDetails,
  Achievements,
  AboutUs,
  GameDetails,
  RoomDetail,
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
      {
        path: ROUTES.PRIVACY,
        element: <Privacy />,
      },
    ],
  },
  {
    path: ROUTES.SUPPORT,
    element: (
      <PublicRoute>
        <MainLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: '',
        element: <Support />,
      },
      {
        path: ROUTES.CONTACT.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <Contact />,
      },
      {
        path: ROUTES.STATUS.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <Status />,
      },
      {
        path: ROUTES.BUGS.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <Bugs />,
      },
      {
        path: ROUTES.FEEDBACK.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <Feedback />,
      },
      {
        path: ROUTES.HELP.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <Help />,
      },
      {
        path: ROUTES.ABOUT_US.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <AboutUs />,
      },
    ],
  },
  {
    path: ROUTES.COMMUNITY,
    element: (
      <PublicRoute>
        <MainLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: '',
        element: <Community />,
      },
      // {
      //   path: ROUTES.FORUMS.replace(`${ROUTES.COMMUNITY}/`, ''),
      //   element: <Forums />,
      // },
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
        path: ROUTES.MY_PROFILE.replace(`${ROUTES.APP}/`, ''),
        element: <Profile />,
      },
      {
        path: ROUTES.SETTINGS.replace(`${ROUTES.APP}/`, ''),
        element: <Settings />,
      },
      {
        path: ROUTES.FRIENDS.replace(`${ROUTES.APP}/`, ''),
        element: <Friends />,
      },
      {
        path: ROUTES.NOTIFICATIONS.replace(`${ROUTES.APP}/`, ''),
        element: <Notifications />,
      },
      {
        path: ROUTES.TOURNAMENTS.replace(`${ROUTES.APP}/`, ''),
        element: <Tournaments />,
      },
      {
        path: ROUTES.TOURNAMENT_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <TournamentDetails />,
      },
      {
        path: ROUTES.ACHIEVEMENTS.replace(`${ROUTES.APP}/`, ''),
        element: <Achievements />,
      },
      {
        path: ROUTES.GAME_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <GameDetails />,
      },
      {
        path: ROUTES.ROOM_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <RoomDetail />,
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
