import { LocaleString } from './type'

export interface Project {
  id: string
  title: LocaleString
  description: LocaleString
  shortDescription: LocaleString
  image?: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other'
  status: 'completed' | 'in-progress' | 'upcoming'
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  year: number
  client?: string
  teamSize: number
  duration: LocaleString
}

export interface ProjectsContent {
  title: LocaleString
  subtitle: LocaleString
  description: LocaleString
  ctaButton: {
    text: LocaleString
    href: string
  }
  viewAllButton: {
    text: LocaleString
    href: string
  }
}
