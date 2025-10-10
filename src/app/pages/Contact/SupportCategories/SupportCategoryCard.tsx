import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SupportCategory } from './types';
import { Card } from '@components';

interface SupportCategoryCardProp {
  category: SupportCategory;
  index: number;
}

export const SupportCategoryCard = ({
  category,
  index,
}: SupportCategoryCardProp) => {
  return (
    <Card
      variant="static-paper"
      className="flex items-center space-x-2"
      data-aos="fade-left"
      data-aos-delay={(index + 1) * 50}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <FontAwesomeIcon icon={category.icon} className="text-white text-xs" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-medium truncate">
          {category.name}
        </div>
        <div className="text-gray-400 text-xs truncate">
          {category.description}
        </div>
      </div>
    </Card>
  );
};
