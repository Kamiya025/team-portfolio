"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslations } from "@/hooks/use-translations"
import { useMobileMenu } from "@/providers/mobile-menu-provider"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "../language-switcher"
import { Icon } from "../icon"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu()
  const { t } = useTranslations("navigation")

  const navigation = useMemo(
    () => [
      {
        name: t("home"),
        href: "#home",
        icon: "home",
      },
      {
        name: t("team"),
        href: "#team",
        icon: "team",
      },
      {
        name: t("about"),
        href: "#about",
        icon: "about",
      },
      {
        name: t("features"),
        href: "#services",
        icon: "skills",
      },
      {
        name: t("projects"),
        href: "#projects",
        icon: "data",
      },
    ],
    [t]
  )

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
  }, [navigation])

  // Close mobile menu when clicking on navigation links
  const handleNavClick = () => {
    closeMobileMenu()
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 header-enter ${
          scrolled ? "top-1 sm:top-2" : "top-2 sm:top-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div
            className={`header-glass liquid-glass rounded-full px-3 py-3 sm:px-6 sm:py-4 shadow-lg transition-all duration-300 space-gradient backdrop-blur-xl relative ${
              scrolled
                ? "header-scrolled shadow-2xl scale-95"
                : "shadow-lg scale-100 bg-white/60 dark:bg-slate-900/60"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex flex-1 justify-center items-center space-x-1 overflow-x-auto scrollbar-hide">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`nav-link-hover relative flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-300 group whitespace-nowrap ${
                        isActive
                          ? "nav-item-active bg-white/20 text-primary shadow-lg"
                          : scrolled
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
                        <Icon
                          name={item.icon}
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          scrolled ? "" : "text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      {isActive && <div className="active-indicator"></div>}
                    </a>
                  )
                })}
              </nav>
              <nav className="lg:hidden flex-1 justify-center items-center space-x-1 overflow-x-auto scrollbar-hide"></nav>
              {/* Right side controls */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Language Switcher */}
                <div
                  className={`hidden sm:block transition-opacity duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                >
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
                  <div className="w-5 h-5 flex flex-col justify-center items-center">
                    <span
                      className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "rotate-45 translate-y-1"
                          : "-translate-y-1"
                      }`}
                    />
                    <span
                      className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
                        isMobileMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "-rotate-45 -translate-y-1"
                          : "translate-y-1"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Outside liquid-glass container */}
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
                    className={`w-full flex items-center  px-3 py-2.5 rounded-xl transition-all duration-300 ${
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
                      <Icon name={item.icon} className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
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
