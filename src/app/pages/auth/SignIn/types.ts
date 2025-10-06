export interface SignInFormData {
  email: string
  password: string
}

export interface SignInProps {}

export interface SignInFormProps {
  formData: {
    email: string
    password: string
  }
  loading: boolean
  onChange: (field: string, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}