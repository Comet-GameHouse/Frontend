import { notificationRef } from '@contexts/NotificationContext';
import type { ApiResponse, HttpMethod } from './types';
import { DEFAULT_API_CONFIG, HTTP_METHODS } from './data';

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = DEFAULT_API_CONFIG.baseURL;
  }

  private async request<T>(
    endpoint: string,
    method: HttpMethod = HTTP_METHODS.GET,
    data?: any
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('token');
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    if (data && (method === HTTP_METHODS.POST || method === HTTP_METHODS.PUT)) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || result.error || 'Request failed');
      }

      // Show success message from response if it exists
      if (result.message) {
        notificationRef.showNotification(result.message, 'success');
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';

      // Show error notification for all errors
      notificationRef.showNotification(errorMessage, 'error');

      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, HTTP_METHODS.GET);
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, HTTP_METHODS.POST, data);
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, HTTP_METHODS.PUT, data);
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, HTTP_METHODS.DELETE);
  }
}

export const apiService = new ApiService();
export type { ApiResponse } from './types';
