"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { EnglishFlag, VietnamFlagIcon } from "@/icons"
import { useLocale } from "next-intl"
import React from "react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleToggle = () => {
    const newLocale = locale === "vi" ? "en" : "vi"
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center">
      {/* Neumorphic Toggle Switch */}
      <button
        onClick={handleToggle}
        className={`relative w-20 h-10 rounded-4xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer bg-white/20 hover:bg-white/30`}
        role="switch"
        aria-checked={locale === "en"}
        aria-label="Toggle language"
      >
        <NodeSwitch locale={locale} />
      </button>
    </div>
  )
}
const NodeSwitch = ({ locale }: { locale: string }) => {
  return (
    <div
      className={`absolute top-0 w-11 aspect-square
              rounded-full duration-150 ease-linear transform 
              ${locale === "vi" ? "left-0.5" : "right-0.5"}`}
    >
      <div
        className="flex-1 flex items-center justify-center text-md text-center active:switch-handle 
                transition-all duration-500 font-semibold scale-90"
      >
        {locale === "vi" ? (
          <VietnamFlagIcon className="size-10" />
        ) : (
          <EnglishFlag className="size-10" />
        )}
      </div>
    </div>
  )
}
