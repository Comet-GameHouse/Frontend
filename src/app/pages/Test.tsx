import { useState } from 'react';
import { QuickActionsGrid } from '@components';
import { Card } from '@components';
import { Button } from '@components';
import { ROUTES } from '@constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HOME_QUICK_ACTIONS = [
  {
    icon: 'play-circle',
    label: 'Quick Play',
    description: 'Instant game session',
    path: ROUTES.GAMES + '?quick-play=true',
    color: 'blue',
  },
  {
    icon: 'trophy',
    label: 'Daily Tournament',
    description: "Join today's event",
    path: ROUTES.TOURNAMENTS + '?filter=daily',
    color: 'green',
  },
  {
    icon: 'user-plus',
    label: 'Get Started',
    description: 'Create free account',
    path: ROUTES.SIGN_UP,
    color: 'yellow',
  },
  {
    icon: 'coins',
    label: 'Earn Coins',
    description: 'Play to win rewards',
    path: ROUTES.ACHIEVEMENTS,
    color: 'purple',
  },
  {
    icon: 'users',
    label: 'Find Friends',
    description: 'Connect with players',
    path: ROUTES.COMMUNITY,
    color: 'orange',
  },
  {
    icon: 'star',
    label: 'Featured Game',
    description: "Try this week's highlight",
    path: ROUTES.GAME_DETAILS + '/featured',
    color: 'indigo',
  },
];

// Mock data for different scenarios
const MOCK_QUICK_ACTIONS = {
  home: HOME_QUICK_ACTIONS,
  dashboard: [
    {
      icon: 'gamepad',
      label: 'Quick Play',
      description: 'Jump into a game',
      path: ROUTES.GAMES,
      color: 'blue',
    },
    {
      icon: 'users',
      label: 'Friends',
      description: 'Connect with players',
      path: ROUTES.FRIENDS,
      color: 'green',
    },
    {
      icon: 'trophy',
      label: 'Tournaments',
      description: 'Compete & win',
      path: ROUTES.TOURNAMENTS,
      color: 'yellow',
    },
    {
      icon: 'store',
      label: 'Shop',
      description: 'Get new items',
      path: ROUTES.SHOP,
      color: 'purple',
    },
  ],
  games: [
    {
      icon: 'trophy',
      label: 'Tournaments',
      description: 'Game competitions',
      path: ROUTES.TOURNAMENTS,
      color: 'blue',
    },
    {
      icon: 'chart-bar',
      label: 'Leaderboard',
      description: 'Top players',
      path: ROUTES.LEADERBOARD,
      color: 'green',
    },
    {
      icon: 'users',
      label: 'Community',
      description: 'Find teammates',
      path: ROUTES.COMMUNITY,
      color: 'yellow',
    },
    {
      icon: 'cog',
      label: 'Settings',
      description: 'Game preferences',
      path: ROUTES.SETTINGS,
      color: 'purple',
    },
  ],
};

