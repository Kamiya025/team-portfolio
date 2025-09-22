import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/providers/theme-provider"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import Script from "next/script"
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
    <html lang={locale} className="dark">
      <body className={`${inter.className} dark:bg-gray-900 h-screen`}>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <>
            <Script id="gtm-base" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
            </Script>{" "}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {/* End Google Tag Manager */}
        {/* <NextIntlClientProvider>
          <ThemeProvider defaultTheme="dark" storageKey="team-portfolio-theme">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider> */}
      </body>
    </html>
  )
}
