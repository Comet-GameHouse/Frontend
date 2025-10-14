import { Link } from 'react-router-dom';
import { Card } from '@components';
import { ROUTES } from '@app/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notificationCategories } from './data';

interface Props {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  filterRead: boolean;
  onFilterReadChange: (filter: boolean) => void;
}

export const NotificationsSidebar = ({
  selectedCategory,
  onCategorySelect,
  filterRead,
  onFilterReadChange,
}: Props) => {
  return (
    <div className="lg:w-80 flex-shrink-0">
      <Card
        variant="static-feature"
        className="sticky top-6"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2 className="text-lg font-bold text-white font-orbitron mb-4">
          Categories
        </h2>

        {/* Categories List */}
        <div className="space-y-2 mb-6">
          {notificationCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500/20 border border-orange-500/50 scale-[1.02]'
                  : 'bg-gray-800/30 border border-gray-700/30 hover:border-gray-500/30 hover:bg-gray-500/10'
              }`}
              data-aos="fade-right"
              data-aos-delay={250 + index * 50}
            >
              <div className="w-8 h-8 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={category.icon}
                  className="text-orange-400 text-sm"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm">
                  {category.name}
                </div>
                <div className="text-gray-400 text-xs">
                  {category.description}
                </div>
              </div>
              {category.count > 0 && (
                <div className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full min-w-6 text-center">
                  {category.count}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Filter Options */}
        <div className="border-t border-gray-700/30 pt-4">
          <h3 className="text-white font-semibold text-sm mb-3">Filters</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filterRead}
              onChange={(e) => onFilterReadChange(e.target.checked)}
              className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700 rounded focus:ring-orange-500 focus:ring-2"
            />
            <span className="text-gray-300 text-sm">Show unread only</span>
          </label>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-700/30 pt-4 mt-4">
          <Link to={ROUTES.SETTINGS}>
            <button className="w-full flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-700/30 rounded-xl hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300">
              <FontAwesomeIcon icon="cog" className="text-gray-400 text-sm" />
              <span className="text-gray-300 text-sm">
                Notification Settings
              </span>
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};
