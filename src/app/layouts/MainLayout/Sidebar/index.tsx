import { useState } from 'react';
import { SidebarTrigger } from './SidebarTrigger';
import { SidebarIconItem } from './SidebarIconItem';
import { sidebarItems, transitionStyles } from './data';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (isHovering: boolean) => {
    setIsOpen(isHovering);
  };

  const sidebarClasses = `
    fixed left-0 top-1/2 transform -translate-y-1/2 z-30
    bg-gray-900/95 backdrop-blur-lg
    rounded-r-2xl border-r border-y border-gray-700/50
    shadow-2xl
    ${transitionStyles}
    ${isOpen ? 'w-16 translate-x-0' : 'w-0 -translate-x-4'}
  `;

  return (
    <>
      {/* Sidebar Trigger */}
      <SidebarTrigger isOpen={isOpen} onHover={handleHover} />

      {/* Sidebar Panel */}
      <aside
        className={sidebarClasses}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div
          className={`
          ${transitionStyles}
          ${isOpen ? 'opacity-100 w-16 p-3' : 'opacity-0 w-0 p-0'}
        `}
        >
          {/* Navigation Items */}
          <nav className="space-y-3">
            {sidebarItems.map((item) => (
              <div key={item.path} className="group">
                <SidebarIconItem item={item} isOpen={isOpen} />
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
