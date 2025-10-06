import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { apiService } from '@services/apiService';
import type { User, AuthContextType } from './types';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>({
    id: 'aa',
    username: 'Supercometstar',
    email: 'cometstar864@gmail.com',
    avatar: '',
    coins: 8342,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      const response = await apiService.get<{ user: User }>('/auth/me');
      if (response.success && response.data) {
        setUser(response.data.user);
      } else {
        localStorage.removeItem('token');
      }
    }
    setIsLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await apiService.post<{ user: User; token: string }>(
      '/auth/signin',
      {
        email,
        password,
      }
    );

    if (response.success && response.data) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    }
    setIsLoading(false);
    return response;
  };

  const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    const response = await apiService.post<{ user: User; token: string }>(
      '/auth/signup',
      {
        firstName,
        lastName,
        email,
        password,
      }
    );

    if (response.success && response.data) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
    }
    setIsLoading(false);
    return response;
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  };

  const value: AuthContextType = {
    user,
    isLoading,
    signIn,
    signUp,
    signOut,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
