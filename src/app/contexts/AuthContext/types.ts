import type { ApiResponse } from '@services';

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  coins: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (
    email: string,
    password: string
  ) => Promise<ApiResponse<{ user: User; token: string }>>;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<ApiResponse<{ user: User; token: string }>>;
  signOut: () => void;
  updateUser: (updates: Partial<User>) => void;
}
