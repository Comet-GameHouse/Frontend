import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeIncidents } from './data';
import type { Incident } from './types';

export const IncidentsList = () => {
  const getSeverityColor = (severity: Incident['severity']) => {
    switch (severity) {
      case 'minor': return 'yellow';
      case 'major': return 'orange';
      case 'critical': return 'red';
      default: return 'gray';
    }
  };

  const getStatusColor = (status: Incident['status']) => {
    switch (status) {
      case 'investigating': return 'red';
      case 'identified': return 'orange';
      case 'monitoring': return 'yellow';
      case 'resolved': return 'green';
      default: return 'gray';
    }
  };

  if (activeIncidents.length === 0) {
    return (
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h2
          className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-4 sm:mb-6 text-center px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Active Incidents
        </h2>
        <Card
          variant="static-feature"
          className="text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <FontAwesomeIcon icon="check-circle" className="text-green-400 text-3xl sm:text-4xl mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No Active Incidents</h3>
          <p className="text-gray-400 text-sm sm:text-base">All systems are operating normally</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-4 sm:mb-6 text-center px-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Active Incidents
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
        {activeIncidents.map((incident, index) => (
          <Card
            key={incident.id}
            variant="static-feature"
            data-aos="fade-up"
            data-aos-delay={200 + index * 50}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white break-words">
                    {incident.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-${getSeverityColor(incident.severity)}-500/20 border border-${getSeverityColor(incident.severity)}-500/30 text-${getSeverityColor(incident.severity)}-400 flex-shrink-0`}>
                      {incident.severity}
                    </span>
                    <span className={`sm:hidden inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(incident.status)}-500/20 border border-${getStatusColor(incident.status)}-500/30 text-${getStatusColor(incident.status)}-400 flex-shrink-0`}>
                      <FontAwesomeIcon 
                        icon="circle" 
                        className={`text-${getStatusColor(incident.status)}-400 text-xs`}
                      />
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed break-words">
                  {incident.description}
                </p>
              </div>
              
              <div className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-${getStatusColor(incident.status)}-500/20 border border-${getStatusColor(incident.status)}-500/30 flex-shrink-0 self-start`}>
                <FontAwesomeIcon 
                  icon="circle" 
                  className={`text-${getStatusColor(incident.status)}-400 text-xs`}
                />
                <span className={`text-${getStatusColor(incident.status)}-400 text-xs font-semibold capitalize`}>
                  {incident.status}
                </span>
              </div>
            </div>

            {/* Incident Timeline */}
            <div className="border-t border-gray-700/30 pt-3 sm:pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 text-xs text-gray-500 mb-3 sm:mb-4">
                <span className="break-words">Started: {new Date(incident.startTime).toLocaleString()}</span>
                {incident.endTime && (
                  <span className="break-words">Ended: {new Date(incident.endTime).toLocaleString()}</span>
                )}
              </div>
              
              {/* Latest Update */}
              {incident.updates.length > 0 && (
                <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-start gap-3 sm:flex-col sm:items-center sm:gap-2 sm:w-16 flex-shrink-0">
                      <FontAwesomeIcon 
                        icon="info-circle" 
                        className="text-blue-400 mt-0.5 sm:mt-0 text-sm sm:text-base flex-shrink-0"
                      />
                      <div className="sm:hidden text-blue-400 text-xs font-semibold">
                        Latest Update
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3 mb-2">
                        <div className="text-blue-400 text-xs font-semibold sm:flex-1">
                          <span className="hidden sm:inline">Latest Update</span>
                          <span className="sm:hidden">Update Details</span>
                        </div>
                        <div className="text-gray-400 text-xs font-medium">
                          {new Date(incident.updates[0].timestamp).toLocaleString()}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                        {incident.updates[0].message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};