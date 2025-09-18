export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  technologies: string[]
  category: "web" | "mobile" | "desktop" | "ai" | "other"
  status: "completed" | "in-progress" | "upcoming"
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  year: number
  client?: string
  teamSize: number
  duration: string
}

export interface ProjectsContent {
  title: string
  subtitle: string
  description: string
  ctaButton: {
    text: string
    href: string
  }
  viewAllButton: {
    text: string
    href: string
  }
}
