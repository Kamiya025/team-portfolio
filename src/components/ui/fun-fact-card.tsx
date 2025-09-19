import { Particles, particleConfigs } from "./particles"

interface FunFactCardProps {
  funFact: string
  className?: string
}

export function FunFactCard({ funFact, className = "" }: FunFactCardProps) {
  if (!funFact) return null
  return (
    <div
      className={`absolute text-left z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 group-hover:translate-y-0 translate-y-2 ${className}`}
    >
      <div
        className="bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-orange-500/90 
                    backdrop-blur-xl border border-purple-300/50
                    rounded-2xl p-4 shadow-2xl shadow-purple-500/30
                    max-w-xs transform group-hover:scale-105 group-hover:rotate-1
                    transition-all duration-700 ease-out
                    animate-floatEnhanced"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-lg">💡</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-white mb-2 drop-shadow-lg">
              Fun Fact
            </h4>
            <p className="text-xs text-white/90 leading-relaxed drop-shadow-md">
              {funFact}
            </p>
          </div>
        </div>

        {/* Floating particles around the fun fact */}
        <Particles particles={particleConfigs.funFact} />
      </div>
    </div>
  )
}
