import { LocaleString } from "./type"

export interface TeamMember {
  name: string
  role: string
  avatar: string
  skills: string[]
  description: string
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
