import { FOOTER_SECTIONS } from './data';
import { BrandSection } from './BrandSection';
import { FooterLinksSection } from './FooterLinksSection';
import { BottomBar } from './BottomBar';

export const Footer = () => {
  return (
    <footer className="bg-gray-800/80 backdrop-blur-lg border-t border-gray-700/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6 lg:gap-8 xl:gap-12">
          <BrandSection />
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterLinksSection
              key={section.title}
              section={section}
              index={index}
            />
          ))}
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
