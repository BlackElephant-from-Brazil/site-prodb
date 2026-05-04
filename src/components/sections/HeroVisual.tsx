'use client'

import { useEffect, useRef, useState } from 'react'

type CardData = {
  id: string
  position: { top?: string; bottom?: string; right?: string; left?: string }
  label: string
  value: string
  detail?: string
  sparkline?: string
  indicator?: 'pulse'
  accent: string
}

const cards: CardData[] = [
  {
    id: 'uptime',
    position: { top: '4%', right: '0%' },
    label: 'Uptime · 90 dias',
    value: '99,982%',
    detail: '0 incidentes críticos',
    sparkline: 'M0,16 L10,15 L20,16 L30,14 L40,15 L50,15 L60,14 L70,15 L80,14 L90,15 L100,15',
    accent: '#0EA5C9',
  },
  {
    id: 'status',
    position: { top: '42%', right: '-4%' },
    label: 'NOC · Tempo real',
    value: 'All systems operational',
    detail: 'Última checagem · 2s',
    indicator: 'pulse',
    accent: '#22C55E',
  },
  {
    id: 'latency',
    position: { bottom: '4%', right: '4%' },
    label: 'Latência · SP-01',
    value: '12ms',
    detail: 'p95 últimas 24h',
    sparkline: 'M0,17 L10,16 L20,15 L30,16 L40,15 L50,16 L60,16 L70,15 L80,16 L90,15 L100,16',
    accent: '#0EA5C9',
  },
]

const particles = [
  { left: '8%',  top: '14%', size: 3, delay: 0,   color: '#0EA5C9' },
  { left: '14%', top: '82%', size: 2, delay: 0.8, color: '#0EA5C9' },
  { left: '52%', top: '8%',  size: 2, delay: 1.5, color: '#E88C0A' },
  { left: '88%', top: '90%', size: 3, delay: 2.2, color: '#0EA5C9' },
  { left: '36%', top: '94%', size: 2, delay: 0.3, color: '#0EA5C9' },
  { left: '92%', top: '34%', size: 3, delay: 1.2, color: '#E88C0A' },
  { left: '4%',  top: '50%', size: 2, delay: 2.6, color: '#67E8F9' },
]

const CUBE = 200
const HALF = CUBE / 2

const corners: Array<[number, number, number]> = [
  [-HALF, -HALF,  HALF], [ HALF, -HALF,  HALF],
  [-HALF,  HALF,  HALF], [ HALF,  HALF,  HALF],
  [-HALF, -HALF, -HALF], [ HALF, -HALF, -HALF],
  [-HALF,  HALF, -HALF], [ HALF,  HALF, -HALF],
]

