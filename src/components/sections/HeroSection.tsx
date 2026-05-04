import { LinkButton } from '@/components/ui/Button'
import { customers } from '@/content/customers'
import { HeroVisual } from '@/components/sections/HeroVisual'

const trustItems = [
  { label: 'ISO 27001', accent: true },
  { label: 'Tier III Ascenty' },
  { label: 'SLA 99,982%' },
  { label: '550+ empresas' },
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white pt-28 pb-24 md:pt-36 md:pb-32"
      style={{ background: '#060E1C' }}
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient orbs — give the glass cards rich color to refract */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 700, height: 700, borderRadius: '50%',
            filter: 'blur(130px)',
            background: 'radial-gradient(circle, rgba(14,165,201,0.32) 0%, transparent 70%)',
            top: '-15%', right: '0%',
            animationDuration: '20s',
          }}
        />
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 550, height: 550, borderRadius: '50%',
            filter: 'blur(110px)',
            background: 'radial-gradient(circle, rgba(232,140,10,0.22) 0%, transparent 70%)',
            bottom: '-10%', left: '5%',
            animationDuration: '26s',
            animationDelay: '-8s',
          }}
        />
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 400, height: 400, borderRadius: '50%',
            filter: 'blur(90px)',
            background: 'radial-gradient(circle, rgba(103,232,249,0.16) 0%, transparent 70%)',
            top: '35%', left: '22%',
            animationDuration: '16s',
            animationDelay: '-4s',
          }}
        />
      </div>

      {/* 3-color mesh gradient overlay — deepens navy base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,14,28,0.80) 0%, transparent 100%)
          `,
        }}
      />

      {/* SVG beam lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ opacity: 0.35 }}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5C9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0EA5C9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0EA5C9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E88C0A" stopOpacity="0" />
            <stop offset="50%" stopColor="#E88C0A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E88C0A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -100,180 Q 300,120 600,200 T 1300,160"
          fill="none"
          stroke="url(#beam1)"
          strokeWidth="1.5"
          strokeDasharray="800"
          className="animate-beam-draw"
        />
        <path
          d="M -100,320 Q 400,270 700,340 T 1300,300"
          fill="none"
          stroke="url(#beam1)"
          strokeWidth="1"
          strokeDasharray="800"
          style={{ animationDelay: '0.4s' }}
          className="animate-beam-draw"
        />
        <path
          d="M 200,480 Q 600,420 900,500 T 1400,460"
          fill="none"
          stroke="url(#beam2)"
          strokeWidth="1"
          strokeDasharray="800"
          style={{ animationDelay: '0.8s' }}
          className="animate-beam-draw"
        />
      </svg>

      <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-12 items-center">
          {/* Copy column */}
          <div className="max-w-3xl">
            {/* Eyebrow — autoridade temporal pura, sem redundância com a H1 */}
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-widest animate-fade-up"
              style={{ color: '#0EA5C9' }}
            >
              Tecnologia em nuvem · Desde 2011
            </p>

            {/* H1 — produto explícito + dois diferenciais distintos (SLA contratual + suporte humano em 15min) */}
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-[3.75rem] animate-fade-up delay-100"
            >
              Servidores cloud e backup com{' '}
              <span style={{ color: '#0EA5C9' }}>SLA em contrato e suporte humano em 15 minutos.</span>
            </h1>

            {/* Subhead — 3 entregas concretas (uptime, plantão, custo) + autoridade social/temporal */}
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty animate-fade-up delay-200"
              style={{ color: 'rgba(232,240,250,0.75)' }}
            >
              Infraestrutura Tier III com 99,982% de uptime, engenheiros de plantão 24h
              e cobrança fechada em reais. Há 14 anos cuidando da nuvem de 550+ empresas.
            </p>

            {/* CTAs — auto-segmentadores no padrão "Quero" (posse + identificação direta com o produto) */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up delay-300">
              <LinkButton href="/servidores-cloud" size="lg" variant="primary">
                Quero meu servidor na nuvem
              </LinkButton>
              <LinkButton href="/backup" size="lg" variant="dark-secondary">
                Quero proteger meus dados
              </LinkButton>
            </div>

            {/* Trust strip */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-up delay-400"
              aria-label="Certificações e diferenciais"
            >
              {trustItems.map((item, i) => (
                <span key={item.label} className="flex items-center gap-2 text-sm">
                  {i > 0 && (
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ background: 'rgba(114,148,184,0.5)' }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="text-sm font-medium"
                    style={{ color: item.accent ? '#0EA5C9' : 'rgba(232,240,250,0.6)' }}
                  >
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Visual column — compute core + cards */}
          <div className="hidden lg:block animate-fade-up delay-300">
            <HeroVisual />
          </div>
        </div>

        {/* Customer logo strip */}
        <div className="mt-16 animate-fade-up delay-500">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'rgba(114,148,184,0.6)' }}
          >
            Em produção desde 2011
          </p>
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-5"
            aria-label="Clientes e parceiros"
          >
            {customers.map(c => (
              <div
                key={c.id}
                className="h-8 flex items-center opacity-40 hover:opacity-70 transition-opacity"
              >
                <span
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: 'rgba(232,240,250,0.7)' }}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
