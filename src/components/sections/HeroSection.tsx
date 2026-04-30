import Link from 'next/link'
import { LinkButton } from '@/components/ui/Button'
import { customers } from '@/content/customers'
import Image from 'next/image'

const trustItems = [
  'ISO 27001',
  'Tier III',
  'LGPD-ready',
  'Suporte 24/7 em português',
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 text-white pt-20 pb-24 md:pt-28 md:pb-32"
      aria-labelledby="hero-heading"
    >
      {/* Ambient orb */}
      <div
        aria-hidden="true"
        className="animate-orb-drift pointer-events-none absolute -right-1/4 top-0 h-[120vw] w-[120vw] max-h-[900px] max-w-[900px] opacity-20 blur-[80px]"
        style={{
          background:
            'radial-gradient(ellipse at 60% 30%, #22D3EE 0%, transparent 55%), radial-gradient(ellipse at 30% 70%, #F59E0B 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan-400 animate-fade-up">
            Cloud Brasileira Certificada
          </p>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl animate-fade-up delay-100"
          >
            Cloud brasileira,{' '}
            <span className="text-cyan-400">suporte que atende</span>
            {' '}e SLA de 99,99% —{' '}
            <span className="text-slate-300">sem surpresas na fatura.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty animate-fade-up delay-200">
            Infraestrutura Tier III com suporte humano 24/7 em português e cobrança previsível
            em reais. Para empresas que precisam de cloud séria — sem depender de ticket em inglês.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up delay-300">
            <LinkButton href="/contato" size="lg" variant="primary">
              Falar com um especialista
            </LinkButton>
            <LinkButton href="/backup" size="lg" variant="dark-secondary">
              Ver planos de backup
            </LinkButton>
          </div>

          {/* Trust strip */}
          <div
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fade-up delay-400"
            aria-label="Certificações e diferenciais"
          >
            {trustItems.map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" />}
                <span
                  className={`text-sm font-medium ${i === 0 ? 'text-cyan-300' : 'text-slate-300'}`}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Customer logo strip */}
        <div className="mt-16 animate-fade-up delay-500">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Empresas que confiam na ProDB
          </p>
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-5"
            aria-label="Clientes e parceiros"
          >
            {customers.map(c => (
              <div
                key={c.id}
                className="h-8 flex items-center opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all"
              >
                {/* TODO: Replace with real logo SVGs in /public/partners/ */}
                <span className="text-sm font-semibold text-slate-300 tracking-tight">
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
