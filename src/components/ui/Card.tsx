import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border border-gray-700 bg-gray-800 shadow-sm ${className}`} {...props} />
))

Card.displayName = 'Card'

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props} />
))

CardContent.displayName = 'CardContent'

export { Card, CardContent }
