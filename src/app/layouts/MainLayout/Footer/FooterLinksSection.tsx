import { Link } from 'react-router-dom';
import type { FooterSection } from './types';

interface FooterLinksSectionProps {
  section: FooterSection;
  index: number;
}

export const FooterLinksSection = ({
  section,
  index,
}: FooterLinksSectionProps) => {
  return (
    <div
      className="text-center md:text-left"
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
    >
      <Link
        to={section.path}
        className="block text-xl md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-4 font-orbitron"
      >
        {section.title}
      </Link>
      <ul className="space-y-3 md:space-y-2">
        {section.links.map((link, linkIndex) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 text-base md:text-sm lg:text-base flex items-center justify-center md:justify-start group"
              data-aos="fade-right"
              data-aos-delay={(index + 1) * 100 + (linkIndex + 1) * 50}
            >
              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block"></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
