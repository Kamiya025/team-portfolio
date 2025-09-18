"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section, Container } from "@/components/ui/section"
import { Header } from "@/components/landing-page/header"
import { Footer } from "@/components/landing-page/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const { t, mounted } = useTranslations()
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([])

  useEffect(() => {
    // Tạo hiệu ứng sao lấp lánh
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col items-center min-h-screen bg-background">
      <Header />

      <main className="w-full flex-1">
        <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />

            {/* Animated Stars */}
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
          </div>

          <Container className="relative z-10">
            <div className="text-center space-y-8">
              {/* 404 Error Code */}
              <div className="space-y-4">
                <div className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
                  {t("notFound.errorCode")}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full" />
                  <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm rounded-full p-8 border border-border/50">
                    <Heading
                      level={1}
                      className="text-4xl md:text-6xl font-bold text-foreground mb-4"
                    >
                      {t("notFound.title")}
                    </Heading>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                      {t("notFound.subtitle")}
                    </p>
                    <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                      {t("notFound.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    {t("notFound.backHome")}
                  </Button>
                </Link>

                <Link href="/#projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    {t("notFound.exploreProjects")}
                  </Button>
                </Link>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
              <div
                className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </Container>
        </Section>
      </main>

      <BackToTop />
      <Footer />
    </div>
  )
}
