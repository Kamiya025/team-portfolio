"use client"

import { heroStats, listTeams, TEAM_PHOTO } from "@/data/hero"
import { Link } from "@/i18n/navigation"
import { getLocalizedString } from "@/utils"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HoloBadge } from "../ui"

export function HeroSection() {
  // Team photo for preview

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden space-gradient starfield logic-grid"
    >
      {/* Background + FX */}
      <div className="absolute inset-0">
        <Image
          src={TEAM_PHOTO}
          alt="Team background"
          fill
          className="object-cover blur-md brightness-75 contrast-110 scale-[1.02]"
          priority
        />
        {/* Vignette / spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 35%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
      </div>
      <div>
        <Context />
        <div className="mt-10 hidden md:block">
          <StatsGlass />
        </div>
      </div>
    </section>
  )
}

const StatsGlass = () => {
  const locale = useLocale()
  return (
    <div
      className="mx-auto max-w-full w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 rounded-2xl liquid-glass p-4 sm:p-4 animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      {heroStats.map((stat, index) => (
        <Link
          key={index}
          href={stat.path ?? "#"}
          className="rounded-xl p-3 sm:p-3 text-center"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {getLocalizedString(stat.value, locale)}
          </div>
          <div className="text-xs sm:text-xs md:text-sm text-white/70 mt-1">
            {getLocalizedString(stat.label, locale)}
          </div>
        </Link>
      ))}
    </div>
  )
}
const Context = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = listTeams
  const t = useTranslations("hero")
  const locale = useLocale()
  const maxWidthText = texts.reduce((max, text) => Math.max(max, getLocalizedString(text.name, locale).length), 0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
      <div className="space-y-12 group">
        {/* Badge */}
       <HoloBadge color="default">
          {t("subtitle")}
        </HoloBadge>

        {/* Heading (compact) */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight headline-mono animate-fade-in-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex flex-col lg:flex-row items-center-safe gap-5">
              <span>{t("title")}</span>
              <div className="lg:min-w-sm flex-1 flex flex-col px-5 py-3 rounded-2xl 
                    backdrop-blur-sm ring-4 ring-white/10 drop-shadow-md 
                    group-hover:animate-bell-shake-continuous group-hover:rotate-3 group-hover:scale-3d"
                style={{ width: `${maxWidthText * 50}px` }}
              >
                {texts.map((text, index) =>
                  <span key={index}
                    className={`gradient-text uppercase font-extrabold ${index === currentText ? "" : "hidden"}`}>
                  {getLocalizedString(text.name, locale)}
                </span>)}
              </div>
            </div>
          </h1>
        </div>
        {/* slogan */}
        <p
          className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up inline-block px-4 py-2 rounded-xl ring-white/10 drop-shadow"
          style={{ animationDelay: "0.1s" }}
        >
          {getLocalizedString(texts[currentText].slogan, locale)}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <Link
            href="#projects"
            className="glass-button gradient-border px-8 py-4 rounded-xl text-lg font-semibold text-white"
          >
            {t("cta")}
          </Link>
          <Link
            href={"#about"}
            className="px-8 py-4 rounded-xl text-lg font-semibold text-palette-1 bg-white hover:bg-palette-4 hover:text-white transition-colors duration-300 btn-neon"
          >
            {t("learnMore")}
          </Link>
        </div>
        {/* Stats glass */}
      </div>
    </div>
  )
}
