import { Card, Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ChatMessage } from './types';

interface ChatSectionProps {
  messages: ChatMessage[];
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: () => void;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

export const ChatSection = ({
  messages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
  chatContainerRef
}: ChatSectionProps) => {
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <Card variant="static-feature" className="h-96 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white font-orbitron">
          Room Chat
        </h2>
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <FontAwesomeIcon icon="circle" className="text-xs" />
          <span>Live</span>
        </div>
      </div>

      {/* Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4"
      >
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg ${
              message.type === 'system'
                ? 'bg-blue-500/10 border border-blue-500/20'
                : message.playerId === 'you'
                ? 'bg-blue-500/10 border border-blue-500/20 ml-4'
                : 'bg-gray-800/30 border border-gray-700/30 mr-4'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 30}
          >
            {message.type === 'system' ? (
              <div className="text-center">
                <span className="text-blue-400 text-sm italic">{message.message}</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-semibold text-sm ${
                    message.playerId === 'you' ? 'text-blue-400' : 'text-green-400'
                  }`}>
                    {message.playerName}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <p className="text-gray-300 text-sm break-words">
                  {message.message}
                </p>
              </div>
            )}
          </div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-8" data-aos="fade-up">
            <FontAwesomeIcon icon="comments" className="text-gray-500 text-3xl mb-2" />
            <p className="text-gray-400 text-sm">No messages yet</p>
            <p className="text-gray-500 text-xs">Start the conversation!</p>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => onNewMessageChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          />
          <Button
            variant="primary"
            icon="paper-plane"
            size="sm"
            onClick={onSendMessage}
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          {['GG', 'Well Played', 'Good Luck', 'Rematch?'].map((text, index) => (
            <button
              key={text}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-xs transition-colors duration-200"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};