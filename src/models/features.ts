export interface Skill {
  icon: string
  title: string
  description: string
}

export interface CTAButton {
  text: string
  variant: string
}

export interface FeaturesContent {
  title: string
  description: string
  cta: {
    title: string
    description: string
    buttons: CTAButton[]
  }
}
