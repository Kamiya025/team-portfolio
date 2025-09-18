export interface Value {
  icon: string
  title: string
  description: string
}

export interface Technology {
  name: string
  level: number
}

export interface AboutContent {
  title: string
  description: string
  story: {
    title: string
    paragraphs: string[]
  }
  mission: {
    title: string
    description: string
    points: string[]
  }
}
