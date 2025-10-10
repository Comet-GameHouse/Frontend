import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { emergencyContacts } from './data';

export const EmergencyContacts = () => {
  return (
    <div
      className="bg-red-500/10 border border-red-500/30 rounded-xl p-6"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <h3 className="text-white font-orbitron text-lg font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon="exclamation-triangle" className="text-red-400" />
        Emergency Contacts
      </h3>

      <div className="space-y-4">
        <div>
          <div className="text-red-400 text-sm font-medium mb-1">
            Critical Security Issues
          </div>
          <a
            href={`mailto:${emergencyContacts.security}`}
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            {emergencyContacts.security}
          </a>
        </div>

        <div>
          <div className="text-red-400 text-sm font-medium mb-1">
            Account Compromise
          </div>
          <a
            href={`mailto:${emergencyContacts.critical}`}
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            {emergencyContacts.critical}
          </a>
        </div>

        <div>
          <div className="text-red-400 text-sm font-medium mb-1">
            Legal Matters
          </div>
          <a
            href={`mailto:${emergencyContacts.legal}`}
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            {emergencyContacts.legal}
          </a>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-red-500/30">
        <p className="text-red-300 text-xs">
          Use these contacts only for urgent security, legal, or critical
          service issues.
        </p>
      </div>
    </div>
  );
};
