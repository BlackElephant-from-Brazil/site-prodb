// Conversion goal: "Solicitar proposta" (configurator) / "Falar com especialista"
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { CloudConfigurator } from '@/components/sections/CloudConfigurator'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { useCases, migrationSteps, slaTable, cloudFaqs } from '@/content/cloud-plans'
import { Check } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { Building2, ShieldCheck, Layers, Heart, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servidores Cloud Gerenciados | ProDB Tecnologia',
  description:
    'Servidores cloud brasileiros com SLA 99,99%, SSD NVMe, suporte humano 24/7 em português. IaaS, Gerenciado e Full Managed. Configure e solicite proposta online.',
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
      <section className="bg-navy-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 70% 40%, #22D3EE 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Servidores Cloud
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
              Infraestrutura cloud brasileira.{' '}
              <span className="text-cyan-400">SLA 99,99% em contrato.</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Servidores gerenciados com SSD NVMe, redundância Tier III e suporte humano em
              português — sem taxas de egresso surpresa, sem contrato mínimo nos planos de catálogo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#configurador" size="lg" variant="primary">
                Montar minha configuração
              </LinkButton>
              <LinkButton href="/contato" size="lg" variant="dark-secondary">
                Falar com especialista
              </LinkButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              <span>✓ Datacenters Tier III</span>
              <span>✓ Dados no Brasil</span>
              <span>✓ Suporte 24/7 em português</span>
              <span>✓ Sem lock-in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-start text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
              <span>Todos os sistemas operacionais em tempo real</span>
            </div>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>Provisionamento em 4–8 horas</span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span>ISO 27001 · SOC 2 Tipo II</span>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="casos-de-uso" className="bg-slate-50 py-16 md:py-24" aria-labelledby="use-cases-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="mb-10">
            <h2 id="use-cases-heading" className="text-2xl font-bold text-slate-900 md:text-3xl text-balance">
              Para quem é o servidor cloud ProDB?
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
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
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon size={20} className="text-cyan-600" aria-hidden="true" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {uc.vertical}
                  </p>
                  <h3 className="mb-2 text-base font-bold text-slate-900">{uc.title}</h3>
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

      {/* Tech stack */}
      <section className="bg-navy-900 text-white py-16 md:py-20" aria-labelledby="tech-stack-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="tech-stack-heading" className="mb-2 text-2xl font-bold md:text-3xl text-balance">
            A infraestrutura que roda por baixo
          </h2>
          <p className="mb-10 text-slate-400 max-w-xl">
            Não vendemos commodity. Cada camada foi escolhida por desempenho e confiabilidade.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map(item => (
              <div
                key={item.label}
                className="rounded-xl border border-navy-700 bg-navy-800 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                  {item.label}
                </p>
                <p className="text-base font-bold text-white mb-1">{item.value}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration process */}
      <section id="migracao" className="bg-white py-16 md:py-24" aria-labelledby="migration-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-2xl mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Migração assistida
            </p>
            <h2 id="migration-heading" className="text-2xl font-bold text-slate-900 md:text-3xl text-balance">
              Migramos com você. Sem downtime não planejado.
            </h2>
            <p className="mt-3 text-slate-600">
              Nosso processo de migração tem quatro etapas — cada uma com entregável e responsável definido.
              Você nunca fica sem saber o que está acontecendo.
            </p>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute top-8 left-8 right-8 h-px bg-slate-200 hidden md:block"
            />
            <div className="grid gap-8 md:grid-cols-4">
              {migrationSteps.map((step, i) => (
                <div key={step.step} className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-white relative z-10">
                      <span className="mono-stat text-xl font-black text-cyan-400">{step.step}</span>
                    </div>
                    <div className="md:hidden">
                      <p className="text-xs font-semibold text-slate-500">{step.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {step.duration}
                    </span>
                  </div>
                  {i < migrationSteps.length - 1 && (
                    <div aria-hidden="true" className="absolute left-8 top-16 w-px h-8 bg-slate-200 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLA table */}
      <section id="sla" className="bg-slate-50 py-16 md:py-20 overflow-x-auto" aria-labelledby="sla-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="sla-heading" className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
            SLA em contrato — não em marketing
          </h2>
          <p className="mb-8 text-slate-600 max-w-xl">
            Cada métrica abaixo está disponível no corpo do contrato, com crédito automático caso não cumprida.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm min-w-[640px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left font-semibold text-slate-900">Métrica</th>
                  <th className="py-4 px-4 text-center font-semibold text-slate-700">IaaS / Gerenciado</th>
                  <th className="py-4 px-4 text-center font-semibold text-cyan-600">Full Managed</th>
                  <th className="py-4 px-4 text-left text-xs font-medium text-slate-500">Observação</th>
                </tr>
              </thead>
              <tbody>
                {slaTable.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-6 font-medium text-slate-800">{row.metric}</td>
                    <td className="py-3 px-4 text-center text-slate-700 mono-stat">{row.standard}</td>
                    <td className="py-3 px-4 text-center font-semibold text-cyan-700 mono-stat">{row.premium}</td>
                    <td className="py-3 px-4 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Disponibilidade medida mensalmente. Créditos emitidos automaticamente na fatura seguinte.
            Consulte o contrato para termos completos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
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
        subheading="Monte sua configuração no configurador acima ou fale direto com um especialista."
        primaryLabel="Montar minha configuração"
        primaryHref="#configurador"
        secondaryLabel="Falar com especialista"
        secondaryHref="/contato"
      />
    </MarketingLayout>
  )
}
