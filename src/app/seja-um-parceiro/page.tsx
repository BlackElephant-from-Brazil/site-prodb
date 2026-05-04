// Conversion goal: "Quero ser parceiro ProDB" (PartnerForm submit)
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { PartnerForm } from '@/components/forms/PartnerForm'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seja um Parceiro ProDB | Revenda Cloud Brasileira',
  description:
    'Programa de parceiros ProDB: revenda servidores cloud e backup gerenciado com margem de até 30%. Para software houses, consultores e MSPs. Sem taxa de adesão.',
}

const partnerTypes = [
  {
    title: 'Software Houses e SaaS',
    description: 'Ofereça hosting gerenciado para seus clientes sem operar infraestrutura. Margem de revenda com SLA garantido em contrato.',
  },
  {
    title: 'Consultores de TI',
    description: 'Agregue cloud e backup ao seu portfólio. Aumente ticket médio e recorrência sem headcount adicional.',
  },
  {
    title: 'MSPs',
    description: 'White-label disponível para provedores de serviços gerenciados. Plataforma de gerenciamento multi-cliente com visibilidade total.',
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
    description: 'Conta um pouco sobre sua empresa, clientes e o que você quer oferecer. Nossa equipe analisa em até 2 horas úteis.',
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
    description: 'Nosso engenheiro de pré-venda acompanha a primeira proposta técnica para que você ganhe confiança no portfólio ProDB.',
  },
]

const partnerLogos = [
  'Softilux', 'Kruzer', 'M3 Case', 'Gestão Dinâmica', 'Pushin Pay', 'Inntegra',
]

export default function SejaUmParceiroPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white pt-28 pb-20 md:pt-32 md:pb-32"
        style={{ background: '#060E1C' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(232,140,10,0.4) 0%, transparent 50%)' }}
        />

        {/* Animated vertical beam diagram */}
        <div
          className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          aria-hidden="true"
          style={{ width: 180, height: 360 }}
        >
          <svg width="180" height="360" viewBox="0 0 180 360" fill="none">
            <defs>
              <linearGradient id="vbeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E88C0A" stopOpacity="0" />
                <stop offset="30%" stopColor="#E88C0A" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0EA5C9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0EA5C9" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Center beam */}
            <line
              x1="90" y1="20" x2="90" y2="340"
              stroke="url(#vbeam)" strokeWidth="1.5"
              className="animate-beam-draw"
            />

            {/* Node: Parceiro */}
            <circle cx="90" cy="80" r="28" fill="rgba(232,140,10,0.12)" stroke="rgba(232,140,10,0.4)" strokeWidth="1" />
            <circle cx="90" cy="80" r="6" fill="#E88C0A" className="animate-beam-pulse" />
            <text x="90" y="120" textAnchor="middle" fill="rgba(232,240,250,0.7)" fontSize="11" fontWeight="600">
              Parceiro
            </text>

            {/* Node: ProDB */}
            <circle cx="90" cy="180" r="32" fill="rgba(14,165,201,0.12)" stroke="rgba(14,165,201,0.4)" strokeWidth="1.5" />
            <circle cx="90" cy="180" r="8" fill="#0EA5C9" className="animate-beam-pulse" style={{ animationDelay: '0.3s' }} />
            <text x="90" y="222" textAnchor="middle" fill="rgba(232,240,250,0.7)" fontSize="11" fontWeight="700">
              ProDB
            </text>

            {/* Node: Cliente */}
            <circle cx="90" cy="290" r="24" fill="rgba(14,165,201,0.08)" stroke="rgba(14,165,201,0.3)" strokeWidth="1" />
            <circle cx="90" cy="290" r="5" fill="rgba(14,165,201,0.7)" className="animate-beam-pulse" style={{ animationDelay: '0.6s' }} />
            <text x="90" y="326" textAnchor="middle" fill="rgba(232,240,250,0.5)" fontSize="11" fontWeight="600">
              Cliente final
            </text>
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-2xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#E88C0A' }}
            >
              Programa de Parceiros
            </p>
            <h1
              className="mb-5 text-4xl font-black leading-tight md:text-5xl text-balance"
              style={{ lineHeight: 1.05 }}
            >
              Venda cloud brasileira certificada{' '}
              <span style={{ color: '#E88C0A' }}>com margem de até 30%.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(232,240,250,0.7)' }}>
              Para software houses, consultores e MSPs que querem ofertar infraestrutura cloud
              certificada sem operar datacenter. Sem taxa de adesão. Treinamento técnico incluso.
              White-label disponível.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(232,240,250,0.6)' }}>
              <span>Margem até 30%</span>
              <span>·</span>
              <span>Sem taxa de adesão</span>
              <span>·</span>
              <span>White-label disponível</span>
              <span>·</span>
              <span>Treinamento incluso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current partners */}
      <div className="bg-white border-b border-slate-100 py-5">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 shrink-0">
              Parceiros ativos
            </p>
            {partnerLogos.map(name => (
              <span key={name} className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Partner types */}
      <section
        className="py-16 md:py-20"
        style={{ background: '#F4F7FB' }}
        aria-labelledby="partner-types-heading"
      >
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="partner-types-heading" className="mb-8 text-3xl font-black text-slate-900">
            Para quem é o programa de parceiros?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map(pt => (
              <div
                key={pt.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
              >
                <h3 className="mb-2 text-sm font-black text-slate-900">{pt.title}</h3>
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
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#0EA5C9' }}
              >
                Benefícios
              </p>
              <h2 id="benefits-heading" className="mb-6 text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight">
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

            {/* Stats dark card */}
            <div
              className="rounded-3xl text-white p-8 md:p-10"
              style={{ background: '#060E1C' }}
            >
              <p
                className="mb-6 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#E88C0A' }}
              >
                Números do programa
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '30%', label: 'Margem máxima de revenda' },
                  { value: '2h', label: 'Resposta a oportunidades qualificadas' },
                  { value: 'R$ 0', label: 'Taxa de adesão ao programa' },
                  { value: '24/7', label: 'Suporte técnico L2/L3 ao parceiro' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p
                      className="text-3xl font-black mb-1"
                      style={{ color: '#0EA5C9', fontFamily: 'var(--font-display)' }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(114,148,184,0.7)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="py-16 md:py-20"
        style={{ background: '#F4F7FB' }}
        aria-labelledby="partner-process-heading"
      >
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="partner-process-heading" className="mb-10 text-3xl font-black text-slate-900">
            Como funciona o processo
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {howItWorks.map(step => (
              <div key={step.step} className="flex flex-col gap-4">
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: '4rem',
                    color: '#E88C0A',
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

      {/* Form */}
      <section
        id="formulario-parceiro"
        className="bg-white py-16 md:py-24"
        aria-labelledby="partner-form-heading"
      >
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_520px] lg:items-start">
            <div>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#E88C0A' }}
              >
                Candidatura
              </p>
              <h2 id="partner-form-heading" className="mb-4 text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight">
                Quero ser parceiro ProDB
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
                Preencha o formulário ao lado. Nossa equipe de parcerias entra em contato
                em até 2 horas úteis para dar sequência ao processo.
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
        subheading="Fale direto com nosso time de parcerias pelo WhatsApp ou e-mail. Respondemos em até 2 horas úteis."
        primaryLabel="Falar com time de parcerias"
        primaryHref="/contato?assunto=Parceiro"
        secondaryLabel="Ver casos de uso"
        secondaryHref="/servidores-cloud#casos-de-uso"
      />
    </MarketingLayout>
  )
}
