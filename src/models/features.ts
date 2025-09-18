import { LocaleString } from "./type"

export interface Skill {
  icon: string
  title: LocaleString
  description: LocaleString
}

export interface CTAButton {
  text: LocaleString
  variant: string
}

export interface FeaturesContent {
  title: LocaleString
  description: LocaleString
  cta: {
    title: LocaleString
    description: LocaleString
    buttons: CTAButton[]
  }
}
