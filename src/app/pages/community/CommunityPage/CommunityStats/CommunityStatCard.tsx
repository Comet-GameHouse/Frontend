import { Card } from '@components';

interface CommunityStatCardProp {
  stat: any;
  index: number;
}

export const CommunityStatCard = ({ stat, index }: CommunityStatCardProp) => {
  return (
    <Card
      variant="static-feature"
      data-aos="fade-up"
      data-aos-delay={150 + (index + 1) * 50}
    >
      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-orbitron mb-1">
        {stat.value}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm mb-1">{stat.label}</div>
      <div className="text-green-400 text-xs font-medium">{stat.change}</div>
    </Card>
  );
};
