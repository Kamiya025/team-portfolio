"use client"

import { useEffect, useState } from "react"
import { Button } from "."

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 back-to-top-enter">
      <Button
        variant="glass"
        size="sm"
        aria-label="Lên đầu trang"
        onClick={scrollToTop}
        className="aspect-square group rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 back-to-top-pulse"
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Button>
    </div>
  )
}
