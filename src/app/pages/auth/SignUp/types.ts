export interface SignUpFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

export interface SignUpFormProps {
  formData: SignUpFormData
  loading: boolean
  onChange: (field: keyof SignUpFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}