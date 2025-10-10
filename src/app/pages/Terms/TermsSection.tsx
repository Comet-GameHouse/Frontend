import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { TermsSection as TermsSectionType } from './types';

interface TermsSectionProps {
  section: TermsSectionType;
  index: number;
}

export const TermsSection = ({ section, index }: TermsSectionProps) => {
  return (
    <section
      id={section.id}
      className="scroll-mt-24"
      data-aos="fade-up"
      data-aos-delay={200 + (index + 1) * 50}
    >
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <FontAwesomeIcon icon={section.icon} className="text-white text-sm" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">
        {section.content.map((paragraph, paraIndex) => (
          <p
            key={paraIndex}
            className="text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay={index * 100 + paraIndex * 50}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {section.lastUpdated && (
        <div className="mt-4 pt-4 border-t border-gray-700/30">
          <div className="text-gray-500 text-sm flex items-center gap-2">
            <FontAwesomeIcon icon="sync" className="text-xs" />
            <span>Last updated: {section.lastUpdated}</span>
          </div>
        </div>
      )}
    </section>
  );
};