export const Test = () => {
  const [currentView, setCurrentView] = useState<
    'home' | 'dashboard' | 'games'
  >('home');
  const [dataAosDelay, setDataAosDelay] = useState(100);
  const [columns, setColumns] = useState<2 | 3 | 4 | 6>(4);

  const currentActions = MOCK_QUICK_ACTIONS[currentView];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-orbitron mb-4">
            QuickActionsGrid
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beautiful, animated quick action grids for your gaming platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls Panel */}
          <Card
            padding="lg"
            rounded="xl"
            className="lg:col-span-1 bg-gray-800/50"
          >
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
                Controls
              </h2>

              <div className="space-y-6">
                {/* View Selector */}
                <div>
                  <h3 className="text-white font-semibold mb-3">View Type</h3>
                  <div className="space-y-2">
                    {(['home', 'dashboard', 'games'] as const).map((view) => (
                      <Button
                        key={view}
                        onClick={() => setCurrentView(view)}
                        color={currentView === view ? 'blue' : 'gray'}
                        fullWidth
                        className="capitalize"
                      >
                        {view} View
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Columns Selector */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Columns</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {([2, 3, 4, 6] as const).map((col) => (
                      <Button
                        key={col}
                        onClick={() => setColumns(col)}
                        color={columns === col ? 'blue' : 'gray'}
                        size="sm"
                      >
                        {col} Col
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Animation Delay */}
                <div>
                  <h3 className="text-white font-semibold mb-3">
                    Animation Delay: {dataAosDelay}ms
                  </h3>
                  <input
                    type="range"
                    min="0"
                    max="300"
                    step="50"
                    value={dataAosDelay}
                    onChange={(e) => setDataAosDelay(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0ms</span>
                    <span>150ms</span>
                    <span>300ms</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold">
                        {currentActions.length}
                      </div>
                      <div className="text-gray-400">Actions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-semibold">
                        {columns}
                      </div>
                      <div className="text-gray-400">Columns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Showcase */}
          <Card
            padding="lg"
            rounded="xl"
            className="lg:col-span-3 bg-gray-800/50"
          >
            <div data-aos="fade-left">
              {/* View Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white font-orbitron capitalize">
                    {currentView} View
                  </h2>
                  <p className="text-gray-400">
                    {currentActions.length} quick actions · {columns} columns ·{' '}
                    {dataAosDelay}ms delay
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Grid Size</div>
                  <div className="text-white font-semibold">
                    {columns === 6
                      ? '2-3-6'
                      : columns === 4
                        ? '2-4'
                        : columns === 3
                          ? '2-3'
                          : '2'}
                  </div>
                </div>
              </div>

              {/* QuickActionsGrid Showcase */}
              <QuickActionsGrid
                quickActionsData={currentActions}
                dataAosDelay={dataAosDelay}
                columns={columns}
                className="mb-8"
              />

              {/* Code Example */}
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Implementation
                </h3>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`<QuickActionsGrid
  quickActionsData={${currentView}QuickActions}
  dataAosDelay={${dataAosDelay}}
  columns={${columns}}
  className="mb-8"
/>`}
                </pre>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card
                  padding="md"
                  rounded="lg"
                  className="bg-blue-500/10 border-blue-500/20 text-center"
                >
                  <FontAwesomeIcon
                    icon="paint-brush"
                    className="w-8 h-8 text-blue-400 mb-2 mx-auto"
                  />
                  <h4 className="text-white font-semibold">
                    Beautiful Gradients
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Custom color schemes for each action
                  </p>
                </Card>

                <Card
                  padding="md"
                  rounded="lg"
                  className="green-500/10 border-green-500/20 text-center"
                >
                  <FontAwesomeIcon
                    icon="mobile-alt"
                    className="w-8 h-8 text-green-400 mb-2 mx-auto"
                  />
                  <h4 className="text-white font-semibold">Responsive</h4>
                  <p className="text-gray-400 text-sm">
                    Adapts to all screen sizes
                  </p>
                </Card>

                <Card
                  padding="md"
                  rounded="lg"
                  className="purple-500/10 border-purple-500/20 text-center"
                >
                  <FontAwesomeIcon
                    icon="magic"
                    className="w-8 h-8 text-purple-400 mb-2 mx-auto"
                  />
                  <h4 className="text-white font-semibold">
                    Smooth Animations
                  </h4>
                  <p className="text-gray-400 text-sm">
                    AOS powered entrance effects
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        {/* Usage Examples Section */}
        <Card padding="lg" rounded="xl" className="mt-8 bg-gray-800/50">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-white mb-6 font-orbitron text-center">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Home Page Example */}
              <div className="text-center">
                <h3 className="text-white font-semibold mb-4">Home Page</h3>
                <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
                  <QuickActionsGrid
                    quickActionsData={MOCK_QUICK_ACTIONS.home.slice(0, 6)}
                    columns={3}
                    dataAosDelay={80}
                  />
                  <p className="text-gray-400 text-sm mt-4">
                    6 actions · 3 columns · Perfect for hero sections
                  </p>
                </div>
              </div>

              {/* Dashboard Example */}
              <div className="text-center">
                <h3 className="text-white font-semibold mb-4">Dashboard</h3>
                <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
                  <QuickActionsGrid
                    quickActionsData={MOCK_QUICK_ACTIONS.dashboard}
                    columns={4}
                    dataAosDelay={100}
                  />
                  <p className="text-gray-400 text-sm mt-4">
                    4 actions · 4 columns · Quick user navigation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Comet GameHouse Design System • QuickActionsGrid Component
          </p>
        </div>
      </div>
    </div>
  );
};
