import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const SupportContact = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-12" data-aos="fade-up">
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
          Need Help With Battles?
        </h3>
        <p className="text-gray-400 text-lg mb-6">
          Having issues with matchmaking, entry fees, or game mechanics? Our support team is here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.SUPPORT}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Battle Support
          </Link>
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Battle Guides
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Report Issue
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Check our community forums for battle strategies and tips from top players!
        </p>
      </div>
    </div>
  );
};