const faces = [
  { key: 'front',  transform: `translateZ(${HALF}px)` },
  { key: 'back',   transform: `translateZ(-${HALF}px) rotateY(180deg)` },
  { key: 'left',   transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { key: 'right',  transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { key: 'top',    transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { key: 'bottom', transform: `rotateX(-90deg) translateZ(${HALF}px)` },
]

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = Math.max(-0.5, Math.min(0.5, (e.clientX - cx) / rect.width))
      const dy = Math.max(-0.5, Math.min(0.5, (e.clientY - cy) / rect.height))
      setTilt({ x: dx, y: dy })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const tiltMag = 5

  return (
    <div
      ref={ref}
      className="relative w-full h-[520px]"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none animate-ambient-pulse"
        style={{
          background: 'radial-gradient(circle at 28% 50%, rgba(14,165,201,0.22) 0%, rgba(14,165,201,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Connection lines from core to cards */}
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 460 520"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        <line
          x1="138" y1="260" x2="370" y2="50"
          stroke="rgba(14,165,201,0.35)" strokeWidth="1"
          strokeDasharray="3 6" className="animate-dash-flow"
        />
        <line
          x1="138" y1="260" x2="430" y2="262"
          stroke="rgba(34,197,94,0.4)" strokeWidth="1"
          strokeDasharray="3 6" className="animate-dash-flow"
          style={{ animationDelay: '0.5s' }}
        />
        <line
          x1="138" y1="260" x2="370" y2="475"
          stroke="rgba(14,165,201,0.35)" strokeWidth="1"
          strokeDasharray="3 6" className="animate-dash-flow"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      {/* Compute core (isometric cube) */}
      <div
        className="absolute"
        style={{
          left: '30%',
          top: '50%',
          width: CUBE,
          height: CUBE,
          marginLeft: -HALF,
          marginTop: -HALF,
          perspective: '1400px',
        }}
      >
        {/* Tilt wrapper */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${-22 + tilt.y * tiltMag}deg) rotateY(${-28 + tilt.x * tiltMag}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Spin wrapper (continuous Y rotation) */}
          <div
            className="absolute inset-0 animate-core-rotate"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 6 faces */}
            {faces.map(({ key, transform }) => (
              <div
                key={key}
                className="absolute inset-0"
                style={{
                  background: 'rgba(14, 165, 201, 0.04)',
                  border: '1px solid rgba(14, 165, 201, 0.4)',
                  transform,
                  backgroundImage: `
                    linear-gradient(rgba(14,165,201,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(14,165,201,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  boxShadow: 'inset 0 0 40px rgba(14,165,201,0.18)',
                }}
              />
            ))}

            {/* 8 luminous corner spheres */}
            {corners.map(([x, y, z], i) => (
              <div
                key={i}
                className="absolute animate-corner-glow"
                style={{
                  top: '50%',
                  left: '50%',
                  width: 10,
                  height: 10,
                  marginTop: -5,
                  marginLeft: -5,
                  background: '#67E8F9',
                  borderRadius: '50%',
                  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                  boxShadow: '0 0 16px #0EA5C9, 0 0 6px #67E8F9',
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}

            {/* Inner core */}
            <div
              className="absolute"
              style={{ top: '50%', left: '50%', width: 64, height: 64, marginTop: -32, marginLeft: -32 }}
            >
              <div
                className="absolute inset-0 animate-core-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(103,232,249,0.95) 0%, rgba(14,165,201,0.55) 35%, rgba(14,165,201,0.15) 65%, transparent 100%)',
                  borderRadius: '50%',
                  boxShadow: '0 0 80px rgba(14,165,201,0.7), 0 0 30px rgba(103,232,249,0.5)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass cards */}
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="absolute"
          style={{
            ...card.position,
            transform: `translate(${tilt.x * 10}px, ${tilt.y * 10}px)`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            zIndex: 30,
          }}
        >
          {/* Glass card — 4-layer structure */}
          <div
            className="relative rounded-xl overflow-hidden animate-card-float"
            style={{
              animationDelay: `${i * 1.6}s`,
              width: 200,
              border: '1px solid rgba(14,165,201,0.28)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.60), 0 6px 16px rgba(0,0,0,0.40), 0 0 0 0.5px rgba(255,255,255,0.06) inset',
            }}
          >
            {/* Layer 1: Distort — SVG turbulence + blur */}
            <div
              className="absolute inset-0"
              style={{
                backdropFilter: `url('#lg-refract') blur(16px) saturate(150%) brightness(0.88)`,
                WebkitBackdropFilter: `blur(16px) saturate(150%) brightness(0.88)`,
              }}
            />

            {/* Layer 2: Dark navy tint */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(145deg, rgba(11,24,40,0.82) 0%, rgba(6,14,28,0.72) 100%)',
              }}
            />

            {/* Layer 3: Cyan specular — top edge lit with accent */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow:
                  `inset 0 1px 0 rgba(14,165,201,0.45), inset 1px 0 0 rgba(255,255,255,0.08), inset -1px 0 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.28)`,
              }}
            />

            {/* Layer 4: Content */}
            <div className="relative z-10 p-4">
              <p
                className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'rgba(232,240,250,0.45)' }}
              >
                {card.label}
              </p>
              <div className="flex items-center gap-2 mb-1">
                {card.indicator === 'pulse' && (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping"
                      style={{ background: card.accent }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: card.accent }}
                    />
                  </span>
                )}
                <p
                  className={card.indicator ? 'text-sm font-bold leading-tight' : 'text-2xl font-black leading-none'}
                  style={{
                    color: card.indicator ? '#E8F0FA' : card.accent,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {card.value}
                </p>
              </div>
              {card.sparkline && (
                <svg viewBox="0 0 100 22" className="w-full h-5 my-1.5">
                  <defs>
                    <linearGradient id={`grad-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={card.accent} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={card.accent} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${card.sparkline} L100,22 L0,22 Z`}
                    fill={`url(#grad-${card.id})`}
                  />
                  <path
                    d={card.sparkline}
                    fill="none"
                    stroke={card.accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {card.detail && (
                <p className="text-[11px]" style={{ color: 'rgba(232,240,250,0.45)' }}>
                  {card.detail}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none animate-particle-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
