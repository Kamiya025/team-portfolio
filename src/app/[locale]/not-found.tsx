import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section, Container } from "@/components/ui/section"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Section className="text-center">
        <Container>
          <div className="space-y-6">
            {/* 404 Error Code */}
            <div className="text-6xl md:text-8xl font-bold text-primary/30">
              {t("notFound.errorCode")}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <Heading level={1} className="text-2xl md:text-4xl font-bold">
                {t("notFound.title")}
              </Heading>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                {t("notFound.description")}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <Link href="/">
                <Button size="lg">{t("notFound.backHome")}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
