import { useState } from 'react';
import { useAuth } from '@contexts';
import { SocialSignIn } from '@components';
import { SignInHeader } from './SignInHeader';
import { SignInForm } from './SignInForm';
import { SignInFooter } from './SignInFooter';

export const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(formData.email, formData.password);
    } catch (error) {
      // Error handled by apiService
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <SignInHeader />
      <SignInForm
        formData={formData}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <SocialSignIn dataAosDelay={400} />
      <SignInFooter />
    </div>
  );
};
