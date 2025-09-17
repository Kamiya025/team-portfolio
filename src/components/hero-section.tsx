"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  // Team photo for preview
  const teamPhoto = "/hero-background.jpg"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden space-gradient starfield logic-grid"
    >
      {/* Background + FX */}
      <div className="absolute inset-0">
        <Image
          src={teamPhoto}
          alt="Team background"
          fill
          className="object-cover blur-md brightness-75 contrast-110 scale-[1.02]"
          priority
        />
        {/* Vignette / spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 35%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <Context />
      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up"
        style={{ animationDelay: "0.25s" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/60 relative overflow-hidden">
          <span className="absolute left-1/2 top-2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce"></span>
        </div>
      </div>
    </section>
  )
}

const StatsGlass = () => {
  return (
    <div
      className="mx-auto max-w-3xl grid grid-cols-3 gap-2 sm:gap-4 rounded-2xl liquid-glass p-3 sm:p-4 animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="rounded-xl  p-3">
        <div className="text-3xl md:text-4xl font-bold text-white">+30</div>
        <div className="text-xs md:text-sm text-white/70">Dự án hoàn thành</div>
      </div>
      <div className="rounded-xl  p-3">
        <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
        <div className="text-xs md:text-sm text-white/70">
          Thành viên cốt lõi
        </div>
      </div>
      <div className="rounded-xl  p-3">
        <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
        <div className="text-xs md:text-sm text-white/70">
          Hỗ trợ & vận hành
        </div>
      </div>
    </div>
  )
}
const Context = () => {
  const [currentText, setCurrentText] = useState(0)

  const texts = ["Frontend", "Backend", "Mobile App", "Full-stack", "DevOps"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
      <div className="space-y-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass sw-hologram sw-holo-flicker animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            Chúng tôi xây dựng sản phẩm số đẳng cấp
          </span>
        </div>

        {/* Heading (compact) */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight headline-mono animate-fade-in-up"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="flex flex-wrap lg:flex-row items-center-safe gap-5">
            <span>Đội ngũ</span>
            <div className="flex-1 px-4 py-2 rounded-xl backdrop-blur-sm ring-4 ring-white/10 drop-shadow-md">
              <span className="gradient-text uppercase font-extrabold">
                {texts[currentText]}
              </span>
            </div>
          </div>
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up inline-block px-4 py-2 rounded-xl ring-white/10 drop-shadow"
          style={{ animationDelay: "0.1s" }}
        >
          Tập trung chất lượng, tốc độ và trải nghiệm. Kết hợp UI/UX hiện đại,
          hiệu năng cao và DevOps tinh gọn.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <button className="glass-button gradient-border px-8 py-4 rounded-xl text-lg font-semibold text-white">
            Xem portfolio
          </button>
          <button className="px-8 py-4 rounded-xl text-lg font-semibold text-palette-1 bg-white hover:bg-palette-4 hover:text-white transition-colors duration-300 btn-neon">
            Liên hệ ngay
          </button>
        </div>
        {/* Stats glass */}
        <StatsGlass />
      </div>
    </div>
  )
}
