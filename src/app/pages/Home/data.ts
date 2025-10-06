export const FEATURED_GAMES = [
  {
    id: 1,
    name: "5 Lines Sheep Fight",
    description: "Strategic card battle with cute sheep characters",
    players: "2-4 Players",
    online: "1.2K",
    icon: "gamepad",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 2,
    name: "Animal Chess",
    description: "Classic chess with animal-themed pieces",
    players: "2 Players",
    online: "856",
    icon: "crown",
    color: "from-yellow-500 to-orange-500"
  }
] as const

export const QUICK_ACTIONS = [
  { icon: "plus", text: "Create Room", description: "Start your own game session" },
  { icon: "users", text: "Join Room", description: "Enter with room code" },
  { icon: "random", text: "Quick Play", description: "Join random game instantly" },
  { icon: "coins", text: "Buy Coins", description: "Get game currency" }
] as const

export const STATS = [
  { value: "50,000+", label: "Active Players", icon: "users" },
  { value: "100+", label: "Games Available", icon: "gamepad" },
  { value: "24/7", label: "Live Support", icon: "headset" },
  { value: "1M+", label: "Games Played", icon: "trophy" }
] as const

export const COMMUNITY_FEATURES = [
  { icon: "discord", text: "Discord Community", description: "Chat with players worldwide" },
  { icon: "share-alt", text: "Invite Friends", description: "Get bonus coins for referrals" },
  { icon: "trophy", text: "Achievements", description: "Complete daily & global goals" },
  { icon: "chart-line", text: "Leaderboards", description: "Compete for top ranks" }
] as const