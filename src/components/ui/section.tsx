import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "gradient" | "glass"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", size = "lg", children, ...props }, ref) => {
    const baseStyles = "w-full"
    
    const variants = {
      default: "",
      muted: "bg-muted/30",
      gradient: "bg-gradient-to-br from-background to-muted/20",
      glass: "bg-white/5 backdrop-blur-sm border border-white/10"
    }
    
    const sizes = {
      sm: "py-12",
      md: "py-16",
      lg: "py-20",
      xl: "py-24"
    }

    return (
      <section
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  children: React.ReactNode
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    const baseStyles = "mx-auto px-4 sm:px-6 lg:px-8"
    
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-8xl",
      full: "max-w-none"
    }

    return (
      <div
        className={cn(
          baseStyles,
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Section, Container }
