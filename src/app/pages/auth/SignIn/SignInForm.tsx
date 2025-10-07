import { Input, Button } from '@components';
import type { SignInFormData } from './types';

interface SignInFormProps {
  formData: SignInFormData;
  loading: boolean;
  onChange: (field: keyof SignInFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SignInForm = ({
  formData,
  loading,
  onChange,
  onSubmit,
}: SignInFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      <div data-aos="fade-up" data-aos-delay="200">
        <Input
          label="Email Address"
          icon="envelope-open"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
          variant="primary"
          inputSize="md"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="250">
        <Input
          label="Password"
          icon="lock"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          required
          variant="primary"
          inputSize="md"
        />
      </div>

      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="300"
      >
        <label className="flex items-center order-2 sm:order-1">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-300">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors order-1 sm:order-2 text-center sm:text-right"
        >
          Forgot password?
        </a>
      </div>

      <div data-aos="fade-up" data-aos-delay="350">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={loading}
          icon="rocket"
          className="w-full"
        >
          Sign In to Play
        </Button>
      </div>
    </form>
  );
};
