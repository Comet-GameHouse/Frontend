import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TermsSection } from './TermsSection';
import { termsSections } from './data';

export const TermsContent = () => {
  return (
    <div 
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sm:p-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Introduction */}
      <div className="mb-8 sm:mb-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Welcome to Comet GameHouse! These Terms of Service govern your use of our gaming platform, 
          services, and community features. By accessing or using our services, you agree to be bound 
          by these terms.
        </p>
        
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon="exclamation-circle" className="text-blue-400 text-lg mt-0.5" />
            <div>
              <h4 className="text-blue-400 font-semibold mb-2">Important Notice</h4>
              <p className="text-blue-300 text-sm">
                These terms include important information about your legal rights, including 
                limitations on our liability and agreements to resolve disputes through arbitration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8 sm:space-y-12">
        {termsSections.map((section, index) => (
          <TermsSection
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};