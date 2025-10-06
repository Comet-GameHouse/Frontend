export interface Game {
  id: number
  name: string
  description: string
  players: string
  online: string
  icon: string
  color: string
}

export interface QuickAction {
  icon: string
  text: string
  description: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface CommunityFeature {
  icon: string
  text: string
  description: string
}