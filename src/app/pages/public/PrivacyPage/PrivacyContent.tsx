import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrivacySection } from './PrivacySection';
import { privacySections } from './data';

export const PrivacyContent = () => {
  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sm:p-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Introduction */}
      <div className="mb-8 sm:mb-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your privacy is important to us. This Privacy Policy explains how
          Comet GameHouse collects, uses, and protects your personal information
          when you use our gaming platform and services.
        </p>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon="shield-alt"
              className="text-green-400 text-lg mt-0.5"
            />
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Your Privacy Matters
              </h4>
              <p className="text-green-300 text-sm">
                We are committed to transparency about our data practices and
                giving you control over your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Sections */}
      <div className="space-y-8 sm:space-y-12">
        {privacySections.map((section, index) => (
          <PrivacySection key={index} section={section} />
        ))}
      </div>
    </div>
  );
};
