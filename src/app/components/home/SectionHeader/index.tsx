import type { SectionHeaderProps } from './types';

export const SectionHeader = ({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div
      className={`text-center mb-8 sm:mb-12 lg:mb-16 ${className}`}
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-3 sm:mb-4">
        {title}
      </h2>
      <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};
