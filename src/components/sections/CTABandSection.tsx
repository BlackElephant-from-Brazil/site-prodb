import { LinkButton } from '@/components/ui/Button'

interface CTABandProps {
  heading?: string
  subheading?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABandSection({
  heading = 'Pronto pra deixar de operar a infraestrutura sozinho?',
  subheading = 'Em uma conversa de 30 minutos com um engenheiro, a gente avalia se faz sentido pra você. Resposta em até 2 horas úteis.',
  primaryLabel = 'Falar com um engenheiro',
  primaryHref = '/contato',
  secondaryLabel = 'Começar teste grátis de 15 dias',
  secondaryHref = '/backup',
}: CTABandProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: '#060E1C' }}
      aria-labelledby="cta-band-heading"
    >
      {/* Animated orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 600, height: 600, borderRadius: '50%',
            filter: 'blur(120px)',
            background: 'radial-gradient(circle, rgba(14,165,201,0.20) 0%, transparent 70%)',
            top: '-30%', right: '-5%',
            animationDuration: '24s',
          }}
        />
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 450, height: 450, borderRadius: '50%',
            filter: 'blur(100px)',
            background: 'radial-gradient(circle, rgba(232,140,10,0.14) 0%, transparent 70%)',
            bottom: '-20%', left: '5%',
            animationDuration: '18s',
            animationDelay: '-7s',
          }}
        />
      </div>

      {/* Top border line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,201,0.35), transparent)' }}
      />

      <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        {/* Glass content panel */}
        <div
          className="relative overflow-hidden rounded-3xl text-center px-8 py-14 md:px-16 md:py-20"
          style={{
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.50), 0 6px 20px rgba(0,0,0,0.32)',
          }}
        >
          {/* Glass distort */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: `url('#lg-refract') blur(20px) saturate(160%) brightness(0.86)`,
              WebkitBackdropFilter: `blur(20px) saturate(160%) brightness(0.86)`,
            }}
          />
          {/* Glass tint */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(145deg, rgba(11,24,40,0.72) 0%, rgba(6,14,28,0.60) 100%)',
            }}
          />
          {/* Glass specular */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              boxShadow:
                'inset 0 1.5px 0 rgba(14,165,201,0.32), inset 1px 0 0 rgba(255,255,255,0.08), inset -1px 0 0 rgba(255,255,255,0.04), inset 0 -1.5px 0 rgba(0,0,0,0.22)',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2
              id="cta-band-heading"
              className="mb-4 text-3xl font-black text-white md:text-4xl lg:text-5xl text-balance max-w-2xl mx-auto leading-tight"
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(232,240,250,0.60)' }}>
                {subheading}
              </p>
            )}

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <LinkButton href={primaryHref} size="lg" variant="primary">
                {primaryLabel}
              </LinkButton>
              <LinkButton href={secondaryHref} size="lg" variant="dark-secondary">
                {secondaryLabel}
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs" style={{ color: 'rgba(114,148,184,0.50)' }}>
              <span>ISO 27001</span>
              <span>·</span>
              <span>Tier III Ascenty</span>
              <span>·</span>
              <span>SLA 99,982%</span>
              <span>·</span>
              <span>550+ empresas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
