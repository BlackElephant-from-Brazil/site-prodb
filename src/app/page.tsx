// Conversion goal: "Falar com especialista" — primary; backup trial — secondary
import type { Metadata } from 'next'
import MarketingLayout from './layout-marketing'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { BackupPricingSection } from '@/components/sections/BackupPricingSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CustomersSection } from '@/components/sections/CustomersSection'
import { SupportSection } from '@/components/sections/SupportSection'
import { BlogTeaserSection } from '@/components/sections/BlogTeaserSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'
import { LinkButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'ProDB Tecnologia | Cloud Brasileira Certificada — Servidores e Backup',
  description:
    'Cloud especialista brasileira: servidores gerenciados e backup com SLA 99,982%, ISO 27001, Tier III e suporte humano 24/7 em português. A partir de R$ 306/mês.',
  openGraph: {
    title: 'ProDB Tecnologia | Cloud Brasileira Certificada',
    description:
      'Servidores cloud e backup gerenciado com SLA 99,982%, ISO 27001, Tier III e suporte 24/7 em português. Campinas/SP.',
    url: 'https://prodb.com.br',
    type: 'website',
  },
}

const certItems = [
  'ISO 27001',
  'ISO 20000',
  'ISO 50001',
  'ISO 14001',
  'ISO 37001',
  'PCI-DSS',
  'SOC',
  'Tier III Ascenty',
  'TR3 TÜV Rheinland',
  'Dell Technologies',
]

export default function HomePage() {
  return (
    <MarketingLayout>
      <HeroSection />

      {/* Certification marquee */}
      <div className="bg-white border-y border-slate-100 py-5">
        <MarqueeStrip items={certItems} speed="slow" />
      </div>

      <ProblemSection />
      <StatsSection />
      <SolutionsSection />
      <PillarsSection />
      <BackupPricingSection />

      {/* Servidores Cloud teaser */}
      <section className="py-16 md:py-24" style={{ background: '#F4F7FB' }} aria-labelledby="cloud-teaser-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: '#060E1C' }}
          >
            {/* Mesh */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-1/2 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 80% 50%, rgba(14,165,201,0.15) 0%, transparent 60%)',
              }}
            />
            <div className="relative max-w-xl">
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#0EA5C9' }}
              >
                Servidores Cloud
              </p>
              <h2
                id="cloud-teaser-heading"
                className="mb-3 text-2xl font-black md:text-3xl text-balance text-white leading-tight"
              >
                Você dimensiona. A gente migra, monitora e mantém no ar.
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'rgba(232,240,250,0.7)' }}>
                vCPU, RAM e SSD NVMe configuráveis. Nossa equipe técnica faz o
                dimensionamento, a migração assistida e o monitoramento contínuo.
                Em 4 a 8 horas, seu servidor está em produção.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4">
                {[
                  { label: 'vCPU', value: '2–64' },
                  { label: 'RAM', value: '4–512 GB' },
                  { label: 'SSD NVMe', value: 'até 10 TB' },
                  { label: 'Regiões', value: 'SP · RJ + DR' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl p-3 border"
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-base font-black" style={{ color: '#0EA5C9', fontFamily: 'var(--font-display)' }}>
                      {item.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(114,148,184,0.8)' }}>{item.label}</p>
                  </div>
                ))}
              </div>
              <LinkButton href="/servidores-cloud" size="lg" variant="primary">
                Montar minha configuração
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <CertificationsSection />
      <CustomersSection />
      <SupportSection />

      {/* Partner teaser */}
      <section className="py-12 md:py-16" style={{ background: '#F4F7FB' }}>
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Programa de Parceiros
              </p>
              <h2 className="text-lg font-black text-slate-900">
                Revenda cloud ProDB com margem de até 30%
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Para software houses, consultores e MSPs. Sem taxa de adesão, com treinamento técnico incluso.
              </p>
            </div>
            <LinkButton href="/seja-um-parceiro" size="md" variant="secondary" className="shrink-0">
              Quero ser parceiro
            </LinkButton>
          </div>
        </div>
      </section>

      <BlogTeaserSection />
      <CTABandSection />
    </MarketingLayout>
  )
}
