import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export function Card({ children, className = '', hover = true, style }: CardProps) {
  return (
    <div 
      className={`card ${hover ? '' : 'hover:transform-none hover:shadow-none'} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}