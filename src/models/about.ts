import { LocaleString } from "./type"

export interface Value {
  icon: string
  title: LocaleString
  description: LocaleString
}

export interface Technology {
  name: string
  level: number
}

export interface AboutContent {
  description: LocaleString
  story: {
    paragraphs: LocaleString[]
  }
  mission: {
    description: LocaleString
    points: LocaleString[]
  }
}
