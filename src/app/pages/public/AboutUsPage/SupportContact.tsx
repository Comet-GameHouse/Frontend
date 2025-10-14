import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const SupportContact = () => {
  return (
    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
          Get In Touch
        </h3>
        <p className="text-gray-400 text-lg mb-6">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.SUPPORT}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </Link>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Join Discord
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          We typically respond within 24 hours. Follow us on social media for the latest updates!
        </p>
      </div>
    </div>
  );
};