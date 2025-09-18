import { LocaleString } from "./type"

export interface TeamMember {
  name: LocaleString
  role: LocaleString
  avatar: string
  skills: string[]
  description: LocaleString
  funFact?: LocaleString
}

export interface Team {
  name: LocaleString
  slogan: LocaleString
}

export interface TeamStat {
  value: LocaleString
  label: LocaleString
  gradient: string
}

export interface HeroStat {
  value: LocaleString
  label: LocaleString
  path?: string
}
