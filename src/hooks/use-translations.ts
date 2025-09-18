"use client"

import { useState, useEffect } from "react"
import { locales } from "@/i18n"

// Import messages
import viMessages from "../../messages/vi.json"
import enMessages from "../../messages/en.json"
import { Locale } from "@/i18n"

interface MessageValue {
  [key: string]: string | MessageValue
}

const messages: Record<Locale, MessageValue> = {
  vi: viMessages,
  en: enMessages,
}

export function useTranslations(namespace?: string) {
  const [currentLocale, setCurrentLocale] =
    useState<keyof typeof messages>("vi")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Lấy ngôn ngữ từ localStorage
    const saved = localStorage.getItem("preferred-language")
    if (saved && locales.includes(saved as Locale)) {
      setCurrentLocale(saved as keyof typeof messages)
    }
  }, [])

  const t = (key: string) => {
    if (!mounted) return key

    const messageObj = namespace
      ? (messages[currentLocale] as Record<string, MessageValue>)[namespace]
      : messages[currentLocale]

    if (!messageObj) return key

    const keys = key.split(".")
    let result: string | MessageValue | undefined = messageObj

    for (const k of keys) {
      if (typeof result === "object" && result !== null) {
        result = result[k]
      } else {
        result = undefined
        break
      }
      if (result === undefined) break
    }

    return typeof result === "string" ? result : key
  }

  const changeLanguage = (newLocale: string) => {
    if (locales.includes(newLocale as Locale)) {
      localStorage.setItem("preferred-language", newLocale)
      setCurrentLocale(newLocale as keyof typeof messages)
      // Reload trang để áp dụng ngôn ngữ mới
      window.location.reload()
    }
  }

  return {
    t,
    locale: currentLocale,
    changeLanguage,
    mounted,
  }
}
