import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { howToParticipate } from './data';

export const HowToParticipate = () => {
  return (
    <Card variant="static-feature">
      <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-6">
        How to Participate
      </h2>

      <div className="space-y-6">
        {howToParticipate.map((step, index) => (
          <div
            key={step.id}
            className="flex gap-4 p-4 bg-gray-800/30 border border-gray-700/30 rounded-lg hover:border-green-500/30 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {/* Step Number */}
            <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-green-400 font-bold text-sm">{step.step}</span>
            </div>
            
            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              
              {step.actions && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded text-xs font-semibold hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Step Icon */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={step.icon} className="text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Start CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
        <div className="text-center">
          <h3 className="text-white font-semibold mb-2">Ready to Compete?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Join the tournament now and start climbing the leaderboard!
          </p>
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Playing Now
          </button>
        </div>
      </div>
    </Card>
  );
};