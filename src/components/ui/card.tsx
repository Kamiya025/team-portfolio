import { HTMLAttributes, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-xl transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-card border border-border shadow-sm hover:shadow-md",
      glass: "liquid-glass bg-white/10 backdrop-blur-sm border border-white/20",
      gradient: "bg-gradient-palette-soft border border-palette-2/20 shadow-lg",
      bordered:
        "bg-card border-2 border-palette-1/50 hover:border-palette-1 shadow-lg hover:shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
)

CardHeader.displayName = "CardHeader"

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = "CardContent"

export { Card, CardHeader, CardContent }
