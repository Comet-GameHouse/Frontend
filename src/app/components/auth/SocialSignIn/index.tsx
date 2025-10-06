import { Button } from '@components';
import { SOCIAL_PROVIDERS } from './data';

interface SocialSignInProps {
  dataAosDelay?: number;
}

export const SocialSignIn = ({ dataAosDelay = 400 }: SocialSignInProps) => {
  return (
    <div
      className="mt-6"
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay={dataAosDelay}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div
        className="mt-4 grid grid-cols-2 gap-3"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay={dataAosDelay + 50}
      >
        {SOCIAL_PROVIDERS.map((provider, index) => (
          <Button
            key={provider.name}
            variant={provider.variant}
            icon={provider.icon}
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-delay={dataAosDelay + (index + 1) * 50}
          >
            {provider.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
