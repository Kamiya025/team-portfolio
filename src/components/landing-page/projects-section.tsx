"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { featuredProjects } from "@/data"
import { Project } from "@/models"
import { useState } from "react"
import { useTranslations } from "next-intl"

// Project Status Badge Component
const ProjectStatusBadge = ({ status }: { status: Project["status"] }) => {
  const t = useTranslations("projects")

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "upcoming":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return t("status.completed")
      case "in-progress":
        return t("status.in-progress")
      case "upcoming":
        return t("status.upcoming")
      default:
        return t("status.unknown")
    }
  }

  return (
    <Badge className={`${getStatusColor(status)} border backdrop-blur-sm`}>
      {getStatusText(status)}
    </Badge>
  )
}

// Category Icon Component
const CategoryIcon = ({ category }: { category: Project["category"] }) => {
  const getIcon = (category: Project["category"]) => {
    switch (category) {
      case "web":
        return "🌐"
      case "mobile":
        return "📱"
      case "ai":
        return "🤖"
      case "other":
        return "🎮"
      default:
        return "🌐"
    }
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl">
      {getIcon(category)}
    </div>
  )
}

// GitHub Button Component
const GitHubButton = ({
  githubUrl,
  isVisible,
}: {
  githubUrl?: string
  isVisible: boolean
}) => {
  if (!githubUrl) return null

  return (
    <div
      className={`absolute bottom-4 right-4 transition-all duration-500 ${
        isVisible
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-50 rotate-45"
      }`}
    >
      <Button
        size="sm"
        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm shadow-lg"
        onClick={() => window.open(githubUrl, "_blank")}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </Button>
    </div>
  )
}

// Technology Tags Component
const TechnologyTags = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 px-2">
      {technologies.slice(0, 3).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-md"
        >
          {tech}
        </span>
      ))}
      {technologies.length > 3 && (
        <span className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-md">
          +{technologies.length - 3}
        </span>
      )}
    </div>
  )
}

// Project Stats Component
const ProjectStats = ({
  duration,
  teamSize,
  client,
}: {
  duration: string
  teamSize: number
  client?: string
}) => {
  return (
    <div className="px-6 pb-6">
      <div className="flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            {teamSize} người
          </span>
        </div>
        {client && <span className="text-blue-400 font-medium">{client}</span>}
      </div>
    </div>
  )
}

// Project Image Header Component
const ProjectImageHeader = ({
  project,
  isHovered,
}: {
  project: Project
  isHovered: boolean
}) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center">
        <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          {project.category === "web" && "🌐"}
          {project.category === "mobile" && "📱"}
          {project.category === "ai" && "🤖"}
          {project.category === "other" && "🎮"}
        </div>
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <ProjectStatusBadge status={project.status} />
        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
          {project.year}
        </Badge>
      </div>

      {/* GitHub Button */}
      <GitHubButton githubUrl={project.githubUrl} isVisible={isHovered} />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
      </div>
    </div>
  )
}

// Project Header Component
const ProjectHeader = ({ project }: { project: Project }) => {
  return (
    <div className="relative p-6 pb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <CategoryIcon category={project.category} />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <ProjectStatusBadge status={project.status} />
              <span className="text-xs text-white/50">{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-4 h-16 overflow-hidden line-clamp-3">
        {project.description}
      </p>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  return (
    <div
      className="break-inside-avoid mb-8 group h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-[1.02] hover:rotate-1 h-full flex flex-col">
        <ProjectImageHeader project={project} isHovered={isHovered} />
        <div className="flex-1 flex flex-col">
          <ProjectHeader project={project} />
          <TechnologyTags technologies={project.technologies} />
          <div className="flex-1"></div>
          <ProjectStats
            duration={project.duration}
            teamSize={project.teamSize}
            client={project.client}
          />
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700 pointer-events-none" />
      </Card>
    </div>
  )
}

// Category Filter Component
const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: Array<{ id: string; label: string; count: number }>
  selectedCategory: string
  onCategoryChange: (category: string) => void
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? "bg-white text-gray-900 shadow-lg"
              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
          }`}
        >
          {category.label} ({category.count})
        </button>
      ))}
    </div>
  )
}

// Section Header Component
const SectionHeader = () => {
  const t = useTranslations("projects")

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass sw-hologram sw-holo-flicker mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span className="text-sm font-semibold tracking-wide text-white/90">
          {t("subtitle")}
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        {t("title")}
      </h2>

      <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
        {t("description")}
      </p>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const t = useTranslations("projects")

  const categories = [
    { id: "all", label: "Tất cả", count: featuredProjects.length },
    {
      id: "web",
      label: t("categories.web"),
      count: featuredProjects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      label: t("categories.mobile"),
      count: featuredProjects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      label: t("categories.ai"),
      count: featuredProjects.filter((p) => p.category === "ai").length,
    },
    {
      id: "other",
      label: t("categories.desktop"),
      count: featuredProjects.filter((p) => p.category === "other").length,
    },
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === selectedCategory
        )

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
