import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesStatus } from './data';
import type { ServiceStatus } from './types';

export const ServicesGrid = () => {
  const getStatusConfig = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return { color: 'green', icon: 'check-circle', label: 'Operational' };
      case 'degraded':
        return { color: 'yellow', icon: 'exclamation-triangle', label: 'Degraded' };
      case 'outage':
        return { color: 'red', icon: 'times-circle', label: 'Outage' };
      case 'maintenance':
        return { color: 'blue', icon: 'tools', label: 'Maintenance' };
      default:
        return { color: 'gray', icon: 'question-circle', label: 'Unknown' };
    }
  };

  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-4 sm:mb-6 text-center px-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Service Status
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
        {servicesStatus.map((service, index) => {
          const statusConfig = getStatusConfig(service.status);
          
          return (
            <Card
              key={service.id}
              variant="static-feature"
              data-aos="fade-up"
              data-aos-delay={200 + index * 50}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-${service.color}-500/20 border border-${service.color}-500/30 flex items-center justify-center`}>
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className={`text-${service.color}-400 text-sm`}
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white font-orbitron">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full bg-${statusConfig.color}-500/20 border border-${statusConfig.color}-500/30`}>
                  <FontAwesomeIcon 
                    icon={statusConfig.icon} 
                    className={`text-${statusConfig.color}-400 text-xs`}
                  />
                  <span className={`text-${statusConfig.color}-400 text-xs font-semibold`}>
                    {statusConfig.label}
                  </span>
                </div>
                
                <div className="text-right">
                  <div className="text-white text-xs font-semibold">
                    {service.uptime}
                  </div>
                  <div className="text-gray-400 text-xs">
                    Uptime
                  </div>
                </div>
              </div>

              {service.responseTime && (
                <div className="mt-3 pt-3 border-t border-gray-700/30">
                  <div className="text-gray-400 text-xs">
                    Response: <span className="text-white font-semibold">{service.responseTime}ms</span>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};