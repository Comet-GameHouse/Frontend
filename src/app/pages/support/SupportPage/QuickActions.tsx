import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';

interface Action {
  icon: IconName;
  text: string;
  path: string;
}

interface Props {
  actions: Action[];
}

export const QuickActions = ({ actions }: Props) => {
  return (
    <div
      className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6"
      data-aos="fade-up"
    >
      <h3 className="text-lg font-semibold text-white text-center mb-6 font-orbitron">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Link
            key={action.text}
            to={action.path}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center text-center p-4 bg-gray-800/20 border border-gray-700/20 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group hover:scale-[1.02]"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon
                icon={action.icon}
                className="text-blue-400 text-sm"
              />
            </div>
            <span className="text-white text-sm font-medium leading-tight">
              {action.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
