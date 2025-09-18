import { AnchorHTMLAttributes, forwardRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: "default" | "primary" | "secondary" | "underline"
  children: React.ReactNode
  external?: boolean
}

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", children, external = false, ...props }, ref) => {
    const baseStyles = "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
    
    const variants = {
      default: "text-foreground hover:text-blue-600 dark:hover:text-blue-400",
      primary: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium",
      secondary: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
      underline: "text-foreground hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline"
    }

    const linkContent = (
      <span
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
      >
        {children}
      </span>
    )

    if (external) {
      return (
        <a
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], className)}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {linkContent}
      </Link>
    )
  }
)

CustomLink.displayName = "Link"

export { CustomLink as Link }
