"use client"

import { Icon } from "../icon"
import { skills } from "@/data"
import type { Skill } from "@/models"
import { Button, Section, Container, Heading } from "../ui"
import { useTranslations } from "next-intl"

export function FeaturesSection() {
  const t = useTranslations("features")
  return (
    <Section id="services" variant="gradient" size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="default" size="lg" className="mb-6">
            {t("title")}
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-palette-soft rounded-2xl p-8 liquid-glass">
            <Heading level={3} variant="default" size="md" className="mb-4">
              {t("cta.title")}
            </Heading>
            <p className="text-muted-foreground mb-6">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="md">
                {t("cta.buttons.portfolio")}
              </Button>
              <Button variant="glass" size="md">
                {t("cta.buttons.contact")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
  const t = useTranslations("features")
  const skillKeys = [
    "frontend",
    "backend",
    "mobile",
    "design",
    "devops",
    "data",
  ]
  const skillKey = skillKeys[index]
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
            {t(`${skillKey}.title`)}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t(`${skillKey}.description`)}
          </p>
        </div>
      </div>
    </div>
  )
}
