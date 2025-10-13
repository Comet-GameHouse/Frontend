import { useState, useRef, useEffect } from 'react';
import { Card, Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoomHeader } from './RoomHeader';
import { GameCanvas } from './GameCanvas';
import { PlayerSection } from './PlayerSection';
import { ChatSection } from './ChatSection';
import type {
  RoomDetail as RoomDetailType,
  ChatMessage,
  Player,
} from './types';
import { roomData, players, chatMessages } from './data';

export const RoomDetail = () => {
  const [room, setRoom] = useState<RoomDetailType>(roomData);
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [newMessage, setNewMessage] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        playerId: 'you',
        playerName: 'You',
        message: newMessage,
        timestamp: new Date(),
        type: 'chat',
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleLeaveRoom = () => {
    console.log('Leaving room...');
  };

  const handleStartGame = () => {
    setGameStarted(true);
    const systemMessage: ChatMessage = {
      id: Date.now().toString(),
      playerId: 'system',
      playerName: 'System',
      message: 'Game started! Good luck everyone!',
      timestamp: new Date(),
      type: 'system',
    };
    setMessages((prev) => [...prev, systemMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <RoomHeader
          room={room}
          onLeaveRoom={handleLeaveRoom}
          data-aos="fade-up"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Main Game Area - Takes 3 columns on xl screens */}
            <div
              className="xl:col-span-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <GameCanvas
                gameStarted={gameStarted}
                room={room}
                onStartGame={handleStartGame}
              />
            </div>

            {/* Sidebar - Takes 1 column on xl screens */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <PlayerSection
                players={players}
                gameStarted={gameStarted}
                data-aos="fade-up"
                data-aos-delay="150"
              />

              <ChatSection
                messages={messages}
                newMessage={newMessage}
                onNewMessageChange={setNewMessage}
                onSendMessage={handleSendMessage}
                chatContainerRef={chatContainerRef}
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
