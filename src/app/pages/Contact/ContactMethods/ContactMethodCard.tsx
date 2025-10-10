import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { Button } from '@components';
import type { ContactMethod } from './types';

interface ContactMethodCardProp {
  method: ContactMethod;
  index: number;
}

export const ContactMethodCard = ({ method, index }: ContactMethodCardProp) => {
  return (
    <div
      key={method.id}
      className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 text-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
      data-aos="fade-up"
      data-aos-delay={100 + (index + 1) * 50}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
        <FontAwesomeIcon icon={method.icon} className="text-white text-lg" />
      </div>

      <h3 className="text-white font-orbitron text-lg font-bold mb-2">
        {method.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed lg:min-h-18">
        {method.description}
      </p>

      <div className="space-y-2 text-xs text-gray-500 mb-4">
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon="clock" />
          <span>{method.availability}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon icon="reply" />
          <span>{method.responseTime}</span>
        </div>
      </div>

      {method.link ? (
        <Link to={method.link}>
          <Button
            variant="primary"
            className="w-full justify-center border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
          >
            {method.action}
          </Button>
        </Link>
      ) : (
        <Button
          variant="primary"
          className="w-full justify-center border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
        >
          {method.action}
        </Button>
      )}
    </div>
  );
};
