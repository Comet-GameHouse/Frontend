import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tournaments } from './data';
import type { Tournament } from './types';

interface Props {
  selectedCategory: string;
  searchQuery: string;
  selectedGame: string;
  selectedFormat: string;
}

export const TournamentsGrid = ({
  selectedCategory,
  searchQuery,
  selectedGame,
  selectedFormat
}: Props) => {
  const getStatusColor = (status: Tournament['status']) => {
    switch (status) {
      case 'registration': return 'blue';
      case 'live': return 'green';
      case 'upcoming': return 'yellow';
      case 'completed': return 'gray';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  const getStatusText = (status: Tournament['status']) => {
    switch (status) {
      case 'registration': return 'Registration Open';
      case 'live': return 'Live Now';
      case 'upcoming': return 'Starting Soon';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const getDifficultyColor = (difficulty: Tournament['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'green';
      case 'intermediate': return 'yellow';
      case 'advanced': return 'orange';
      case 'expert': return 'red';
      default: return 'gray';
    }
  };

  const handleRegister = (tournamentId: string) => {
    console.log('Register for tournament:', tournamentId);
    // Navigate to registration page or open modal
  };

  const handleViewDetails = (tournamentId: string) => {
    console.log('View tournament details:', tournamentId);
    // Navigate to tournament details page
  };

  // Filter tournaments based on selections
  const filteredTournaments = tournaments.filter(tournament => {
    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'free' && tournament.entryFee > 0) return false;
      if (selectedCategory !== 'free' && tournament.status !== selectedCategory) return false;
    }

    // Search filter
    if (searchQuery && !tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !tournament.game.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Game filter
    if (selectedGame !== 'all' && tournament.game !== selectedGame) return false;

    // Format filter
    if (selectedFormat !== 'all' && tournament.format !== selectedFormat) return false;

    return true;
  });

  if (filteredTournaments.length === 0) {
    return (
      <div className="mb-8 sm:mb-12">
        <Card
          variant="static-feature"
          className="max-w-4xl mx-auto text-center py-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FontAwesomeIcon icon="trophy" className="text-gray-500 text-4xl mb-4" />
          <h3 className="text-white font-semibold text-lg mb-2">No Tournaments Found</h3>
          <p className="text-gray-400 text-sm">
            Try adjusting your filters or check back later for new tournaments
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="mb-8 sm:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredTournaments.map((tournament, index) => (
          <Card
            key={tournament.id}
            variant="clickable"
            className="hover:scale-[1.02] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={250 + index * 50}
          >
            {/* Tournament Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={tournament.gameIcon} className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {tournament.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{tournament.game}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(tournament.status)}-500/20 border border-${getStatusColor(tournament.status)}-500/30 text-${getStatusColor(tournament.status)}-400`}>
                {getStatusText(tournament.status)}
              </span>
            </div>

            {/* Tournament Info */}
            <div className="space-y-3 mb-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center p-2 bg-gray-800/30 rounded-lg">
                  <div className="text-white font-semibold">
                    <FontAwesomeIcon icon="coins" className="text-yellow-400 mr-1" />
                    {tournament.prizePool.toLocaleString()}
                  </div>
                  <div className="text-gray-400">Prize Pool</div>
                </div>
                <div className="text-center p-2 bg-gray-800/30 rounded-lg">
                  <div className="text-white font-semibold">{tournament.registeredPlayers}/{tournament.maxPlayers}</div>
                  <div className="text-gray-400">Players</div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-400">
                <span>Format: {tournament.format.toUpperCase()}</span>
                <span className={`text-${getDifficultyColor(tournament.difficulty)}-400`}>
                  {tournament.difficulty}
                </span>
              </div>

              <div className="flex justify-between text-xs text-gray-400">
                <span>Platform: {tournament.platform}</span>
                <span>{tournament.duration}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(tournament.registeredPlayers / tournament.maxPlayers) * 100}%` 
                  }}
                />
              </div>
              <div className="text-gray-400 text-xs text-center">
                {tournament.maxPlayers - tournament.registeredPlayers} spots remaining
              </div>
            </div>

            {/* Tournament Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
              <div className="text-xs text-gray-400">
                {tournament.entryFee === 0 ? (
                  <span className="text-green-400 font-semibold">FREE ENTRY</span>
                ) : (
                  <span>
                    Entry: <span className="text-yellow-400 font-semibold">
                      <FontAwesomeIcon icon="coins" className="mr-1" />
                      {tournament.entryFee}
                    </span>
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleViewDetails(tournament.id)}
                  className="px-3 py-1 bg-gray-700 border border-gray-600 rounded text-gray-300 text-xs font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  Details
                </button>
                {(tournament.status === 'registration' || tournament.status === 'upcoming') && (
                  <button
                    onClick={() => handleRegister(tournament.id)}
                    disabled={tournament.registeredPlayers >= tournament.maxPlayers}
                    className="px-3 py-1 bg-yellow-500 border border-yellow-500 rounded text-white text-xs font-semibold hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {tournament.registeredPlayers >= tournament.maxPlayers ? 'Full' : 'Register'}
                  </button>
                )}
                {tournament.status === 'live' && (
                  <button
                    onClick={() => handleViewDetails(tournament.id)}
                    className="px-3 py-1 bg-green-500 border border-green-500 rounded text-white text-xs font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    Watch Live
                  </button>
                )}
                {tournament.status === 'completed' && (
                  <button
                    onClick={() => handleViewDetails(tournament.id)}
                    className="px-3 py-1 bg-blue-500 border border-blue-500 rounded text-white text-xs font-semibold hover:bg-blue-600 transition-all duration-300"
                  >
                    View Results
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};