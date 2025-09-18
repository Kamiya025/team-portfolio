import { LocaleString } from "./type"

export interface FooterLink {
  name: LocaleString
  href: string
}

export interface SocialLink {
  name: LocaleString
  href: string
  icon: string
}

export interface FooterContent {
  companyName: LocaleString
  description: LocaleString
  copyright: LocaleString
}
