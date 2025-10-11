import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  stats: {
    activeTickets: number;
    resolvedToday: number;
    avgResponseTime: string;
    satisfactionRate: string;
  };
}

export const SupportStatsCard = ({ stats }: Props) => {
  const statItems = [
    {
      icon: 'ticket-alt' as const,
      label: 'Active Tickets',
      value: stats.activeTickets,
      color: 'blue'
    },
    {
      icon: 'check-circle' as const,
      label: 'Resolved Today',
      value: stats.resolvedToday,
      color: 'green'
    },
    {
      icon: 'clock' as const,
      label: 'Avg Response',
      value: stats.avgResponseTime,
      color: 'purple'
    },
    {
      icon: 'star' as const,
      label: 'Satisfaction',
      value: stats.satisfactionRate,
      color: 'orange'
    }
  ];

  return (
    <div 
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {statItems.map((item, index) => (
        <div
          key={item.label}
          data-aos="fade-up"
          data-aos-delay={400 + index * 100}
          className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 text-center group hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${item.color}-500/20 border border-${item.color}-500/30 mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <FontAwesomeIcon 
              icon={item.icon} 
              className={`text-${item.color}-400 text-lg`}
            />
          </div>
          <div className="text-2xl font-bold text-white font-orbitron mb-1">
            {item.value}
          </div>
          <div className="text-gray-400 text-sm">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};