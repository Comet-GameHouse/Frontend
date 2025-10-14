import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { termsSections } from './data';
import type { TableOfContentsItem } from './types';

export const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const tocItems: TableOfContentsItem[] = termsSections.map((section) => ({
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
        <FontAwesomeIcon icon="list" className="text-blue-400" />
        Contents
      </h3>

      <nav className="flex flex-col space-y-2">
        {tocItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveSection(item.id)}
            className={`block py-2 px-3 rounded-lg transition-all duration-200 text-sm ${
              activeSection === item.id
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
            }`}
            data-aos="fade-right"
            data-aos-delay={100 + index * 50}
          >
            {item.title}
          </a>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-700/30">
        <div className="text-xs text-gray-500">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon="clock" />
            <span>Reading time: ~8 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon="file-alt" />
            <span>{termsSections.length} sections</span>
          </div>
        </div>
      </div>
    </div>
  );
};
