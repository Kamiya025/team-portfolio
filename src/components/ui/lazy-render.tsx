"use client"

import React from "react"

type LazyRenderProps = {
  children: React.ReactNode
  margin?: string
}

export function LazyRender({ children, margin = "200px" }: LazyRenderProps) {
  const [isInView, setIsInView] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (isInView) return
    const element = ref.current
    if (!element) return
    if (!("IntersectionObserver" in window)) {
      setIsInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin: margin, threshold: 0 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [isInView, margin])

  return <div ref={ref}>{isInView ? children : null}</div>
}

export default LazyRender
