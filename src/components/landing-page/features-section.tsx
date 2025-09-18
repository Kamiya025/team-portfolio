"use client"

import { Icon } from "../icon"
import { skills, featuresContent } from "@/data"
import type { Skill } from "@/models"
import { Button, Section, Container, Heading } from "../ui"

export function FeaturesSection() {
  return (
    <Section id="services" variant="gradient" size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="default" size="lg" className="mb-6">
            {featuresContent.title}
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {featuresContent.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-palette-soft rounded-2xl p-8 liquid-glass">
            <Heading level={3} variant="default" size="md" className="mb-4">
              {featuresContent.cta.title}
            </Heading>
            <p className="text-muted-foreground mb-6">
              {featuresContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {featuresContent.cta.buttons.map((button, index) => (
                <Button key={index} variant="glass" size="md">
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="relative group hover:rotate-3 odd:hover:-rotate-3">
      <div
        className="absolute top-24 mx-auto right-0 left-0 z-20
           w-36 aspect-square liquid-glass !border-0 !border-t rounded-full p-2 group-hover:scale-125 "
      >
        <div
          className="flex items-center justify-center 
          rounded-full bg-gradient-palette w-full aspect-square
          group-hover:animate-pulse"
        >
          <Icon name={skill.icon} className="size-20 text-white" />
        </div>
      </div>
      <div
        className="relative group px-8 pb-12 rounded-4xl
        transition-all duration-300 liquid-glass animate-fade-in-up"
      >
        <div className="pt-36">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">
            {skill.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  )
}
