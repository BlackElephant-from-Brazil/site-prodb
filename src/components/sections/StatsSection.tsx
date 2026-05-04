import { NumberCounter } from '@/components/ui/NumberCounter'

const stats = [
  {
    target: 14,
    suffix: '+',
    label: 'anos de operação',
    detail: 'desde 2011, em Campinas/SP',
    accent: '#0EA5C9',
  },
  {
    target: 550,
    suffix: '+',
    label: 'empresas atendidas',
    detail: 'de PMEs a grandes corporações',
    accent: '#0EA5C9',
  },
  {
    value: '99,982%',
    label: 'uptime garantido',
    detail: 'Tier III — certificado Ascenty',
    isStatic: true,
    accent: '#22C55E',
  },
  {
    target: 9,
    suffix: '',
    label: 'certificações internacionais',
    detail: 'ISO 27001, PCI-DSS, SOC e mais',
    accent: '#E88C0A',
  },
]

export function StatsSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1828 50%, #060E1C 100%)' }}
      aria-label="Números da ProDB"
    >
      {/* Animated gradient orbs — give glass cards rich color to refract */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 500, height: 500, borderRadius: '50%',
            filter: 'blur(100px)',
            background: 'radial-gradient(circle, rgba(14,165,201,0.28) 0%, transparent 70%)',
            top: '-20%', left: '-5%',
            animationDuration: '22s',
          }}
        />
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 400, height: 400, borderRadius: '50%',
            filter: 'blur(90px)',
            background: 'radial-gradient(circle, rgba(232,140,10,0.20) 0%, transparent 70%)',
            bottom: '-15%', right: '10%',
            animationDuration: '18s',
            animationDelay: '-6s',
          }}
        />
        <div
          className="absolute animate-orb-drift"
          style={{
            width: 300, height: 300, borderRadius: '50%',
            filter: 'blur(70px)',
            background: 'radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)',
            top: '30%', right: '25%',
            animationDuration: '14s',
            animationDelay: '-3s',
          }}
        />
      </div>

      {/* Top/bottom edge lines */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,201,0.25), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,201,0.15), transparent)' }}
      />

      <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.30)',
              }}
            >
              {/* Glass layer 1: distort */}
              <div
                className="absolute inset-0"
                style={{
                  backdropFilter: `url('#lg-refract') blur(14px) saturate(160%) brightness(0.88)`,
                  WebkitBackdropFilter: `blur(14px) saturate(160%) brightness(0.88)`,
                }}
              />
              {/* Glass layer 2: tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(145deg, rgba(11,24,40,0.78) 0%, rgba(6,14,28,0.65) 100%)',
                }}
              />
              {/* Glass layer 3: specular — accent-tinted top edge */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: `inset 0 1px 0 ${stat.accent}55, inset 1px 0 0 rgba(255,255,255,0.06), inset -1px 0 0 rgba(255,255,255,0.03), inset 0 -1px 0 rgba(0,0,0,0.22)`,
                }}
              />
              {/* Content */}
              <div className="relative z-10 p-6">
                <p
                  className="font-display text-4xl font-black text-white md:text-5xl"
                  style={{ fontVariantNumeric: 'tabular-nums', color: stat.accent }}
                >
                  {'isStatic' in stat && stat.isStatic ? (
                    stat.value
                  ) : (
                    <NumberCounter
                      target={(stat as { target: number }).target}
                      suffix={(stat as { suffix: string }).suffix}
                      duration={1600}
                    />
                  )}
                </p>
                <p className="mt-2 text-sm font-semibold text-white/80">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
