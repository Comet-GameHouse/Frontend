import { useState, useEffect, useRef } from 'react';
import { Card, Button } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { RoomDetail } from './types';

interface GameCanvasProps {
  gameStarted: boolean;
  room: RoomDetail;
  onStartGame: () => void;
}

export const GameCanvas = ({ gameStarted, room, onStartGame }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = Math.min(window.innerHeight - 300, width * 0.75);
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      setCountdown(3);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev === 1) {
            clearInterval(timer);
            return null;
          }
          return prev ? prev - 1 : null;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const render = () => {
      // Clear canvas
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      
      const gridSize = Math.max(20, dimensions.width / 40);
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw center line
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      // Draw game elements when started
      if (gameStarted && !countdown) {
        const shipSize = Math.max(20, dimensions.width / 40);
        
        // Player 1 spaceship
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(shipSize * 2, canvas.height / 2);
        ctx.lineTo(shipSize, canvas.height / 2 - shipSize);
        ctx.lineTo(shipSize, canvas.height / 2 + shipSize);
        ctx.closePath();
        ctx.fill();

        // Player 2 spaceship
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(canvas.width - shipSize * 2, canvas.height / 2);
        ctx.lineTo(canvas.width - shipSize, canvas.height / 2 - shipSize);
        ctx.lineTo(canvas.width - shipSize, canvas.height / 2 + shipSize);
        ctx.closePath();
        ctx.fill();
      }

      // Draw countdown
      if (countdown) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        const fontSize = Math.max(40, dimensions.width / 20);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(countdown.toString(), canvas.width / 2, canvas.height / 2);
      }

      // Draw waiting message
      if (!gameStarted) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        const fontSize = Math.max(20, dimensions.width / 40);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Waiting for game to start...', canvas.width / 2, canvas.height / 2);
      }

      requestAnimationFrame(render);
    };

    render();
  }, [gameStarted, countdown, dimensions]);

  return (
    <Card variant="static-feature" className="p-0 overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full bg-gray-900 flex items-center justify-center"
        style={{ minHeight: '50vh', height: '65vh' }}
      >
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full"
          style={{ 
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`
          }}
        />
        
        {/* Game Overlay */}
        {!gameStarted && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <FontAwesomeIcon icon="play-circle" className="text-white text-4xl sm:text-6xl mb-4 opacity-50" />
              <div className="text-white text-xl sm:text-2xl font-orbitron mb-2">Ready to Battle?</div>
              <div className="text-gray-400 text-sm sm:text-base mb-4">All players are ready to start</div>
              <Button
                variant="primary"
                icon="play"
                size="lg"
                onClick={onStartGame}
                className="px-8 py-3"
              >
                Start Game
              </Button>
            </div>
          </div>
        )}

        {/* Game Info Bar */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-lg border border-blue-500/30">
            <FontAwesomeIcon icon="coins" className="text-yellow-400 text-sm" />
            <span className="text-white font-semibold text-sm">{room.entryFee} GC</span>
          </div>
          
          <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-lg border border-green-500/30">
            <FontAwesomeIcon icon="trophy" className="text-yellow-400 text-sm" />
            <span className="text-white font-semibold text-sm">{room.potentialPrize} GC</span>
          </div>
        </div>

        {/* Player Scores */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="text-center">
            <div className="text-blue-400 font-bold text-2xl sm:text-3xl font-orbitron">0</div>
            <div className="text-gray-400 text-sm">Player 1</div>
          </div>
          
          <div className="text-gray-400 text-lg">VS</div>
          
          <div className="text-center">
            <div className="text-red-400 font-bold text-2xl sm:text-3xl font-orbitron">0</div>
            <div className="text-gray-400 text-sm">Player 2</div>
          </div>
        </div>
      </div>
    </Card>
  );
};