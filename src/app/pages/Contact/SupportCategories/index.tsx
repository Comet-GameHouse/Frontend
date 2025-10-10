import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { supportCategories } from './data';
import { SupportCategoryCard } from './SupportCategoryCard';

export const SupportCategories = () => {
  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <h3 className="text-white font-orbitron text-lg font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon="folder-open" className="text-cyan-400" />
        Support Categories
      </h3>

      <div className="space-y-3">
        {supportCategories.map((category, index) => (
          <SupportCategoryCard key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};
