export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  urgency: 'low' | 'normal' | 'high';
  game?: string;
}
