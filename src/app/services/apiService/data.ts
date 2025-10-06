import type { ApiConfig, HttpMethod } from './types';

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000,
};

export const HTTP_METHODS: Record<string, HttpMethod> = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;
