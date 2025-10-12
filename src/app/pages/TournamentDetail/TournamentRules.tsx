import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tournamentRules } from './data';

export const TournamentRules = () => {
  return (
    <Card variant="static-feature">
      <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-6">
        Tournament Rules
      </h2>

      <div className="space-y-6">
        {tournamentRules.map((rule, index) => (
          <div
            key={rule.id}
            className="flex gap-4 p-4 bg-gray-800/30 border border-gray-700/30 rounded-lg hover:border-blue-500/30 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={rule.icon} className="text-blue-400 text-sm" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">{rule.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{rule.description}</p>
              
              {rule.details && (
                <ul className="mt-2 space-y-1">
                  {rule.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 text-sm flex items-start gap-2">
                      <FontAwesomeIcon icon="circle" className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};