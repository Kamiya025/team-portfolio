import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container">
          <TeamSection />
          <AboutSection />
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
