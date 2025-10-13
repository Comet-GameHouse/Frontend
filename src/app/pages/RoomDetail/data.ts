import type { RoomDetail, Player, ChatMessage } from './types';

export const roomData: RoomDetail = {
  id: 'ABC123',
  status: 'waiting',
  entryFee: 100,
  potentialPrize: 180,
  currentPlayers: 2,
  maxPlayers: 2,
  creator: 'ProPlayer92',
  gameType: '1v1 Space Duel',
  createdAt: new Date()
};

export const players: Player[] = [
  {
    id: '1',
    name: 'You',
    avatar: 'Y',
    status: 'online',
    rank: 47,
    winRate: 58,
    totalWins: 45,
    isReady: true,
    isAlive: true,
    score: 0
  },
  {
    id: '2',
    name: 'ProPlayer92',
    avatar: 'P',
    status: 'online',
    rank: 12,
    winRate: 72,
    totalWins: 156,
    isReady: true,
    isAlive: true,
    score: 0
  }
];

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    playerId: 'system',
    playerName: 'System',
    message: 'ProPlayer92 joined the room',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    type: 'system'
  },
  {
    id: '2',
    playerId: '2',
    playerName: 'ProPlayer92',
    message: 'Hey! Ready for some space action?',
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
    type: 'chat'
  },
  {
    id: '3',
    playerId: 'you',
    playerName: 'You',
    message: 'Yeah, let\'s do this! Good luck!',
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    type: 'chat'
  },
  {
    id: '4',
    playerId: '2',
    playerName: 'ProPlayer92',
    message: 'GL HF!',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    type: 'chat'
  }
];