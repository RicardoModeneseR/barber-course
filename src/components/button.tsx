import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'flex gap-2.5 p-2 justify-center items-center rounded shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-secondary-foreground',
        border: 'border-2 border-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button }