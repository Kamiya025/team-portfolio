import { AboutSection } from "@/components/landing-page/about-section"
import { FeaturesSection } from "@/components/landing-page/features-section"
import { Footer } from "@/components/landing-page/footer"
import { Header } from "@/components/landing-page/header"
import { HeroSection } from "@/components/landing-page/hero-section"
import { TeamSection } from "@/components/landing-page/team-section"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <HeroSection />
        <div>
          <TeamSection />
          <AboutSection />
          <FeaturesSection />
        </div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
