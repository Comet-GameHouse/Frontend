export interface RoomDetail {
  id: string;
  status: 'waiting' | 'playing' | 'finished';
  entryFee: number;
  potentialPrize: number;
  currentPlayers: number;
  maxPlayers: number;
  creator?: string;
  gameType: string;
  createdAt: Date;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'ingame';
  rank: number;
  winRate: number;
  totalWins?: number;
  isReady: boolean;
  isAlive?: boolean;
  score?: number;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  message: string;
  timestamp: Date;
  type: 'chat' | 'system';
}