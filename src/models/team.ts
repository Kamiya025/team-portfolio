export interface TeamMember {
  name: string
  role: string
  avatar: string
  skills: string[]
  description: string
}

export interface Team {
  name: string
  slogan: string
}

export interface TeamStat {
  value: string
  label: string
  gradient: string
}

export interface HeroStat {
  value: string
  label: string
}
