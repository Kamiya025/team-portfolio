"use client"

import { useEffect } from "react"
import { Locale, locales } from "@/i18n"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Kiểm tra localStorage khi component mount
    const savedLanguage = localStorage.getItem("preferred-language")

    if (!savedLanguage || !locales.includes(savedLanguage as Locale)) {
      // Nếu chưa có ngôn ngữ được lưu, lưu ngôn ngữ mặc định
      localStorage.setItem("preferred-language", "vi")
    }
  }, [])

  return <>{children}</>
}
