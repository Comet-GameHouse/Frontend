import { useState } from 'react';
import { useAuth } from '@contexts';
import { SocialSignIn } from '@components';
import { SignUpHeader } from './SignUpHeader';
import { SignUpForm } from './SignUpForm';
import { SignUpFooter } from './SignUpFooter';
import type { SignUpFormData } from './types';

export const SignUpPage = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signUp(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
    } catch (error) {
      // Error handled by apiService
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      <SignUpHeader />
      <SignUpForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <SocialSignIn dataAosDelay={550} />
      <SignUpFooter />
    </div>
  );
};
