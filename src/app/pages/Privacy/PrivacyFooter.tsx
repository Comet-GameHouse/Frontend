import { Button } from '@components';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const PrivacyFooter = () => {
  const handleDataRequest = () => {
    // Handle data access request
    console.log('Data request initiated');
  };

  return (
    <div
      className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-700/30"
      data-aos="fade-up"
    >
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h3 className="text-white font-orbitron text-xl font-bold mb-2">
            Exercise Your Privacy Rights
          </h3>
          <p className="text-gray-400 text-sm">
            You have control over your personal information
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="premium"
            design="neon"
            size="sm"
            icon="download"
            onClick={handleDataRequest}
          >
            Request My Data
          </Button>

          <Link to={ROUTES.SUPPORT}>
            <Button variant="primary" size="sm" icon="user-shield">
              Privacy Settings
            </Button>
          </Link>

          <Link to={ROUTES.TERMS}>
            <Button variant="secondary" size="sm">
              Terms of Service
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            For data deletion requests or other privacy concerns, please contact
            our privacy team directly.
          </p>
        </div>
      </div>
    </div>
  );
};
