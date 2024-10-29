import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, variant = 'primary', size = 'default', asChild = false, href, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-700 text-white hover:bg-gray-600',
      outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
      ghost: 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-8 px-3 py-1 text-xs',
      lg: 'h-12 px-6 py-3 text-base'
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (asChild && href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
