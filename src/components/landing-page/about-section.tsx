"use client"

import { aboutContent, coreValues, technologies } from "@/data"
import { Card, Container, Heading, Section } from "../ui"
import { ValueIcon } from "../value-icon"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedString } from "@/utils"

export function AboutSection() {
  const t = useTranslations("about")
  const locale = useLocale()
  const aboutDescription = aboutContent.description
  return (
    <Section id="about" variant="muted" size="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="default" size="lg" className="mb-6">
            {t("title")}
          </Heading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getLocalizedString(aboutDescription, locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <Story />
          <Mission />
        </div>

        <CoreValues />
        <Technologies />
      </Container>
    </Section>
  )
}
const Technologies = () => {
  const t = useTranslations("about")
  return (
    <div>
      <h3 className="text-3xl font-bold text-foreground text-center mb-12">
        {t("technologies.title")}
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
const CoreValues = () => {
  const t = useTranslations("about")
  const locale = useLocale()
  return (
    <div className="mb-20">
      <Heading
        level={3}
        variant="default"
        size="md"
        className="text-center mb-12"
      >
        {t("values.title")}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((value, index) => {
          return (
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
                {getLocalizedString(value.title, locale)}
              </Heading>
              <p className="text-muted-foreground leading-relaxed">
                {getLocalizedString(value.description, locale)}
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
const Mission = () => {
  const t = useTranslations("about")
  const locale = useLocale()
  const mission = aboutContent.mission
  return (
    <div className="animate-fade-in-right">
      <Card variant="gradient" className="p-8">
        <Heading level={3} variant="default" size="sm" className="mb-6">
          {t("mission.title")}
        </Heading>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {getLocalizedString(mission.description, locale)}
        </p>
        <div className="space-y-4">
          {mission.points.map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-palette-1 rounded-full"></div>
              <span className="text-foreground">
                {getLocalizedString(point, locale)}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
const Story = () => {
  const t = useTranslations("about")
  const locale = useLocale()
  const story = aboutContent.story
  return (
    <div className="animate-fade-in-left">
      <Heading level={3} variant="default" size="md" className="mb-6">
        {t("story.title")}
      </Heading>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {story.paragraphs.map((paragraph, index) => (
          <p key={index}>{getLocalizedString(paragraph, locale)}</p>
        ))}
      </div>
    </div>
  )
}
