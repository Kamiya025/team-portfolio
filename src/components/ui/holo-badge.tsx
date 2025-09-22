import { forwardRef, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface HoloBadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Kích thước badge ảnh hưởng padding và cỡ chữ */
  size?: "sm" | "md" | "lg"
  /** Hiển thị chấm động ở bên trái */
  withDot?: boolean
  /** Lớp màu nền cho chấm động */
  dotColorClassName?: string
}

export const HoloBadge = forwardRef<HTMLDivElement, HoloBadgeProps>(
  (
    {
      className,
      children,
      size = "md",
      withDot = true,
      dotColorClassName = "bg-emerald-400",
      ...props
    },
    ref
  ) => {
    const sizeContainer = {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-5 py-2.5",
    }

    const sizeText = {
      sm: "text-xs sm:text-sm",
      md: "text-xs sm:text-sm",
      lg: "text-sm sm:text-base",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full glass sw-hologram sw-holo-flicker",
          sizeContainer[size],
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            className={cn(
              "w-2 h-2 rounded-full animate-pulse",
              dotColorClassName
            )}
          />
        )}
        <span
          className={cn(
            "font-semibold tracking-wide text-white/90",
            sizeText[size]
          )}
        >
          {children}
        </span>
      </div>
    )
  }
)

HoloBadge.displayName = "HoloBadge"
