import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { privacySections } from './data';
import type { TableOfContentsItem } from './types';

export const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const tocItems: TableOfContentsItem[] = privacySections.map((section) => ({
    id: section.id,
    title: section.title,
    level: 1,
  }));

  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 sticky top-28"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <h3 className="text-white font-orbitron text-lg font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon="list" className="text-green-400" />
        Contents
      </h3>

      <nav className="space-y-2">
        {tocItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveSection(item.id)}
            className={`block py-2 px-3 rounded-lg transition-all duration-200 text-sm ${
              activeSection === item.id
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
            }`}
            data-aos="fade-right"
            data-aos-delay={100 + (index + 1) * 50}
          >
            {item.title}
          </a>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-700/30">
        <div className="text-xs text-gray-500">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon="clock" />
            <span>Reading time: ~10 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon="file-alt" />
            <span>{privacySections.length} sections</span>
          </div>
        </div>
      </div>
    </div>
  );
};
