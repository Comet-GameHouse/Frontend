import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { systemMetrics } from './data';

export const StatusMetrics = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {systemMetrics.map((metric, index) => (
        <Card
          key={metric.label}
          variant="static-feature"
          className="text-center"
          data-aos="fade-up"
          data-aos-delay={150 + index * 50}
        >
          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${metric.color}-500/20 border border-${metric.color}-500/30 mb-3`}>
            <FontAwesomeIcon 
              icon={metric.icon} 
              className={`text-${metric.color}-400 text-sm sm:text-base`}
            />
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-bold text-white font-orbitron mb-1">
            {metric.value}
          </div>
          <div className={`text-${metric.color}-400 text-xs sm:text-sm`}>
            {metric.label}
          </div>
        </Card>
      ))}
    </div>
  );
};