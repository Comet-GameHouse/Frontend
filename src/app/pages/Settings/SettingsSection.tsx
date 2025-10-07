import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface SettingsSectionProps {
  title: string;
  description: string;
  icon: IconProp;
  children: React.ReactNode;
}

export const SettingsSection = ({
  title,
  description,
  icon,
  children,
}: SettingsSectionProps) => {
  return (
    <div
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8"
      data-aos="fade-up"
    >
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <FontAwesomeIcon
            icon={icon}
            className="text-white text-lg sm:text-xl"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};
