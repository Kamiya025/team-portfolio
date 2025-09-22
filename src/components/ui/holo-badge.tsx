import { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const holoBadgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full glass sw-hologram sw-holo-flicker",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-5 py-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const holoBadgeTextVariants = cva("font-semibold tracking-wide text-white/90", {
  variants: {
    size: {
      sm: "text-xs sm:text-sm",
      md: "text-xs sm:text-sm",
      lg: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface HoloBadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof holoBadgeVariants> {
  withDot?: boolean
  dotColorClassName?: string
  color?: "default"|"emerald"|"blue"|"cyan"|"purple"|"pink"|"amber"|"red"|"gradient"
}

export const HoloBadge = forwardRef<HTMLDivElement, HoloBadgeProps>(
  (
    {
      className,
      children,
      size = "md",
      withDot = true,
      dotColorClassName,
      color = "default",
      ...props
    }, ref
  ) => {
    const colorToDotClass: Record<NonNullable<HoloBadgeProps["color"]>, string> = {
      default: "bg-emerald-400",
      emerald: "bg-emerald-400",
      blue: "bg-blue-400",
      cyan: "bg-cyan-400",
      purple: "bg-purple-400",
      pink: "bg-pink-400",
      amber: "bg-amber-400",
      red: "bg-red-400",
      gradient: "bg-gradient-to-r from-blue-400 to-cyan-400",
    }

    const resolvedDotColorClassName = dotColorClassName ?? colorToDotClass[color]

    return (
      <div
        ref={ref}
        className={cn(holoBadgeVariants({ size }), className)}
        {...props}
      >
        {withDot && (
          <span
            className={cn(
              "w-2 h-2 rounded-full animate-pulse",
              resolvedDotColorClassName
            )}
          />
        )}
        <span
          className={cn(holoBadgeTextVariants({ size }))}
        >
          {children}
        </span>
      </div>
    )
  }
)

HoloBadge.displayName = "HoloBadge"
