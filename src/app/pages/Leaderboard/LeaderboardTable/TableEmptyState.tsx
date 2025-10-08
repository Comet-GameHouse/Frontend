import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TableEmptyState = () => {
  return (
    <div 
      className="max-w-6xl mx-auto bg-gray-800/30 border border-gray-700/30 rounded-xl p-12 text-center"
      data-aos="fade-up"
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center">
        <FontAwesomeIcon 
          icon="trophy" 
          className="text-gray-400 text-2xl" 
        />
      </div>
      
      <h3 className="text-white font-orbitron text-xl font-bold mb-3">
        No Players Found
      </h3>
      
      <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
        Try adjusting your filters or search terms to see more players on the leaderboard.
      </p>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <FontAwesomeIcon icon="filter" />
        <span>Adjust your filters to see results</span>
      </div>
    </div>
  );
};