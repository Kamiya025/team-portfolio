import {
  AboutIcon,
  BackendIcon,
  ContactIcon,
  DataIcon,
  DesignIcon,
  DevOpsIcon,
  FrontendIcon,
  HomeIcon,
  MenuCloseIcon,
  MenuIcon,
  MobileIcon,
  SkillsIcon,
  TeamIcon,
} from "@/icons"

interface IconProps {
  name: string
  className?: string
}

const iconMap = {
  home: HomeIcon,
  about: AboutIcon,
  skills: SkillsIcon,
  team: TeamIcon,
  contact: ContactIcon,
  menu: MenuIcon,
  "menu-close": MenuCloseIcon,
  frontend: FrontendIcon,
  backend: BackendIcon,
  mobile: MobileIcon,
  design: DesignIcon,
  devops: DevOpsIcon,
  data: DataIcon,
} as const

export function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} />
}
