import { Input, Button } from '@components';
import type { SignUpFormData } from './types';

interface SignUpFormProps {
  formData: SignUpFormData;
  loading: boolean;
  onChange: (field: keyof SignUpFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SignUpForm = ({
  formData,
  loading,
  onChange,
  onSubmit,
}: SignUpFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div data-aos="fade-up" data-aos-delay="200">
          <Input
            label="First Name"
            icon="user"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            required
            variant="primary"
            inputSize="md"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="250">
          <Input
            label="Last Name"
            icon="user"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            required
            variant="primary"
            inputSize="md"
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
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

      <div data-aos="fade-up" data-aos-delay="350">
        <Input
          label="Password"
          icon="lock"
          type="password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          required
          variant="primary"
          inputSize="md"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Input
          label="Confirm Password"
          icon="lock"
          type="password"
          placeholder="Confirm your password"
          value={formData.passwordConfirm}
          onChange={(e) => onChange('passwordConfirm', e.target.value)}
          required
          variant="primary"
          inputSize="md"
        />
      </div>

      <div
        className="flex items-start space-x-3"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
          required
        />
        <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          I agree to the{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </a>
        </span>
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={loading}
          icon="gamepad"
          className="w-full"
        >
          Join Now
        </Button>
      </div>
    </form>
  );
};
