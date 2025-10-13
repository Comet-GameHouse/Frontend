import { Card } from '@components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Your Name',
      role: 'Full-Stack Developer & Founder',
      description:
        'Single-handedly architected and built the entire Comet Gamehouse platform. From front-end design to back-end APIs, database architecture to cloud deployment - every technical aspect was crafted with precision and passion.',
      avatar: '👨‍💻',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React/TypeScript',
        'Node.js/Express',
        'Database Design',
        'DevOps & Deployment',
        'API Architecture',
        'System Design',
      ],
      contributions: [
        'Complete platform development',
        'Database design & optimization',
        'Server infrastructure & deployment',
        'Game integration & mechanics',
        'Payment systems & security',
      ],
    },
    {
      name: "Partner's Name",
      role: 'Community & Growth Manager',
      description:
        'Builds and nurtures our gaming communities, creates engaging content, and grows our player base through strategic social media and community initiatives.',
      avatar: '👨‍🎤',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Community Building',
        'Social Media',
        'Content Creation',
        'Player Engagement',
        'Growth Strategies',
      ],
      contributions: [
        'Community management & moderation',
        'Social media channels & content',
        'Player engagement strategies',
        'Community events & tournaments',
        'User feedback collection',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-4"
          data-aos="fade-up"
        >
          The Brains & The Voice
        </h2>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Technical excellence meets community passion. Together, we create the
          complete gaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <Card
            key={member.name}
            variant="static-feature"
            className="p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
              <div
                className={`w-20 h-20 flex-shrink-0 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center shadow-lg text-3xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
              >
                {member.avatar}
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-white font-orbitron mb-2">
                  {member.name}
                </h3>

                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${member.color} text-white`}
                >
                  {member.role}
                </div>

                <p className="text-gray-400 text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Main Contributions
              </h4>
              <ul className="space-y-2">
                {member.contributions.map((contribution, contribIndex) => (
                  <li
                    key={contribIndex}
                    className="flex items-start gap-2 text-gray-400 text-sm"
                  >
                    <FontAwesomeIcon
                      icon="check-circle"
                      className="text-green-400 text-xs mt-1 flex-shrink-0"
                    />
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex justify-center sm:justify-start gap-3 mt-6 pt-6 border-t border-gray-700/30">
              <button
                className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300"
                title="Send Email"
              >
                <FontAwesomeIcon icon="envelope" className="text-sm" />
              </button>
              <button
                className="w-10 h-10 bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-600/50 hover:scale-110 transition-all duration-300"
                title="GitHub"
              >
                <FontAwesomeIcon icon={['fab', 'github']} className="text-sm" />
              </button>
              <button
                className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-600/30 hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  className="text-sm"
                />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Our Story */}
      <Card
        variant="static-feature"
        className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">
          Perfect Partnership
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              ⚡
            </div>
            <h4 className="text-white font-semibold mb-3">
              Technical Excellence
            </h4>
            <p className="text-gray-400 text-sm">
              Robust, scalable architecture built from the ground up. Every
              feature meticulously crafted for performance and reliability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
              🎯
            </div>
            <h4 className="text-white font-semibold mb-3">Community Growth</h4>
            <p className="text-gray-400 text-sm">
              Engaging communities, strategic growth, and player-focused
              initiatives that keep gamers coming back.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-700/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            While one builds the platform, the other builds the community.
            Together, we create the complete gaming ecosystem where technology
            meets human connection.
          </p>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 font-orbitron">
            100%
          </div>
          <div className="text-gray-400 text-sm">Code & Deployment</div>
          <div className="text-gray-500 text-xs">by You</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400 font-orbitron">
            100%
          </div>
          <div className="text-gray-400 text-sm">Community & Growth</div>
          <div className="text-gray-500 text-xs">by Partner</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400 font-orbitron">
            200%
          </div>
          <div className="text-gray-400 text-sm">Combined Effort</div>
          <div className="text-gray-500 text-xs">Teamwork</div>
        </div>
      </div>
    </div>
  );
};
