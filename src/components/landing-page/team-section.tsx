"use client"

import type { TeamMember } from "@/models"
import { teamMembers, teamStats } from "@/data"
import Image from "next/image"
import { Badge } from "../ui"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedString } from "@/utils"

export function TeamSection() {
  const t = useTranslations("team")
  const locale = useLocale()
  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden starfield sw-scanlines"
    >
      {/* Starfield overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_500px_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_80%_70%,rgba(34,211,238,0.1),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/20 dark:bg-blue-900/20 text-blue-300 text-sm font-medium mb-6 sw-neon-border">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            {t("badge")}
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            {t("title")}
          </h2>
          <div className="mx-auto w-40 md:w-52 rounded-full sw-saber-underline mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Team Zigzag Layout */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              animationDelay={index * 0.2}
              t={t}
            />
          ))}
        </div>

        {/* Modern Team Stats */}
        <div className="mt-24 bg-white/50 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-6">
              {t("whyChooseUs.title")}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t("whyChooseUs.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const statKeys = [
                "commitment",
                "methodology",
                "support",
                "quality",
              ]
              const statKey = statKeys[index]
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getLocalizedString(stat.value, locale)}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {t(`stats.${statKey}`)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
const TeamMember = ({
  member,
  animationDelay = 1,
  t,
}: {
  member: TeamMember
  animationDelay?: number
  t: (key: string) => string
}) => {
  return (
    <div
      className={`relative flex-1 flex flex-col group md:flex-row items-center gap-8 
                even:md:flex-row-reverse even:text-right
                rounded-3xl p-6 md:p-8 border border-slate-200/10 dark:border-blue-600/30
                bg-black/30 dark:bg-slate-900/30 backdrop-blur-xl shadow-2xl
                hover:shadow-blue-500/30 hover:ring-2 hover:ring-blue-400/30 transition
                sw-hologram`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex-shrink-0">
        <div className="group relative">
          <div
            className="relative w-44 h-64 p-2 transform 
                      group-even:rounded-tl-[6rem] group-even:rounded-br-[6rem] group-even:rounded-tr-lg group-even:rounded-bl-lg
                      group-odd:rounded-tr-[6rem] group-odd:rounded-bl-[6rem] group-odd:rounded-tl-lg group-odd:rounded-br-lg
                      bg-gradient-to-br from-blue-600/60 via-cyan-500/60 to-blue-700/60 
                      group-hover:scale-110 transition-all duration-500 shadow-2xl sw-neon-border"
          >
            <div
              className="absolute bottom-0 left-0 z-10 w-full h-full transform origin-center p-2 overflow-hidden
                        group-even:rounded-tl-[7rem] group-even:rounded-br-[7rem] group-even:rounded-tr-xl group-even:rounded-bl-xl
                        group-odd:rounded-tr-[7rem] group-odd:rounded-bl-[7rem] group-odd:rounded-tl-xl group-odd:rounded-br-xl"
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={192}
                height={194}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex-1 !h-full flex-shrink-0">
        <div className="flex-1 h-full flex flex-col gap-5 group-odd:items-start group-even:items-end">
          <div className="flex-1 flex flex-col group-odd:items-start group-even:items-end">
            <div
              className="min-w-60 w-fit flex flex-col gap-2 px-5 py-3 rounded-2xl 
                        border-1 border-blue-400/40 liquid-glass shadow-2xl mb-4 rotate-[-1deg]
                        group-even:md:rotate-[1deg] group-even:md:self-end
                        md:self-start self-center sw-neon-border sw-holo-flicker"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {member.name}
              </h3>
              <p className="text-xs">{member.role}</p>
            </div>
            <div>
              <div className="max-w-2xl line-clamp-3">{member.description}</div>
            </div>
          </div>
          {/* Skills Section */}
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2 group-odd:justify-start group-even:justify-end">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              {t("skills")}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start group-even:md:justify-end gap-2">
              {member.skills.map((skill, index) => (
                <Badge
                  key={skill + index}
                  variant="primary"
                  size="sm"
                  className="sw-neon-border hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
