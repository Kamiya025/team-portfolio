"use client"

import type { TeamMember } from "@/models"
import { teamMembers, teamStats } from "@/data"
import Image from "next/image"
import { Badge } from "../ui"
import { useLocale, useTranslations } from "next-intl"
import { getLocalizedString } from "@/utils"

export function TeamSection() {
  const t = useTranslations("team")
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
        <TeamStats />
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
  const locale = useLocale()
  return (
    <div
      className={`relative flex-1 flex flex-col group md:flex-row items-center gap-8 
                even:md:flex-row-reverse even:text-right
                rounded-3xl p-6 md:p-8 border border-slate-200/10 dark:border-blue-600/30
                bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-cyan-900/30 
                dark:from-slate-800/50 dark:via-blue-800/30 dark:to-cyan-800/40 
                backdrop-blur-xl shadow-2xl
                hover:shadow-blue-500/50 hover:ring-2 hover:ring-blue-400/50 
                hover:scale-[1.02] hover:bg-gradient-to-br hover:from-slate-800/60 hover:via-blue-800/40 hover:to-cyan-800/50
                transition-all duration-700 ease-out
                sw-hologram group-hover:sw-holo-flicker`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"></div>
      </div>

      <div className="flex-shrink-0 relative z-10">
        <div className="group relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div
            className="relative w-44 h-64 p-2 transform 
                      group-even:rounded-tl-[6rem] group-even:rounded-br-[6rem] group-even:rounded-tr-lg group-even:rounded-bl-lg
                      group-odd:rounded-tr-[6rem] group-odd:rounded-bl-[6rem] group-odd:rounded-tl-lg group-odd:rounded-br-lg
                      bg-gradient-to-br from-blue-600/80 via-cyan-500/80 to-purple-600/80 
                      group-hover:from-blue-500/90 group-hover:via-cyan-400/90 group-hover:to-purple-500/90
                      group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 shadow-2xl 
                      sw-neon-border group-hover:shadow-blue-400/50"
          >
            <div
              className="absolute bottom-0 left-0 z-10 w-full h-full transform origin-center p-2 overflow-hidden
                        group-even:rounded-tl-[7rem] group-even:rounded-br-[7rem] group-even:rounded-tr-xl group-even:rounded-bl-xl
                        group-odd:rounded-tr-[7rem] group-odd:rounded-bl-[7rem] group-odd:rounded-tl-xl group-odd:rounded-br-xl"
            >
              <Image
                src={member.avatar}
                alt={getLocalizedString(member.name, locale)}
                width={192}
                height={194}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              <div className="absolute top-1/2 right-1 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 !h-full flex-shrink-0 relative z-10">
        <div className="flex-1 h-full flex flex-col gap-6 group-odd:items-start group-even:items-end">
          <div className="flex-1 flex flex-col group-odd:items-start group-even:items-end">
            <div
              className="min-w-60 w-fit flex flex-col gap-3 px-6 py-4 rounded-2xl 
                        bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20
                        group-hover:from-blue-500/30 group-hover:via-cyan-500/30 group-hover:to-purple-500/30
                        border border-blue-400/60 group-hover:border-blue-300/80
                        shadow-2xl mb-6 rotate-[-1deg] group-hover:rotate-0
                        group-even:md:rotate-[1deg] group-even:md:group-hover:rotate-0 group-even:md:self-end
                        md:self-start self-center sw-neon-border group-hover:sw-holo-flicker
                        transition-all duration-700 group-hover:scale-105 group-hover:shadow-blue-400/30"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-cyan-200 group-hover:to-purple-200 transition-all duration-700">
                {getLocalizedString(member.name, locale)}
              </h3>
              <p className="text-sm font-medium text-blue-300 group-hover:text-cyan-300 transition-colors duration-700">
                {getLocalizedString(member.role, locale)}
              </p>
            </div>

            <div className="relative">
              <div className="max-w-2xl text-slate-300 group-hover:text-slate-200 transition-colors duration-700 leading-relaxed">
                {getLocalizedString(member.description, locale)}
              </div>

              {/* Decorative line */}
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 group-even:md:left-auto group-even:md:right-0"></div>
            </div>
          </div>

          {/* Floating Fun Fact - Only show if funFact exists */}
          {member.funFact && (
            <div className="absolute -top-8 group-odd:right-4 group-even:left-4 text-left z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 group-hover:translate-y-0 translate-y-2">
              <div
                className="bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-orange-500/90 
                            backdrop-blur-xl border border-purple-300/50
                            rounded-2xl p-4 shadow-2xl shadow-purple-500/30
                            max-w-xs transform group-hover:scale-105 group-hover:rotate-1
                            transition-all duration-700 ease-out
                            animate-floatEnhanced"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-lg">💡</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-2 drop-shadow-lg">
                      Fun Fact
                    </h4>
                    <p className="text-xs text-white/90 leading-relaxed drop-shadow-md">
                      {getLocalizedString(member.funFact, locale)}
                    </p>
                  </div>
                </div>

                {/* Floating particles around the fun fact */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute top-1/2 -right-3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          <div className="relative">
            <h4 className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-2 group-odd:justify-start group-even:justify-end group-hover:text-cyan-400 transition-colors duration-700">
              <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-700"></span>
              {t("skills")}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start group-even:md:justify-end gap-3">
              {member.skills.map((skill, index) => (
                <Badge
                  key={skill + index}
                  variant="primary"
                  size="sm"
                  className="sw-neon-border hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30 
                           transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30
                           group-hover:animate-pulse"
                  style={{ animationDelay: `${index * 100}ms` }}
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
const TeamStats = () => {
  const t = useTranslations("team")
  const locale = useLocale()
  return (
    <div className="mt-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-3xl"></div>

      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-slate-900/60 via-blue-900/30 to-cyan-900/40 dark:from-slate-800/70 dark:via-blue-800/40 dark:to-cyan-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/20 dark:border-blue-400/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-bell-shake-continuous inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-blue-400/30 mb-8">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-300 font-semibold text-sm tracking-wide uppercase">
              {t("whyChooseUs.title")}
            </span>
          </div>
          <p className="text-xl text-slate-300 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t("whyChooseUs.description")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamStats.map((stat, index) => {
            const statKeys = ["commitment", "methodology", "support", "quality"]
            const statKey = statKeys[index]
            return (
              <div
                key={index}
                className="group relative text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 via-blue-800/20 to-cyan-800/30 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Animated background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-blue-400/30 group-hover:border-blue-300/50 transition-all duration-500">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`mt-12 text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {getLocalizedString(stat.value, locale)}
                  </div>

                  <div className="text-blue-300 dark:text-blue-200 font-semibold text-sm uppercase tracking-wide group-hover:text-cyan-300 transition-colors duration-500">
                    {t(`stats.${statKey}`)}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-pulse"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
