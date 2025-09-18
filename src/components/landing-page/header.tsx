"use client"

import { useState, useEffect, useMemo } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Icon } from "../icon"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navigation = useMemo(
    () => [
      {
        name: "Trang chủ",
        href: "#home",
        icon: "home",
      },
      {
        name: "Đội ngũ",
        href: "#team",
        icon: "team",
      },
      {
        name: "Về chúng tôi",
        href: "#about",
        icon: "about",
      },
      {
        name: "Kỹ năng",
        href: "#services",
        icon: "skills",
      },
    ],
    []
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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 header-enter ${
        scrolled ? "top-1 sm:top-2" : "top-2 sm:top-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div
          className={`header-glass liquid-glass rounded-full px-3 py-3 sm:px-6 sm:py-4 shadow-lg transition-all duration-300 space-gradient backdrop-blur-xl ${
            scrolled
              ? "header-scrolled shadow-2xl scale-95"
              : "shadow-lg scale-100 bg-white/60 dark:bg-slate-900/60"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <nav className="flex flex-1 justify-center items-center space-x-1 overflow-x-auto scrollbar-hide">
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
                      className={`hidden md:block text-xs sm:text-sm font-medium ${
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

            {/* Right side controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle */}
              <div
                className={`flex items-center ${
                  scrolled ? "" : "bg-white/20 rounded-full p-1"
                }`}
              >
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
