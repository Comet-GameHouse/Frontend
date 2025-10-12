import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { helpItems } from './data';

interface Props {
  searchQuery: string;
}

export const HelpItemsGrid = ({ searchQuery }: Props) => {
  const filteredItems = helpItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.briefAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return (
      <div className="mb-8 sm:mb-12 text-center">
        <p className="text-gray-400 text-lg">
          No help topics found. Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8 sm:mb-12">
      <h2
        className="text-2xl font-bold text-white font-orbitron mb-6 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Quick Help Topics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <Card
            key={item.id}
            type="link"
            variant="clickable"
            className="cursor-pointer hover:border-blue-500/30 transition-all duration-300"
            to={item.discordChannel}
            data-aos="fade-up"
            data-aos-delay={250 + index * 50}
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 border border-${item.color}-500/30 flex items-center justify-center flex-shrink-0`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-${item.color}-400 text-sm`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
