import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components';
import { discordChannels } from './data';
import { DiscordChannelCard } from './DiscordChannelCard';

export const DiscordPreview = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl overflow-hidden max-w-4xl mx-auto">
        {/* Discord Header */}
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={['fab', 'discord']} className="text-3xl" />
            <div>
              <h3 className="font-orbitron text-2xl font-bold">
                Comet GameHouse
              </h3>
              <p className="text-blue-100 text-sm">Official Discord Server</p>
            </div>
          </div>
        </div>

        {/* Discord Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Channels List */}
            <div data-aos="fade-right">
              <h4 className="text-white font-orbitron text-lg font-bold mb-4">
                Popular Channels
              </h4>
              <div className="space-y-2">
                {discordChannels.map((channel, index) => (
                  <DiscordChannelCard
                    key={index}
                    channel={channel}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Server Info */}
            <div data-aos="fade-left">
              <h4 className="text-white font-orbitron text-lg font-bold mb-4">
                Server Features
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FontAwesomeIcon
                    icon="shield-alt"
                    className="text-green-400"
                  />
                  <span>Verified & Moderated</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FontAwesomeIcon icon="robot" className="text-blue-400" />
                  <span>Custom Discord Bots</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FontAwesomeIcon icon="gamepad" className="text-purple-400" />
                  <span>Game Integration</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FontAwesomeIcon icon="crown" className="text-yellow-400" />
                  <span>Active Developer Team</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
                <p className="text-gray-300 text-sm mb-4">
                  Ready to join our amazing Discord community?
                </p>
                <Button
                  variant="primary"
                  onClick={() =>
                    window.open('https://discord.gg/comet-gamehouse', '_blank')
                  }
                  className="w-full justify-center bg-blue-600 hover:bg-blue-700"
                >
                  <FontAwesomeIcon icon={['fab', 'discord']} className="mr-2" />
                  Join Discord Server
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
