import { AboutSection } from "@/components/landing-page/about-section"
import { FeaturesSection } from "@/components/landing-page/features-section"
import { Footer } from "@/components/landing-page/footer"
import { Header } from "@/components/landing-page/header"
import { HeroSection } from "@/components/landing-page/hero-section"
import dynamic from "next/dynamic"
import { LazyRender } from "@/components/ui/lazy-render"
const ProjectsSection = dynamic(
  () =>
    import("@/components/landing-page/projects-section").then(
      (m) => m.ProjectsSection
    ),
  { loading: () => <div className="h-40" />, ssr: true }
)
import { TeamSection } from "@/components/landing-page/team-section"
import { BackToTop } from "@/components/ui/back-to-top"
import { WebContent } from "@/data/config"
import { getLocalizedString } from "@/utils"
import { Metadata } from "next"
import { getLocale } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()

  return {
    title: getLocalizedString(WebContent.teamName, locale),
    description: getLocalizedString(WebContent.description, locale),
  }
}

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center min-h-screen bg-dots">
      <Header />
      <main className="w-full">
        <HeroSection />
        <div>
          <LazyRender>
            <TeamSection />
          </LazyRender>
          <LazyRender>
            <AboutSection />
          </LazyRender>
          <LazyRender>
            <FeaturesSection />
          </LazyRender>
          <LazyRender>
            <ProjectsSection />
          </LazyRender>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
