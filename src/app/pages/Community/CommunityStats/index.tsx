import { CommunityStatCard } from './CommunityStatCard';

export const CommunityStats = () => {
  const stats = [
    { label: 'Total Members', value: '24K+', change: '+12%' },
    { label: 'Active Daily', value: '8.3K', change: '+5%' },
    { label: 'Events Hosted', value: '156', change: '+23%' },
    { label: 'Countries', value: '89', change: '+3' },
  ];

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      {stats.map((stat, index) => (
        <CommunityStatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};
