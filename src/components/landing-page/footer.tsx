"use client"

import { useTranslations } from "next-intl"
import { socialLinks, footerContent } from "@/data"
import { SocialIcon } from "../social-icon"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations("footer")

  // Footer links data
  const companyLinks = [
    { name: t("links.about"), href: "#about" },
    { name: t("links.team"), href: "#team" },
    { name: t("links.news"), href: "#news" },
    { name: t("links.careers"), href: "#careers" },
  ]

  const serviceLinks = [
    { name: t("links.webDev"), href: "#web-dev" },
    { name: t("links.mobileDev"), href: "#mobile-dev" },
    { name: t("links.design"), href: "#design" },
    { name: t("links.consulting"), href: "#consulting" },
  ]

  const supportLinks = [
    { name: t("links.supportCenter"), href: "#support" },
    { name: t("links.docs"), href: "#docs" },
    { name: t("links.api"), href: "#api" },
    { name: t("links.status"), href: "#status" },
  ]

  const legalLinks = [
    { name: t("links.privacy"), href: "#privacy" },
    { name: t("links.terms"), href: "#terms" },
    { name: t("links.cookies"), href: "#cookies" },
    { name: t("links.gdpr"), href: "#gdpr" },
  ]

  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-primary">
                {footerContent.companyName}
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {footerContent.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              {t("sections.company")}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              {t("sections.services")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              {t("sections.support")}
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} {footerContent.companyName}.{" "}
              {footerContent.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
