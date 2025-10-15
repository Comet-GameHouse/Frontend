import { ROUTES } from '@constants';
import { MainLayout, AuthLayout, GameLayout } from '@layouts';
import {
  HomePage,
  SignInPage,
  SignUpPage,
  DashboardPage,
  ShopPage,
  LeaderboardPage,
  ProfilePage,
  NotFoundPage,
  CommunityPage,
  GamesPage,
  SettingsPage,
  TermsPage,
  PrivacyPage,
  ContactPage,
  SupportPage,
  StatusPage,
  BugsPage,
  FeedbackPage,
  HelpPage,
  FriendsPage,
  NotificationsPage,
  TournamentsPage,
  TournamentDetailsPage,
  AchievementsPage,
  AboutUsPage,
  GameDetailsPage,
  RoomDetailsPage,
  Test,
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
        path: 'test',
        element: <Test />,
      },
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUsPage />,
      },
      {
        path: ROUTES.TERMS,
        element: <TermsPage />,
      },
      {
        path: ROUTES.PRIVACY,
        element: <PrivacyPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
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
        element: <SupportPage />,
      },
      {
        path: ROUTES.HELP.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <HelpPage />,
      },
      {
        path: ROUTES.STATUS.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <StatusPage />,
      },
      {
        path: ROUTES.BUGS.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <BugsPage />,
      },
      {
        path: ROUTES.FEEDBACK.replace(`${ROUTES.SUPPORT}/`, ''),
        element: <FeedbackPage />,
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
        element: <CommunityPage />,
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
        element: <SignInPage />,
      },
      {
        path: ROUTES.SIGN_UP.replace(`${ROUTES.AUTH}/`, ''),
        element: <SignUpPage />,
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
        element: <DashboardPage />,
      },
      {
        path: ROUTES.GAMES.replace(`${ROUTES.APP}/`, ''),
        element: <GamesPage />,
      },
      {
        path: ROUTES.SHOP.replace(`${ROUTES.APP}/`, ''),
        element: <ShopPage />,
      },
      {
        path: ROUTES.LEADERBOARD.replace(`${ROUTES.APP}/`, ''),
        element: <LeaderboardPage />,
      },
      {
        path: ROUTES.MY_PROFILE.replace(`${ROUTES.APP}/`, ''),
        element: <ProfilePage />,
      },
      {
        path: ROUTES.SETTINGS.replace(`${ROUTES.APP}/`, ''),
        element: <SettingsPage />,
      },
      {
        path: ROUTES.FRIENDS.replace(`${ROUTES.APP}/`, ''),
        element: <FriendsPage />,
      },
      {
        path: ROUTES.NOTIFICATIONS.replace(`${ROUTES.APP}/`, ''),
        element: <NotificationsPage />,
      },
      {
        path: ROUTES.TOURNAMENTS.replace(`${ROUTES.APP}/`, ''),
        element: <TournamentsPage />,
      },
      {
        path: ROUTES.TOURNAMENT_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <TournamentDetailsPage />,
      },
      {
        path: ROUTES.ACHIEVEMENTS.replace(`${ROUTES.APP}/`, ''),
        element: <AchievementsPage />,
      },
      {
        path: ROUTES.GAME_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <GameDetailsPage />,
      },
      {
        path: ROUTES.ROOM_DETAILS.replace(`${ROUTES.APP}/`, ''),
        element: <RoomDetailsPage />,
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
      // {
      //   path: ROUTES.GAME_LOBBY.replace(`${ROUTES.GAME_PREFIX}/`, ''),
      //   element: <GameLobby />,
      // },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <MainLayout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
