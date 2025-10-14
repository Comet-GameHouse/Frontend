import { PlayerCell } from './cells/PlayerCell';
import {
  RankCell,
  ScoreCell,
  WinRateCell,
  GamesCell,
  LevelCell,
} from './cells';
import { MobilePlayerCard } from './MobilePlayerCard';
import type { LeaderboardEntry } from './types';

interface TableRowProps {
  entry: LeaderboardEntry;
  index: number;
  isCurrentUser?: boolean;
}

export const TableRow = ({ entry, index, isCurrentUser }: TableRowProps) => {
  const rowClasses = `border-b border-gray-700/30 transition-all duration-300 ${
    isCurrentUser
      ? 'bg-blue-500/10 border-l-4 border-blue-500'
      : 'bg-gray-800/30 hover:bg-blue-500/10 hover:border-blue-500/50 cursor-pointer'
  }`;

  return (
    <>
      {/* Desktop Row */}
      <div
        className={`hidden lg:grid grid-cols-12 gap-4 items-center p-4 ${rowClasses}`}
        data-aos="fade-right"
        data-aos-delay={300 + (index + 1) * 50}
      >
        <RankCell rank={entry.rank} />
        <PlayerCell player={entry} isCurrentUser={isCurrentUser} />
        <ScoreCell score={entry.score} />
        <WinRateCell winRate={entry.winRate} />
        <GamesCell gamesPlayed={entry.gamesPlayed} />
        <LevelCell level={entry.level} />
      </div>

      {/* Mobile Card */}
      <div className="lg:hidden">
        <MobilePlayerCard
          entry={entry}
          index={index}
          isCurrentUser={isCurrentUser}
        />
      </div>
    </>
  );
};
