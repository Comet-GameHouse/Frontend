import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ButtonProps } from './types'
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_DESIGNS } from './data'

export const Button = ({
  variant = 'primary',
  size = 'md',
  design = 'pixel',
  loading = false,
  icon,
  iconPosition = 'left',
  pulse = false,
  glow = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = `cursor-pointer rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:brightness-110 active:translate-y-0.5 ${pulse ? 'animate-pulse' : ''} ${glow ? 'shadow-lg shadow-current' : ''}`

  const buttonStyles = `
    ${baseStyles}
    ${BUTTON_VARIANTS[variant]}
    ${BUTTON_SIZES[size]}
    ${BUTTON_DESIGNS[design]}
    ${className}
  `

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <FontAwesomeIcon icon="spinner" className="animate-spin" />
          <span>Loading...</span>
        </>
      )
    }

    return (
      <>
        {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} />}
        <span className="whitespace-nowrap">{children}</span>
        {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} />}
      </>
    )
  }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={buttonStyles}
    >
      {renderContent()}
    </button>
  )
}