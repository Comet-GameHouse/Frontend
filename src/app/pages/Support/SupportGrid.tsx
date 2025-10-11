import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { supportCards } from './data';
import type { SupportCard } from './types';

interface Props {
  searchQuery: string;
}

export const SupportGrid = ({ searchQuery }: Props) => {
  const filteredCards = supportCards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getColorClasses = (color: SupportCard['color']) => {
    const base = `from-${color}-500/10 to-${color}-600/10 border-${color}-500/30`;
    const hover = `hover:border-${color}-500/50 hover:from-${color}-500/20 hover:to-${color}-600/20`;
    return `${base} ${hover}`;
  };

  return (
    <div className="mb-16">
      <h2 
        className="text-3xl font-bold font-orbitron text-white text-center mb-12"
        data-aos="fade-up"
      >
        How Can We Help You?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <Link
            key={card.id}
            to={card.path}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`block bg-gradient-to-br ${getColorClasses(card.color)} border rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${card.color}-500/20 border border-${card.color}-500/30 group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon 
                  icon={card.icon} 
                  className={`text-${card.color}-400 text-xl`}
                />
              </div>
              {card.stats && (
                <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${card.color}-500/20 text-${card.color}-300 border border-${card.color}-500/30`}>
                  {card.stats}
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white font-orbitron mb-2">
              {card.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {card.description}
            </p>
            
            <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Get Help
              <FontAwesomeIcon 
                icon="arrow-right" 
                className="ml-2 text-xs"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};