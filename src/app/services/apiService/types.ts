export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface ApiConfig {
  baseURL: string
  timeout: number
}