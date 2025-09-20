import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/providers/theme-provider"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} dark:bg-gray-900 h-screen`}>
        <NextIntlClientProvider>
          <ThemeProvider defaultTheme="dark" storageKey="team-portfolio-theme">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
