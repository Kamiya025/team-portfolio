import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "default" | "gradient" | "accent"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  children: React.ReactNode
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = 2,
      variant = "default",
      size = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "font-bold tracking-tight"

    const variants = {
      default: "text-foreground",
      gradient:
        "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",
      accent: "text-palette-1",
    }

    const sizes = {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl md:text-5xl",
      xl: "text-5xl md:text-6xl",
      "2xl": "text-6xl md:text-7xl",
    }

    const commonProps = {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      ref,
      ...props,
    }

    switch (level) {
      case 1:
        return <h1 {...commonProps}>{children}</h1>
      case 2:
        return <h2 {...commonProps}>{children}</h2>
      case 3:
        return <h3 {...commonProps}>{children}</h3>
      case 4:
        return <h4 {...commonProps}>{children}</h4>
      case 5:
        return <h5 {...commonProps}>{children}</h5>
      case 6:
        return <h6 {...commonProps}>{children}</h6>
      default:
        return <h2 {...commonProps}>{children}</h2>
    }
  }
)

Heading.displayName = "Heading"

export { Heading }
