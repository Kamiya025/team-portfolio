"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

type MobileMenuContextType = {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
)

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <MobileMenuContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  )
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider")
  }
  return context
}
