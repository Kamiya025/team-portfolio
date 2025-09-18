"use client"

import { useState } from "react"
import Image from "next/image"
import { featuredProjects, projectsContent } from "@/data"
import { Project } from "@/models"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "Tất cả", count: featuredProjects.length },
    {
      id: "web",
      label: "Web",
      count: featuredProjects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: featuredProjects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "ai",
      label: "AI",
      count: featuredProjects.filter((p) => p.category === "ai").length,
    },
    {
      id: "other",
      label: "Khác",
      count: featuredProjects.filter((p) => p.category === "other").length,
    },
  ]

  const filteredProjects =
    selectedCategory === "all"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === selectedCategory
        )

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
        return "Hoàn thành"
      case "in-progress":
        return "Đang phát triển"
      case "upcoming":
        return "Sắp ra mắt"
      default:
        return "Không xác định"
    }
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass sw-hologram sw-holo-flicker mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {projectsContent.subtitle}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {projectsContent.title}
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {projectsContent.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    {project.category === "web" && "🌐"}
                    {project.category === "mobile" && "📱"}
                    {project.category === "ai" && "🤖"}
                    {project.category === "other" && "🎮"}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {project.year}
                  </Badge>
                </div>

                {/* Hover Actions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{project.duration}</span>
                  <span>{project.teamSize} người</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="glass-button gradient-border px-8 py-4 rounded-xl text-lg font-semibold text-white"
          >
            {projectsContent.ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
