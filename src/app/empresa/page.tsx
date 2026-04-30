// Conversion goal: "Falar com especialista" / trust-building page
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CTABandSection } from '@/components/sections/CTABandSection'
import { LinkButton } from '@/components/ui/Button'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre a ProDB | Tecnologia Cloud Brasileira desde 2009',
  description:
    'ProDB Tecnologia: 15+ anos entregando cloud e backup gerenciado para empresas brasileiras. ISO 27001, Tier III, equipe técnica em Campinas/SP.',
}

const timeline = [
  {
    year: '2009',
    title: 'Fundação em Campinas',
    description:
      'A ProDB nasce com foco em hosting e backup para pequenas e médias empresas do interior de São Paulo.',
  },
  {
    year: '2013',
    title: 'Primeiro datacenter próprio',
    description:
      'Inauguração do ponto de presença próprio em Campinas, com infraestrutura dedicada e suporte local.',
  },
  {
    year: '2017',
    title: 'Expansão para cloud privada',
    description:
      'Lançamento da plataforma de servidores cloud privados, com foco em conformidade e suporte em português.',
  },
  {
    year: '2020',
    title: 'Certificação ISO 27001',
    description:
      'ProDB obtém certificação ISO/IEC 27001 — gestão de segurança da informação auditada externamente.',
  },
  {
    year: '2023',
    title: 'Expansão nacional',
    description:
      'Parceria com datacenters Tier III em São Paulo (capital) e Rio de Janeiro, com opção de DR automático.',
  },
  {
    year: '2025',
    title: 'Plataforma de backup nativa',
    description:
      'Lançamento do OBM (Online Backup Manager) próprio, com RPO/RTO definidos em contrato e painel unificado.',
  },
]

const values = [
  {
    title: 'Clareza acima de marketing',
    description:
      'Publicamos SLAs reais no contrato, não em rodapé. Se algo falhar, você recebe crédito automaticamente.',
  },
  {
    title: 'Suporte que conhece seu nome',
    description:
      'Cada cliente tem um engenheiro de conta. Não tem fila de suporte tier 1 genérico antes de chegar em quem resolve.',
  },
  {
    title: 'Dados que ficam no Brasil',
    description:
      'Nenhum dado nosso fica em servidor fora do Brasil sem seu consentimento explícito. Isso importa para LGPD e para latência.',
  },
  {
    title: 'Crescimento sustentável',
    description:
      'Não vendemos capacidade que não temos. Nossa infraestrutura é dimensionada antes de cada nova contratação.',
  },
]

// TODO: replace with real team members when available
const team = [
  { name: 'TODO: CEO', role: 'CEO & Fundador', bio: 'TODO: bio em até 2 linhas.' },
  { name: 'TODO: CTO', role: 'CTO', bio: 'TODO: bio em até 2 linhas.' },
  { name: 'TODO: Head de Operações', role: 'Head de Operações', bio: 'TODO: bio em até 2 linhas.' },
]

export default function EmpresaPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 20% 70%, #F59E0B 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Nossa história
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
              15 anos entregando cloud{' '}
              <span className="text-amber-400">para empresas brasileiras</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 leading-relaxed max-w-2xl">
              A ProDB nasceu em Campinas em 2009 com uma convicção: empresas brasileiras merecem
              infraestrutura de nível enterprise com suporte em português e dados que nunca saem do Brasil.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <p className="mono-stat text-2xl font-black text-white">15+</p>
                <p className="text-slate-400 text-xs mt-0.5">anos de operação</p>
              </div>
              <div>
                <p className="mono-stat text-2xl font-black text-white">500+</p>
                <p className="text-slate-400 text-xs mt-0.5">clientes ativos</p>
              </div>
              <div>
                <p className="mono-stat text-2xl font-black text-white">99,99%</p>
                <p className="text-slate-400 text-xs mt-0.5">uptime histórico</p>
              </div>
              <div>
                <p className="mono-stat text-2xl font-black text-white">24/7</p>
                <p className="text-slate-400 text-xs mt-0.5">suporte humano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
                Missão
              </p>
              <h2 id="mission-heading" className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl text-balance">
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
                conhecimento em inglês para responder sobre seu ambiente.
              </p>
            </div>
            <div className="space-y-5">
              {values.map(v => (
                <div key={v.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="mb-1.5 text-sm font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="timeline-heading" className="mb-10 text-2xl font-bold text-slate-900 md:text-3xl">
            Nossa trajetória
          </h2>
          <div className="relative">
            <div aria-hidden="true" className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-200 md:left-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year bubble */}
                  <div className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-navy-900 text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                    <span className="mono-stat text-xs font-black text-cyan-400 text-center leading-tight">
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 md:w-[calc(50%-48px)] md:px-8 ${i % 2 === 0 ? 'md:text-right md:ml-0 md:mr-auto md:pr-16' : 'md:text-left md:ml-auto md:mr-0 md:pl-16'}`}>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <h3 className="mb-1 text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <h2 id="team-heading" className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Quem está por trás
          </h2>
          <p className="mb-10 text-slate-600 max-w-xl">
            Uma equipe técnica com pele no jogo — os mesmos engenheiros que projetam
            também são os que atendem seu incidente às 2h da manhã.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map(member => (
              <div key={member.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                {/* TODO: replace with real photo */}
                <div className="mb-4 h-16 w-16 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-2xl text-navy-400" aria-hidden="true">👤</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-semibold text-cyan-600 mb-2">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsSection />

      {/* Location */}
      <section className="bg-slate-50 py-16 md:py-20" aria-labelledby="location-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="location-heading" className="mb-4 text-2xl font-bold text-slate-900">
                Onde estamos
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-cyan-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Sede</p>
                    <p className="text-slate-600">TODO: Endereço completo, Campinas/SP — CEP TODO</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-cyan-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-slate-600">TODO: (19) XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-cyan-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-slate-600">TODO: contato@prodb.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TODO: replace with real map embed */}
            <div className="rounded-2xl bg-slate-200 h-64 lg:h-80 flex items-center justify-center text-slate-500 text-sm">
              TODO: Mapa embed (Google Maps ou OpenStreetMap)
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
