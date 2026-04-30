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
import { LinkButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'ProDB Tecnologia | Cloud Brasileira Certificada — Servidores e Backup',
  description:
    'Cloud especialista brasileira: servidores gerenciados e backup com SLA 99,99%, ISO 27001, Tier III e suporte humano 24/7 em português. A partir de R$ 99/mês.',
  openGraph: {
    title: 'ProDB Tecnologia | Cloud Brasileira Certificada',
    description:
      'Servidores cloud e backup gerenciado com SLA 99,99%, ISO 27001, Tier III e suporte 24/7 em português. Campinas/SP.',
    url: 'https://prodb.com.br',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <MarketingLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <PillarsSection />
      <BackupPricingSection />

      {/* Servidores Cloud teaser */}
      <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="cloud-teaser-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-1/2 opacity-10"
              style={{
                background: 'radial-gradient(ellipse at 80% 50%, #22D3EE 0%, transparent 60%)',
              }}
            />
            <div className="relative max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Servidores Cloud
              </p>
              <h2 id="cloud-teaser-heading" className="mb-3 text-2xl font-bold md:text-3xl text-balance">
                Configure seu servidor cloud em minutos
              </h2>
              <p className="mb-6 text-slate-300 leading-relaxed">
                vCPU, RAM, SSD e localização — ajuste a configuração ideal para sua carga.
                Nossa equipe faz o dimensionamento técnico e a migração assistida.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4">
                {[
                  { label: 'vCPU', value: '2–64' },
                  { label: 'RAM', value: '4–512 GB' },
                  { label: 'SSD NVMe', value: 'até 10 TB' },
                  { label: 'Regiões', value: 'SP · RJ + DR' },
                ].map(item => (
                  <div key={item.label} className="rounded-xl bg-navy-800 border border-navy-700 p-3">
                    <p className="mono-stat text-base font-bold text-cyan-400">{item.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.label}</p>
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
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Programa de Parceiros
              </p>
              <h2 className="text-lg font-bold text-slate-900">
                Revenda cloud ProDB com margem garantida
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Para software houses, consultores e MSPs que querem ofertar cloud brasileira certificada.
              </p>
            </div>
            <LinkButton href="/seja-um-parceiro" size="md" variant="secondary" className="shrink-0">
              Quero ser parceiro →
            </LinkButton>
          </div>
        </div>
      </section>

      <BlogTeaserSection />
      <CTABandSection />
    </MarketingLayout>
  )
}
