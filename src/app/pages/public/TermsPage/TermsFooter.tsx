import { Button } from '@components';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';

export const TermsFooter = () => {
  const handleAccept = () => {
    // Handle terms acceptance
    console.log('Terms accepted');
  };

  return (
    <div
      className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-700/30"
      data-aos="fade-up"
    >
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h3 className="text-white font-orbitron text-xl font-bold mb-2">
            Need Help Understanding These Terms?
          </h3>
          <p className="text-gray-400 text-sm">
            Contact our support team for clarification on any section
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="premium"
            design="neon"
            onClick={handleAccept}
            icon="check"
            size="sm"
          >Accept</Button>

          <Link to={ROUTES.SUPPORT}>
            <Button variant="primary" icon="question-circle" size="sm">
              Contact Support
            </Button>
          </Link>

          <Link to={ROUTES.PRIVACY}>
            <Button variant="secondary" size="sm">Privacy Policy</Button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            By accepting, you acknowledge that you have read, understood, and
            agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};
