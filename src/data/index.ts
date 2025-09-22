// Team data
export { teamMembers, teamStats } from "./team"

// About data
export { coreValues, technologies, aboutContent } from "./about"

// Features data
export { skills, featuresContent } from "./features"

// Footer data
export { socialLinks, WebContent as footerContent } from "./config"

// Projects data
export { featuredProjects, projectsContent } from "./projects"

// Re-export types from models
export type {
  TeamMember,
  TeamStat,
  Value,
  Technology,
  AboutContent,
  Skill,
  CTAButton,
  FeaturesContent,
  FooterLink,
  SocialLink,
  FooterContent,
  Project,
  ProjectsContent,
} from "@/models"
