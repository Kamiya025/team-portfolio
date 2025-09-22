interface ParticlesProps {
  particles: string[]
  containerClassName?: string
}

export function Particles({
  particles,
  containerClassName = "",
}: ParticlesProps) {
  return (
    <div className={`inset-0 pointer-events-none ${containerClassName}`}>
      {particles.map((particle, index) => {
        return (
          <div
            key={index}
            className={`absolute rounded-full transition-opacity duration-700 z-50 ${particle}`}
          />
        )
      })}
    </div>
  )
}

// Predefined particle configurations for common use cases
export const particleConfigs = {
  // For avatar hover effect
  avatar: [
    "top-2 group-even:left-0 group-odd:right-0 size-3 bg-cyan-400 animate-ping delay-100",
    "bottom-2 group-even:right-0 group-odd:left-0 size-1.5 bg-cyan-400 animate-pulse delay-100",
    "-bottom-1 group-even:left-1 group-odd:right-1 size-1.5 bg-blue-400 animate-pulse delay-200",
    "top-2/3 group-even:right-3 group-odd:left-3 size-2 bg-purple-400 animate-ping delay-500",
  ],

  // For fun fact particles
  funFact: [
    "-top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-60",
    "-bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-70",
    "top-1/2 -right-3 w-1 h-1 bg-pink-400 rounded-full delay-60",
  ],
}
