"use client"

import { WebContent } from "@/data/config"
import { Link } from "@/i18n/navigation"
import { BarIcon, CloseIcon } from "@/icons"
import { useMobileMenu } from "@/providers/theme-provider"
import { getLocalizedString } from "@/utils"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Icon } from "../icon"
import { LanguageSwitcher } from "../ui/language-switcher"
import { ThemeToggle } from "../ui/theme-toggle"

const navigation = [
  {
    name: "home",
    href: "#home",
    icon: "home",
  },
  {
    name: "team",
    href: "#team",
    icon: "team",
  },
  {
    name: "about",
    href: "#about",
    icon: "about",
  },
  {
    name: "features",
    href: "#services",
    icon: "skills",
  },
  {
    name: "projects",
    href: "#projects",
    icon: "data",
  },
]

export function Header() {
  const locale = useLocale()
  const [isTop, setIsTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu()
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on navigation links
  const handleNavClick = () => {
    closeMobileMenu()
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 header-enter ${
          isTop ? "top-1 sm:top-2" : "top-2 sm:top-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className={`header-glass liquid-glass rounded-full px-3 py-3 sm:px-6 sm:py-4 shadow-lg transition-all duration-300 space-gradient backdrop-blur-xl relative ${
              isTop
                ? "header-scrolled shadow-2xl scale-95"
                : "shadow-lg scale-100 bg-white/60 dark:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex flex-1 justify-center items-center space-x-1 overflow-x-auto scrollbar-hide">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    item={item}
                    isTop={isTop}
                    activeSection={activeSection}
                  />
                ))}
              </nav>
              <nav className="lg:hidden flex-1 justify-center items-center space-x-1 overflow-x-auto scrollbar-hide">
                {getLocalizedString(WebContent.teamName, locale)}
              </nav>
              {/* Right side controls */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Language Switcher */}
                <div className="hidden md:block transition-opacity duration-300">
                  <LanguageSwitcher />
                </div>
                {/* Theme Toggle */}
                <ThemeToggle />
                {/* Mobile Menu Toggle */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-5 h-5 flex flex-col justify-center items-center in-active:rotate-180 transition-transform duration-300">
                    {isMobileMenuOpen ? <CloseIcon /> : <BarIcon />}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Outside liquid-glass container */}
        <MenuDropDown
          activeSection={activeSection}
          handleNavClick={handleNavClick}
        />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}
const NavLink = ({
  item,
  isTop,
  activeSection,
}: {
  isTop: boolean
  item: (typeof navigation)[number]
  activeSection: string
}) => {
  const t = useTranslations("navigation")
  const isActive = activeSection === item.href.substring(1)
  return (
    <Link
      href={item.href}
      className={`nav-link-hover relative flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 group whitespace-nowrap ${
        isActive
          ? "nav-item-active bg-white/20 text-primary shadow-lg"
          : isTop
          ? "text-foreground hover:bg-white/10 hover:text-primary"
          : "text-white hover:bg-white/10 hover:text-white"
      }`}
    >
      <div
        className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-primary/20 scale-110"
            : "group-hover:bg-white/20 group-hover:scale-105"
        }`}
      >
        <Icon name={item.icon} className="size-3 sm:size-4" />
      </div>
      <span
        className={`text-xs sm:text-sm font-medium ${
          isTop ? "" : "text-white"
        }`}
      >
        {t(item.name)}
      </span>
      {isActive && <span className="active-indicator" />}
    </Link>
  )
}
const MenuDropDown = ({
  activeSection,
  handleNavClick,
}: {
  activeSection: string
  handleNavClick: () => void
}) => {
  const { isMobileMenuOpen } = useMobileMenu()

  if (!isMobileMenuOpen) return null
  return (
    <div
      className={`header-glass max-w-[95%] mx-auto mt-3 liquid-glass rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="p-4 w-full">
        {/* Mobile Navigation */}
        <div className="space-y-1 flex flex-col items-center justify-center">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`w-full flex items-center gap-1 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground hover:bg-white/10 dark:hover:bg-slate-700/20 hover:text-primary"
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20"
                      : "bg-white/10 dark:bg-slate-700/20 group-hover:bg-primary/20"
                  }`}
                >
                  <Icon name={item.icon} className="size-5" />
                </div>
                <span className="font-medium text-sm">{item.name}</span>
                {isActive && (
                  <span className="size-3 bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-white/20 dark:bg-slate-700/20" />

        {/* Language Switcher */}
        <div className="flex items-center justify-between px-3 py-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
