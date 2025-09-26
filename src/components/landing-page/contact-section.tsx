"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button, Section, Container, Heading } from "../ui"

export function ContactSection() {
  const t = useTranslations("contact")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setStatus("error")
      setError((err as Error).message)
    }
  }

  return (
    <Section id="contact" variant="default" size="lg">
      <Container>
        <div className="text-center mb-10">
          <Heading level={2} variant="default" size="lg">
            {t("title")}
          </Heading>
          <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              {t("fields.name.label")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("fields.name.placeholder")}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              {t("fields.email.label")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("fields.email.placeholder")}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              {t("fields.message.label")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("fields.message.placeholder")}
              className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? t("actions.sending")
                : t("actions.submit")}
            </Button>
            {status === "success" && (
              <span className="text-green-600 dark:text-green-400 text-sm">
                {t("feedback.success")}
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600 dark:text-red-400 text-sm">
                {t("feedback.error")}
                {error ? `: ${error}` : ""}
              </span>
            )}
          </div>
        </form>
      </Container>
    </Section>
  )
}
