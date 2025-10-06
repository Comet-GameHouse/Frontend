import type { ReactNode } from 'react'

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: DialogSize
  showCloseButton?: boolean
  overlayBlur?: boolean
  overlayDark?: boolean
  preventClose?: boolean
}