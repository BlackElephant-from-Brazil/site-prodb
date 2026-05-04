// Conversion goal: "Solicitar proposta" (configurator) / "Falar com especialista"
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { CloudConfigurator } from '@/components/sections/CloudConfigurator'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { SynthwaveGrid } from '@/components/ui/SynthwaveGrid'
import { useCases, migrationSteps, slaTable, cloudFaqs } from '@/content/cloud-plans'
import { Check } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { Building2, ShieldCheck, Layers, Heart, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servidores Cloud Gerenciados | ProDB Tecnologia',
  description:
    'Servidores cloud brasileiros com SLA 99,982%, SSD NVMe, suporte humano 24/7 em português. IaaS, Gerenciado e Full Managed. Configure e solicite proposta online.',
}

const iconMap = {
  Building2,
  ShieldCheck,
  Layers,
  Heart,
  ShoppingCart,
} as const

const techStack = [
  { label: 'Hypervisor', value: 'KVM / VMware ESXi', detail: 'Isolamento total entre VMs, live migration.' },
  { label: 'Rede', value: 'SDN 25–100 Gbps', detail: 'Spine-leaf, redundância dupla, zero single-point.' },
  { label: 'Storage', value: 'NVMe All-Flash', detail: 'IOPS 500K+, latência < 0,5ms, RAID-6 distribuído.' },
  { label: 'Datacenters', value: 'Tier III', detail: 'Uptime 99,982%, 2N energia, 2 operadoras de fibra.' },
  { label: 'Backup', value: 'Snapshot + OBM', detail: 'RPO configurável, retenção até 365 dias.' },
  { label: 'Segurança', value: 'Firewall + DDoS', detail: 'Mitigação DDoS 40 Gbps, WAF opcional, VPN L3.' },
]

