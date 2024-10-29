import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border border-gray-700 bg-gray-800 shadow-sm ${className}`} {...props} />
))

Card.displayName = 'Card'

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props} />
))

CardHeader.displayName = 'CardHeader'

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className = '', ...props }, ref) => (
  <h3 ref={ref} className={`text-lg font-semibold text-white ${className}`} {...props} />
))

CardTitle.displayName = 'CardTitle'

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }
