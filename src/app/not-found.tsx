import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Section, Container } from "@/components/ui/section"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Section className="text-center">
        <Container>
          <div className="space-y-6">
            {/* 404 Error Code */}
            <div className="text-6xl md:text-8xl font-bold text-primary/30">
              404
            </div>

            {/* Content */}
            <div className="space-y-4">
              <Heading level={1} className="text-2xl md:text-4xl font-bold">
                404 - Page Not Found
              </Heading>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <Link href="/">
                <Button size="lg">Back to Home</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
