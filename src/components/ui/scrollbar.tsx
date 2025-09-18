import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ScrollbarProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "animated" | "custom"
  children: React.ReactNode
}

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "",
      glass: "glass-scrollbar",
      animated: "animated-scrollbar",
      custom: "custom-scrollbar",
    }

    return (
      <div
        className={cn("overflow-auto", variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Scrollbar.displayName = "Scrollbar"

export { Scrollbar }
