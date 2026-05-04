// Conversion goal: "Falar com especialista" / trust-building page
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { CircularText } from '@/components/ui/CircularText'
import { LinkButton } from '@/components/ui/Button'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre a ProDB | Cloud Brasileira Certificada desde 2011',
  description:
    'ProDB Tecnologia: 14+ anos entregando cloud e backup gerenciado para empresas brasileiras. ISO 27001, Tier III Ascenty, equipe técnica em Campinas/SP.',
}

const timeline = [
  {
    year: '2011',
    title: 'Fundação em Campinas',
    description:
      'A ProDB nasce com foco na administração de bancos de dados para empresas de todos os portes. Missão desde o início: infraestrutura confiável com suporte em português.',
  },
  {
    year: '2013',
    title: 'Parceria Ascenty — Tier III',
    description:
      '100% da infraestrutura migrada para o datacenter Tier III da Ascenty, em São Paulo. Uptime garantido de 99,982% passa a ser cláusula contratual.',
  },
  {
    year: '2016',
    title: 'Parceria Dell Technologies',
    description:
      'Toda a infraestrutura de servidores e storage passa a ser Dell Technologies. Performance previsível, suporte de nível enterprise para cada cliente.',
  },
  {
    year: '2021',
    title: '2º Datacenter em Osasco/SP',
    description:
      'Expansão para o segundo ponto de presença em Osasco, com opção de Disaster Recovery automático. Redundância geográfica real para workloads críticos.',
  },
  {
    year: '2025',
    title: 'Foco em experiência do cliente',
    description:
      'Escuta ativa do cliente como pilar de operação. Cada feedback vira processo. Cada incidente vira aprendizado documentado e compartilhado.',
  },
]

const values = [
  {
    title: 'Clareza acima de marketing',
    description:
      'Publicamos SLAs reais no contrato, não em rodapé. Se algo falhar, você recebe crédito automaticamente. Sem precisar ligar para cobrar.',
  },
  {
    title: 'Suporte que conhece seu nome',
    description:
      'Cada cliente tem um engenheiro de referência. Não existe fila de suporte tier 1 genérico antes de chegar em quem resolve.',
  },
  {
    title: 'Dados que ficam no Brasil',
    description:
      'Nenhum dado fica em servidor fora do Brasil sem seu consentimento explícito. Isso importa para LGPD, para auditoria e para latência.',
  },
  {
    title: 'Crescimento sem sobrevenda',
    description:
      'Não vendemos capacidade que não temos. Nossa infraestrutura é dimensionada antes de cada nova contratação. Sem overcommit.',
  },
]

export default function EmpresaPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white pt-28 pb-20 md:pt-32 md:pb-28"
        style={{ background: '#060E1C' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 20% 70%, rgba(232,140,10,0.4) 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
            <div className="max-w-2xl">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#E88C0A' }}
              >
                Nossa história
              </p>
              <h1
                className="mb-5 text-4xl font-black leading-tight md:text-5xl text-balance"
                style={{ lineHeight: 1.05 }}
              >
                14 anos entregando cloud{' '}
                <span style={{ color: '#E88C0A' }}>para empresas brasileiras.</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(232,240,250,0.7)' }}>
                A ProDB nasceu em Campinas em 2011 com uma convicção: empresas brasileiras merecem
                infraestrutura de nível enterprise com suporte em português e dados que nunca saem do Brasil.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {[
                  { v: '14+', l: 'anos de operação' },
                  { v: '550+', l: 'clientes ativos' },
                  { v: '99,982%', l: 'uptime histórico' },
                  { v: '24/7', l: 'suporte humano' },
                ].map(s => (
                  <div key={s.l}>
                    <p className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.v}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(114,148,184,0.7)' }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular text decoration */}
            <div className="hidden lg:flex justify-center">
              <CircularText
                text="FUNDADA EM CAMPINAS · DESDE 2011 · CLOUD BRASILEIRA · "
                radius={100}
                className="opacity-70"
                textClassName="fill-cyan-400/60"
                centerContent={
                  <div className="text-center">
                    <p className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>2011</p>
                    <p className="text-xs text-slate-400 mt-1">Campinas/SP</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="py-16 md:py-24" style={{ background: '#F4F7FB' }} aria-labelledby="mission-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#0EA5C9' }}
              >
                Missão
              </p>
              <h2
                id="mission-heading"
                className="mb-4 text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight"
              >
                Simplificar infraestrutura para que você possa focar no seu negócio
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Acreditamos que o gestor de TI não deve perder noites de sono com infraestrutura.
                Nossa função é absorver essa complexidade — hardware, rede, segurança, compliance —
                e entregá-la como um serviço previsível, auditável e com SLA em contrato.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Diferente dos hyperscalers globais, conhecemos os requisitos regulatórios brasileiros
                de dentro para fora: LGPD, BACEN, CFM, CFF. Não precisamos consultar uma base de
                conhecimento em inglês para responder sobre o seu ambiente.
              </p>
            </div>
            <div className="space-y-4">
              {values.map(v => (
                <div
                  key={v.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="mb-1.5 text-sm font-black text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2
            id="timeline-heading"
            className="mb-2 text-3xl font-black text-slate-900 md:text-4xl"
          >
            Nossa trajetória
          </h2>
          <p className="mb-10 text-slate-500 max-w-lg">
            Cada marco representa uma decisão intencional de crescer de forma responsável.
          </p>
          <div className="relative">
            <div aria-hidden="true" className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-100 md:left-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year bubble */}
                  <div
                    className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0"
                    style={{ background: '#060E1C' }}
                  >
                    <span
                      className="text-xs font-black text-center leading-tight"
                      style={{ color: '#0EA5C9', fontFamily: 'var(--font-display)' }}
                    >
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 md:w-[calc(50%-48px)] md:px-8 ${i % 2 === 0 ? 'md:text-right md:ml-0 md:mr-auto md:pr-16' : 'md:text-left md:ml-auto md:mr-0 md:pl-16'}`}>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                      <h3 className="mb-1 text-sm font-black text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsSection />

      {/* Location */}
      <section className="py-16 md:py-20" style={{ background: '#F4F7FB' }} aria-labelledby="location-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="location-heading" className="mb-4 text-2xl font-black text-slate-900">
                Onde estamos
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: '#0EA5C9' }} aria-hidden="true" />
                  <div>
                    <p className="font-bold">Sede</p>
                    <p className="text-slate-600">
                      R. José Rodrigues de Carvalho, 116 — Jd. Nilópolis<br />
                      Campinas/SP — CEP 13088-833
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0" style={{ color: '#0EA5C9' }} aria-hidden="true" />
                  <div>
                    <p className="font-bold">Telefone</p>
                    <p className="text-slate-600">(19) 3291-3150</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0" style={{ color: '#0EA5C9' }} aria-hidden="true" />
                  <div>
                    <p className="font-bold">E-mail</p>
                    <p className="text-slate-600">contato@prodb.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TODO: replace with real map embed */}
            <div
              className="rounded-2xl h-64 lg:h-80 flex items-center justify-center text-sm border border-slate-200"
              style={{ background: '#EDF2F9', color: '#8FA5BE' }}
            >
              Mapa — Google Maps embed pendente
            </div>
          </div>
        </div>
      </section>

      <CTABandSection
        heading="Quer conhecer a ProDB por dentro?"
        subheading="Agende uma visita técnica ao nosso datacenter ou uma chamada com nosso time de engenharia."
        primaryLabel="Falar com especialista"
        primaryHref="/contato"
        secondaryLabel="Ver certificações"
        secondaryHref="#certificacoes"
      />
    </MarketingLayout>
  )
}
