import { getRequestConfig } from "next-intl/server"

// Các ngôn ngữ được hỗ trợ
export const locales = ["vi", "en"] as const
export type Locale = (typeof locales)[number]

// Lấy locale từ localStorage hoặc sử dụng mặc định
function getLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("preferred-language")
    if (saved && locales.includes(saved as Locale)) {
      return saved as Locale
    }
  }
  return "vi" // Mặc định là tiếng Việt
}

export default getRequestConfig(async () => {
  const locale = getLocale()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
