"use client"

import { aboutContent, technologies, values } from "@/data"
import { Card, Container, Heading, Section } from "../ui"
import { ValueIcon } from "../value-icon"

export function AboutSection() {
  return (
    <Section id="about" variant="muted" size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="default" size="lg" className="mb-6">
            {aboutContent.title}
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="animate-fade-in-left">
            <Heading level={3} variant="default" size="md" className="mb-6">
              {aboutContent.story.title}
            </Heading>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="animate-fade-in-right">
            <Card variant="gradient" className="p-8">
              <Heading level={3} variant="default" size="sm" className="mb-6">
                {aboutContent.mission.title}
              </Heading>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {aboutContent.mission.description}
              </p>
              <div className="space-y-4">
                {aboutContent.mission.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-palette-1 rounded-full"></div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <Heading
            level={3}
            variant="default"
            size="md"
            className="text-center mb-12"
          >
            Giá trị cốt lõi
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                variant="bordered"
                className="text-center p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-palette-1/10 text-palette-1 rounded-lg mx-auto mb-4">
                  <ValueIcon icon={value.icon} />
                </div>
                <Heading level={4} variant="default" size="sm" className="mb-3">
                  {value.title}
                </Heading>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <Technologies />
      </Container>
    </Section>
  )
}
const Technologies = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-foreground text-center mb-12">
        Công nghệ chúng tôi sử dụng
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-medium">{tech.name}</span>
              <span className="font-semibold text-slate-500 dark:text-slate-50">
                {tech.level}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-gradient-palette h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
