import { Card } from '@components';
import { prizeDistribution } from './data';

export const PrizeDistribution = () => {
  return (
    <Card variant="static-feature">
      <h2 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-6">
        Prize Distribution
      </h2>

      <div className="space-y-4">
        {prizeDistribution.map((prize, index) => (
          <div
            key={prize.position}
            className="flex items-center justify-between p-4 bg-gray-800/30 border border-gray-700/30 rounded-lg hover:border-yellow-500/30 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex items-center gap-4">
              {/* Position Badge */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                prize.position === 1 ? 'bg-yellow-500' :
                prize.position === 2 ? 'bg-gray-400' :
                prize.position === 3 ? 'bg-orange-500' :
                'bg-blue-500'
              }`}>
                {prize.position}
              </div>

              {/* Prize Info */}
              <div>
                <div className="text-white font-semibold">
                  {prize.position}{getOrdinal(prize.position)} Place
                </div>
                <div className="text-gray-400 text-sm">
                  {prize.requirement}
                </div>
              </div>
            </div>

            {/* Prize Amount */}
            <div className="text-right">
              <div className="text-yellow-400 font-bold text-lg">
                ${prize.amount.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">
                {prize.additional}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Prize Pool */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-white font-semibold">Total Prize Pool</div>
            <div className="text-gray-400 text-sm">Distributed among top 5 players</div>
          </div>
          <div className="text-yellow-400 font-bold text-xl">
            $1,150
          </div>
        </div>
      </div>
    </Card>
  );
};

function getOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}