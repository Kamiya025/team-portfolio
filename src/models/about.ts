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
  title: LocaleString
  description: LocaleString
  story: {
    title: LocaleString
    paragraphs: LocaleString[]
  }
  mission: {
    title: LocaleString
    description: LocaleString
    points: LocaleString[]
  }
}
