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

export interface WebContent {
  teamName: LocaleString
  description: LocaleString
  copyright: LocaleString
}
