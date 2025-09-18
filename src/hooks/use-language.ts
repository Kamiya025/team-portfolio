"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { locales } from "@/i18n"

export function useLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  useEffect(() => {
    // Kiểm tra localStorage khi component mount
    const savedLanguage = localStorage.getItem("preferred-language")

    if (savedLanguage && locales.includes(savedLanguage as any)) {
      // Nếu có ngôn ngữ đã lưu và khác với ngôn ngữ hiện tại
      if (savedLanguage !== locale) {
        const newPath = pathname.replace(`/${locale}`, `/${savedLanguage}`)
        router.replace(newPath)
      }
    } else {
      // Nếu chưa có ngôn ngữ được lưu, lưu ngôn ngữ hiện tại
      localStorage.setItem("preferred-language", locale)
    }
  }, [locale, pathname, router])

  const changeLanguage = (newLocale: string) => {
    if (locales.includes(newLocale as any)) {
      localStorage.setItem("preferred-language", newLocale)
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath)
    }
  }

  return {
    currentLocale: locale,
    changeLanguage,
    availableLocales: locales,
  }
}
