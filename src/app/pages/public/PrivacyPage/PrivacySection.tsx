import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PrivacySection as PrivacySectionType } from './types';

interface PrivacySectionProps {
  section: PrivacySectionType;
}

export const PrivacySection = ({ section }: PrivacySectionProps) => {
  return (
    <section
      id={section.id}
      className="scroll-mt-24"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
            data-aos-delay={200 + (paraIndex + 1) * 50}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Subsections */}
      {section.subsections && (
        <div className="mt-6 space-y-6">
          {section.subsections.map((subsection, subIndex) => (
            <div
              key={subIndex}
              className="bg-gray-700/20 rounded-lg p-4 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={200 + (subIndex + 1) * 50}
            >
              <h3 className="text-green-400 font-semibold mb-3 text-lg">
                {subsection.title}
              </h3>
              <ul className="space-y-2">
                {subsection.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-green-400 text-xs mt-1.5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
