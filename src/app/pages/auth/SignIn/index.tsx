import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@contexts'
import { ROUTES } from '@constants'
import { LoadingSpinner } from '@components'

export const SignIn = () => {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()
  console.log(user, isLoading)

  useEffect(() => {
    // If user is already signed in (via token auto-signin), redirect to dashboard
    if (user) {
      navigate(ROUTES.DASHBOARD, { replace: true })
    }
  }, [user, navigate])

  // Show loading while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
        <p className="ml-4">Checking authentication...</p>
      </div>
    )
  }

  if (user) {
    return <LoadingSpinner />
  }

  return (
    <div>
      SignIn Page
      {/* Your sign in form will go here */}
    </div>
  )
}