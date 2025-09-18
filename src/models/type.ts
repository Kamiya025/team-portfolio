import { Locale } from "next-intl"

export type LocaleString =
  | {
      [key in Locale]: string
    }
  | string
