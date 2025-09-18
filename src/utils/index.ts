import { LocaleString } from "@/models/type"
import { Locale } from "next-intl"

export const getLocalizedString = (
  localeString: LocaleString,
  locale: Locale
) => {
  if (!localeString) return ""
  if (typeof localeString === "string") return localeString
  return localeString[locale] ?? localeString[0]
}
