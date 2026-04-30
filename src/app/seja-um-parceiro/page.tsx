// Conversion goal: "Quero ser parceiro ProDB" (PartnerForm submit)
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { PartnerForm } from '@/components/forms/PartnerForm'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seja um Parceiro ProDB | Revenda Cloud Brasileira',
  description:
    'Programa de parceiros ProDB: revenda servidores cloud e backup gerenciado com margem garantida. Para software houses, consultores e MSPs.',
}

const partnerTypes = [
  {
    title: 'Software Houses & SaaS',
    description: 'Ofereça hosting gerenciado para seus clientes sem operar infraestrutura. Margem de revenda com SLA garantido.',
  },
  {
    title: 'Consultores de TI',
    description: 'Agregue cloud e backup ao seu portfólio. Aumente ticket médio e recorrência sem headcount adicional.',
  },
  {
    title: 'MSPs',
    description: 'White-label disponível para provedores de serviços gerenciados. Plataforma de gerenciamento multi-cliente.',
  },
  {
    title: 'Integradores',
    description: 'Combine hardware, rede e cloud ProDB em projetos end-to-end para médias e grandes empresas.',
  },
]

const benefits = [
  'Margem de revenda de até 30% em contratos de cloud',
  'Treinamento técnico certificado sem custo',
  'Material de vendas e co-marketing',
  'Engenheiro de pré-venda dedicado para oportunidades qualificadas',
  'Portal de parceiros com visibilidade de todos os seus clientes',
  'SLA contratual repassável ao cliente final',
  'Suporte L2/L3 direto — sem passar por tier 1 genérico',
  'Opção white-label para MSPs e revendas',
]

const howItWorks = [
  {
    step: '01',
    title: 'Preencha o formulário',
    description: 'Conta um pouco sobre sua empresa, clientes e o que você quer oferecer. Nossa equipe comercial analisa em até 2h úteis.',
  },
  {
    step: '02',
    title: 'Alinhamento técnico e comercial',
    description: 'Uma chamada de 30 minutos com nosso time de parcerias para alinhar modelo de negócio, margens e processo de repasse.',
  },
  {
    step: '03',
    title: 'Contrato e onboarding',
    description: 'Contrato de parceria assinado digitalmente. Acesso ao portal de parceiros, treinamento e materiais de vendas.',
  },
  {
    step: '04',
    title: 'Primeira oportunidade juntos',
    description: 'Nosso engenheiro de pré-venda acompanha a primeira proposta técnica para que você ganhe confiança no portfólio.',
  },
]

export default function SejaUmParceiroPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 80% 30%, #F59E0B 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Programa de Parceiros
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
              Revenda cloud brasileira{' '}
              <span className="text-amber-400">com margem garantida</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Para software houses, consultores e MSPs que querem ofertar infraestrutura cloud
              certificada sem operar datacenter. Margem de até 30%, suporte técnico dedicado e
              white-label disponível.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span>✓ Margem até 30%</span>
              <span>✓ Sem taxa de adesão</span>
              <span>✓ White-label disponível</span>
              <span>✓ Treinamento incluso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="partner-types-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="partner-types-heading" className="mb-8 text-2xl font-bold text-slate-900">
            Para quem é o programa de parceiros?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map(pt => (
              <div key={pt.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-sm font-bold text-slate-900">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                Benefícios
              </p>
              <h2 id="benefits-heading" className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl text-balance">
                O que você recebe ao se tornar parceiro
              </h2>
              <ul className="space-y-3">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <Check size={16} className="text-success-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Stats */}
            <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-amber-400">
                Números do programa
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '30%', label: 'Margem máxima de revenda' },
                  { value: '2h', label: 'Resposta a oportunidades qualificadas' },
                  { value: '0', label: 'Taxa de adesão ao programa' },
                  { value: '24/7', label: 'Suporte técnico L2/L3 ao parceiro' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="mono-stat text-3xl font-black text-cyan-400 mb-1">{stat.value}</p>
                    <p className="text-xs text-slate-400 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="partner-process-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="partner-process-heading" className="mb-10 text-2xl font-bold text-slate-900">
            Como funciona o processo
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {howItWorks.map(step => (
              <div key={step.step} className="flex flex-col gap-4">
                <div className="mono-stat text-4xl font-black text-slate-200">{step.step}</div>
                <div>
                  <h3 className="mb-2 text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formulario-parceiro" className="bg-white py-16 md:py-24" aria-labelledby="partner-form-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_520px] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                Candidatura
              </p>
              <h2 id="partner-form-heading" className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl text-balance">
                Quero ser parceiro ProDB
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
                Preencha o formulário ao lado. Nossa equipe de parcerias entrará em contato em até
                2 horas úteis para dar sequência ao processo.
              </p>
              <div className="space-y-3">
                {[
                  'Sem taxa de adesão',
                  'Processo de qualificação em 1 semana',
                  'Primeiro cliente com suporte de pré-venda da ProDB',
                  'Contrato simples, sem exclusividade',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check size={14} className="text-success-500 shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      <CTABandSection
        heading="Dúvidas antes de se candidatar?"
        subheading="Fale direto com nosso time de parcerias pelo WhatsApp ou e-mail."
        primaryLabel="Falar com time de parcerias"
        primaryHref="/contato?assunto=Parceiro"
        secondaryLabel="Ver casos de uso"
        secondaryHref="/servidores-cloud#casos-de-uso"
      />
    </MarketingLayout>
  )
}
