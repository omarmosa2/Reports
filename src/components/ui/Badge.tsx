import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-primary',
    primary: 'bg-accent-10 text-accent',
    secondary: 'bg-card text-primary border border-color',
    success: 'text-success',
    warning: 'text-warning'
  }

  const variantStyles = {
    success: {
      backgroundColor: 'var(--color-success-bg)',
      color: 'var(--color-success)'
    },
    warning: {
      backgroundColor: 'var(--color-warning-bg)',
      color: 'var(--color-warning)'
    }
  }

  const hasCustomStyle = variant === 'success' || variant === 'warning'

  return (
    <span 
      className={`px-3 py-1 text-sm rounded-full font-medium ${variants[variant]} ${className}`}
      style={hasCustomStyle ? variantStyles[variant] : undefined}
    >
      {children}
    </span>
  )
}

// Provide explicit default export to help bundlers and HMR consistency
export default Badge