export default function ServidoresCloudPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white pt-28 pb-20 md:pt-32 md:pb-32"
        style={{ background: '#060E1C' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(14,165,201,0.3) 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#0EA5C9' }}
            >
              Servidores Cloud
            </p>
            <h1
              className="mb-5 text-4xl font-black leading-tight md:text-5xl text-balance"
              style={{ lineHeight: 1.05 }}
            >
              Infraestrutura cloud brasileira.{' '}
              <span style={{ color: '#0EA5C9' }}>SLA 99,982% em contrato.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(232,240,250,0.7)' }}>
              Servidores gerenciados com SSD NVMe, redundância Tier III e suporte humano em
              português. Sem taxas de egresso surpresa. Sem contrato mínimo nos planos de catálogo.
              Cobrança previsível em reais.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#configurador" size="lg" variant="primary">
                Montar minha configuração
              </LinkButton>
              <LinkButton href="/contato" size="lg" variant="dark-secondary">
                Falar com especialista
              </LinkButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(114,148,184,0.7)' }}>
              <span>Datacenters Tier III</span>
              <span>·</span>
              <span>Dados no Brasil</span>
              <span>·</span>
              <span>Suporte 24/7 em português</span>
              <span>·</span>
              <span>Sem lock-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-start text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
              <span>Todos os sistemas operacionais em tempo real</span>
            </div>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>Provisionamento em 4–8 horas</span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>ISO 27001 · SOC</span>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="casos-de-uso" className="py-16 md:py-24" style={{ background: '#F4F7FB' }} aria-labelledby="use-cases-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="mb-10">
            <h2 id="use-cases-heading" className="text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight">
              Para quem é o servidor cloud ProDB?
            </h2>
            <p className="mt-2 text-slate-500 max-w-2xl">
              Workloads que exigem dados no Brasil, suporte em português e SLA em contrato.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(uc => {
              const Icon = iconMap[uc.icon as keyof typeof iconMap]
              return (
                <div
                  key={uc.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-cyan-300 hover:shadow-md transition-all"
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(14,165,201,0.1)' }}
                  >
                    <Icon size={20} style={{ color: '#0EA5C9' }} aria-hidden="true" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {uc.vertical}
                  </p>
                  <h3 className="mb-2 text-base font-black text-slate-900">{uc.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{uc.description}</p>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <Check size={14} className="text-success-500 shrink-0" aria-hidden="true" />
                    <span className="text-xs text-slate-600 font-medium">{uc.highlight}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Configurator */}
      <CloudConfigurator />

      {/* Tech stack — synthwave grid section */}
      <section
        className="relative overflow-hidden text-white py-16 md:py-24"
        style={{ background: '#060E1C' }}
        aria-labelledby="tech-stack-heading"
      >
        <SynthwaveGrid particleCount={6} />

        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2
            id="tech-stack-heading"
            className="mb-2 text-3xl font-black md:text-4xl text-balance leading-tight"
          >
            A infraestrutura que roda por baixo
          </h2>
          <p className="mb-10 max-w-xl" style={{ color: 'rgba(114,148,184,0.8)' }}>
            Não vendemos commodity. Cada camada foi escolhida por desempenho e confiabilidade comprovados.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map(item => (
              <div
                key={item.label}
                className="rounded-xl p-5 border backdrop-blur-sm"
                style={{
                  background: 'rgba(11,24,40,0.8)',
                  borderColor: 'rgba(14,165,201,0.15)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: '#0EA5C9' }}
                >
                  {item.label}
                </p>
                <p className="text-base font-black text-white mb-1">{item.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(114,148,184,0.7)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration process */}
      <section id="migracao" className="bg-white py-16 md:py-24" aria-labelledby="migration-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-2xl mb-12">
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#0EA5C9' }}
            >
              Migração assistida
            </p>
            <h2 id="migration-heading" className="text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight">
              Migramos com você. Sem downtime não planejado.
            </h2>
            <p className="mt-3 text-slate-600">
              Nosso processo tem quatro etapas — cada uma com entregável e responsável definido.
              Você nunca fica sem saber o que está acontecendo.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-8 left-8 right-8 h-px bg-slate-100 hidden md:block"
            />
            <div className="grid gap-8 md:grid-cols-4">
              {migrationSteps.map((step, i) => (
                <div key={step.step} className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl relative z-10"
                      style={{ background: '#060E1C' }}
                    >
                      <span
                        className="text-xl font-black"
                        style={{ color: '#0EA5C9', fontFamily: 'var(--font-display)' }}
                      >
                        {step.step}
                      </span>
                    </div>
                    <div className="md:hidden">
                      <p className="text-xs font-semibold text-slate-400">{step.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-black text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {step.duration}
                    </span>
                  </div>
                  {i < migrationSteps.length - 1 && (
                    <div aria-hidden="true" className="absolute left-8 top-16 w-px h-8 bg-slate-100 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLA table */}
      <section id="sla" className="py-16 md:py-20 overflow-x-auto" style={{ background: '#F4F7FB' }} aria-labelledby="sla-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="sla-heading" className="mb-2 text-3xl font-black text-slate-900 md:text-4xl">
            SLA em contrato — não em marketing
          </h2>
          <p className="mb-8 text-slate-500 max-w-xl">
            Cada métrica abaixo está no corpo do contrato, com crédito automático caso não cumprida.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm min-w-[640px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left font-semibold text-slate-900">Métrica</th>
                  <th className="py-4 px-4 text-center font-semibold text-slate-700">IaaS / Gerenciado</th>
                  <th className="py-4 px-4 text-center font-semibold" style={{ color: '#0EA5C9' }}>Full Managed</th>
                  <th className="py-4 px-4 text-left text-xs font-medium text-slate-400">Observação</th>
                </tr>
              </thead>
              <tbody>
                {slaTable.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-6 font-medium text-slate-800">{row.metric}</td>
                    <td className="py-3 px-4 text-center text-slate-700" style={{ fontFamily: 'var(--font-mono)' }}>{row.standard}</td>
                    <td className="py-3 px-4 text-center font-semibold" style={{ color: '#0EA5C9', fontFamily: 'var(--font-mono)' }}>{row.premium}</td>
                    <td className="py-3 px-4 text-xs text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Disponibilidade medida mensalmente. Créditos emitidos automaticamente na fatura seguinte.
            Consulte o contrato para termos completos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-2xl font-black text-slate-900 md:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="space-y-3">
              {cloudFaqs.map(faq => (
                <details key={faq.q} className="group rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition-colors list-none">
                    {faq.q}
                    <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform text-xl leading-none">
                      ↓
                    </span>
                  </summary>
                  <p className="px-6 pb-5 pt-2 text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificationsSection />
      <CTABandSection
        heading="Pronto para migrar sua infraestrutura para o Brasil?"
        subheading="Monte sua configuração ou fale direto com um especialista. Respondemos em até 2 horas úteis."
        primaryLabel="Montar minha configuração"
        primaryHref="#configurador"
        secondaryLabel="Falar com especialista"
        secondaryHref="/contato"
      />
    </MarketingLayout>
  )
}
