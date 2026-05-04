// Conversion goal: "Começar teste grátis de 15 dias"
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { BackupPricingSection } from '@/components/sections/BackupPricingSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { RippleRings } from '@/components/ui/RippleRings'
import { backupFeatureMatrix } from '@/content/backup-plans'
import { Check, X } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Backup Gerenciado | ProDB Tecnologia',
  description:
    'Backup em nuvem empresarial com RPO e RTO definidos em contrato. Plano Avançado R$ 306/mês com 1TB. Teste grátis de 15 dias. ISO 27001, LGPD-ready.',
}

const howItWorks = [
  {
    step: '01',
    title: 'Instale o agente OBM',
    description:
      'O Online Backup Manager (OBM) é instalado nos servidores ou estações que você quer proteger. Configuração em menos de 15 minutos. Nossa equipe acompanha.',
  },
  {
    step: '02',
    title: 'Configure o agendamento',
    description:
      'Defina quais pastas, bancos de dados ou sistemas serão incluídos e a frequência. Backup diário automático é o padrão. Intervalos menores disponíveis sob medida.',
  },
  {
    step: '03',
    title: 'Execute simulações de restauração',
    description:
      'Backup sem teste de restauração é promessa, não proteção. Nossa equipe acompanha os primeiros testes e registra os RTOs reais do seu ambiente em contrato.',
  },
]

const faqs = [
  {
    q: 'Qual é o RPO e RTO padrão?',
    a: 'O RPO padrão é de 24 horas (backup diário). O RTO depende do volume de dados e do tipo de restauração. No plano Avançado e Sob Medida, RPO e RTO são definidos em contrato.',
  },
  {
    q: 'Os dados ficam armazenados no Brasil?',
    a: 'Sim. Todo o armazenamento é em datacenters brasileiros certificados Tier III, sob CNPJ nacional. Não há transferência internacional de dados sem seu consentimento explícito.',
  },
  {
    q: 'O que é o OBM (Online Backup Manager)?',
    a: 'O OBM é o agente de backup instalado nos seus servidores ou estações. Ele gerencia a compressão, criptografia AES-256 e transmissão incremental dos dados até a nuvem ProDB.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Os planos Essencial e Avançado não têm fidelidade mínima. O plano Sob Medida tem condições de rescisão definidas no contrato individual.',
  },
  {
    q: 'Os dados são criptografados?',
    a: 'Sim. Os dados são criptografados no dispositivo (AES-256) antes da transmissão e armazenados criptografados. A chave de criptografia fica com você.',
  },
  {
    q: 'O backup inclui bancos de dados?',
    a: 'Sim. O OBM suporta backup de SQL Server, MySQL, PostgreSQL, Oracle e outros. Consulte a documentação técnica para versões homologadas.',
  },
  {
    q: 'Como funciona o teste grátis de 15 dias?',
    a: 'Você ativa o plano Avançado sem cartão de crédito. Após 15 dias, se quiser continuar, cadastre uma forma de pagamento. Se não, os dados são removidos com segurança.',
  },
  {
    q: 'O plano Avançado atende a requisitos LGPD?',
    a: 'Sim. Os planos Avançado e Sob Medida incluem relatório de conformidade e retenção configurável conforme políticas de dados da sua empresa.',
  },
]

export default function BackupPage() {
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
          style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(14,165,201,0.3) 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#0EA5C9' }}
            >
              Backup gerenciado
            </p>
            <h1
              className="mb-5 text-4xl font-black leading-tight md:text-5xl text-balance"
              style={{ lineHeight: 1.05 }}
            >
              Quando o servidor falha,{' '}
              <span style={{ color: '#0EA5C9' }}>seus dados precisam estar em outro lugar.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(232,240,250,0.7)' }}>
              Backup em nuvem com RPO e RTO definidos em contrato. Plano Avançado: 1TB,
              R$ 306/mês. Teste grátis de 15 dias — sem cartão de crédito, sem compromisso.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#planos-backup" size="lg" variant="primary">
                Começar teste grátis de 15 dias
              </LinkButton>
              <LinkButton href="#como-funciona" size="lg" variant="dark-secondary">
                Como funciona
              </LinkButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(114,148,184,0.7)' }}>
              <span>ISO 27001</span>
              <span>·</span>
              <span>Dados no Brasil</span>
              <span>·</span>
              <span>LGPD-compliant</span>
              <span>·</span>
              <span>Sem contrato mínimo</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-16 md:py-20" style={{ background: '#F4F7FB' }}>
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 className="mb-10 text-3xl font-black text-slate-900 md:text-4xl">
            Como funciona
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorks.map(step => (
              <div key={step.step} className="flex flex-col gap-4">
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: '4rem',
                    color: '#0EA5C9',
                    opacity: 0.15,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-black text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — with ripple background */}
      <div className="relative overflow-hidden">
        <RippleRings color="rgba(14,165,201,0.1)" count={3} />
        <BackupPricingSection />
      </div>

      {/* Feature matrix */}
      <section className="py-16 md:py-20 overflow-x-auto" style={{ background: '#F4F7FB' }}>
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 className="mb-8 text-2xl font-black text-slate-900">
            Comparativo completo de planos
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left font-semibold text-slate-900 w-1/2">Funcionalidade</th>
                  <th className="py-4 px-4 text-center font-semibold text-slate-700">Essencial</th>
                  <th className="py-4 px-4 text-center font-semibold" style={{ color: '#0EA5C9' }}>Avançado</th>
                  <th className="py-4 px-4 text-center font-semibold text-slate-700">Sob Medida</th>
                </tr>
              </thead>
              <tbody>
                {backupFeatureMatrix.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-6 font-medium text-slate-800">{row.label}</td>
                    {(['essencial', 'avancado', 'sobMedida'] as const).map(plan => (
                      <td key={plan} className="py-3 px-4 text-center">
                        {typeof row[plan] === 'boolean' ? (
                          row[plan] ? (
                            <Check size={16} className="mx-auto text-success-500" />
                          ) : (
                            <X size={16} className="mx-auto text-slate-300" />
                          )
                        ) : (
                          <span className={plan === 'avancado' ? 'font-medium' : 'text-slate-700'}
                            style={plan === 'avancado' ? { color: '#0EA5C9' } : undefined}
                          >
                            {row[plan] as string}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              {faqs.map(faq => (
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
        heading="15 dias grátis. Sem cartão de crédito."
        subheading="Ative agora o plano Avançado e veja seu backup funcionando ainda hoje."
        primaryLabel="Começar teste grátis de 15 dias"
        primaryHref="#planos-backup"
        secondaryLabel="Falar com especialista"
        secondaryHref="/contato"
      />
    </MarketingLayout>
  )
}
