import { cn } from '@/lib/cn'

interface SynthwaveGridProps {
  className?: string
  particleCount?: number
}

export function SynthwaveGrid({ className, particleCount = 5 }: SynthwaveGridProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    left: 10 + (i * 18),
    top: 20 + Math.sin(i * 1.2) * 30,
    size: 3 + (i % 3),
    delay: i * 0.6,
  }))

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3/4 animate-grid-scroll"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,201,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,201,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(600px) rotateX(55deg)',
          transformOrigin: 'center bottom',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)',
        }}
      />

      {/* Horizon glow */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: '25%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(14,165,201,0.4), rgba(232,140,10,0.3), rgba(14,165,201,0.4), transparent)',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? 'rgba(14,165,201,0.6)' : 'rgba(232,140,10,0.5)',
            animation: `particle-float ${2.5 + p.delay}s ease-in-out ${p.delay}s infinite`,
            boxShadow: i % 2 === 0
              ? '0 0 6px rgba(14,165,201,0.5)'
              : '0 0 6px rgba(232,140,10,0.4)',
          }}
        />
      ))}
    </div>
  )
}
