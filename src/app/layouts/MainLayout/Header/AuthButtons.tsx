import { useNavigate } from 'react-router-dom'
import { Button } from '@components'

export const AuthButtons = () => {
  const navigate = useNavigate()

  return (
    <div 
      className="flex items-center space-x-2 sm:space-x-3"
      data-aos="fade-left"
      data-aos-duration="400"
      data-aos-delay="200"
    >
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate('/signin')}
        className="hidden xs:flex"
      >
        Sign In
      </Button>
      <Button
        variant="primary"
        size="sm"
        onClick={() => navigate('/signup')}
        className="text-xs sm:text-sm"
      >
        Join Free
      </Button>
    </div>
  )
}