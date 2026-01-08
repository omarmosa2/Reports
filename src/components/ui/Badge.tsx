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
    secondary: 'bg-card text-primary',
    success: 'bg-green-500/10 text-green-600 dark:text-green-400',
    warning: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  }

  return (
    <span className={`px-3 py-1 text-sm rounded-full font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}