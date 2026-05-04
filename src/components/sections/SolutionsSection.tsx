import Link from 'next/link'
import { Server, HardDrive, Check, ArrowRight } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'

const solutions = [
  {
    Icon: Server,
    name: 'Servidores Cloud',
    tagline: 'Infraestrutura com SLA contratual de 99,982%',
    features: [
      'Configure vCPU, RAM e SSD NVMe em minutos',
      'Migração assistida sem downtime planejado',
      'NOC ativo 24h, sem custo adicional',
      'Em produção em 4 a 8 horas após o contrato',
    ],
    cta: 'Configurar meu servidor',
    href: '/servidores-cloud',
    accentBg: 'bg-gradient-to-br from-navy-900 to-navy-800',
    accentText: 'text-cyan-400',
  },
  {
    Icon: HardDrive,
    name: 'Backup Gerenciado',
    tagline: 'Backup com restauração testada, RPO e RTO no contrato',
    features: [
      'Plano Essencial a partir de R$ 99/mês',
      'Backup diário automático, sem intervenção',
      'Plano Avançado: 15 dias grátis sem cartão',
      'Restauração granular: arquivo, pasta ou sistema',
    ],
    cta: 'Começar teste grátis de 15 dias',
    href: '/backup',
    accentBg: 'bg-gradient-to-br from-slate-800 to-slate-900',
    accentText: 'text-amber-400',
  },
]

export function SolutionsSection() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            O que entregamos
          </p>
          <h2
            id="solutions-heading"
            className="text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight"
          >
            Servidores cloud e backup gerenciados pela mesma equipe técnica
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Mesmo SLA, mesmo time, mesma documentação. Tanto faz se o problema é no
            servidor ou no backup, você fala com quem já conhece o seu ambiente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map(({ Icon, name, tagline, features, cta, href, accentBg, accentText }) => (
            <article
              key={name}
              className={`relative overflow-hidden rounded-3xl text-white ${accentBg} p-8 md:p-10`}
            >
              {/* Background grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative">
                <div className={`mb-5 inline-flex rounded-xl bg-white/10 p-3`}>
                  <Icon size={24} className={accentText} aria-hidden="true" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
                <p className="mb-6 text-sm text-slate-300 leading-relaxed">{tagline}</p>

                <ul className="mb-8 space-y-3">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check size={16} className={`mt-0.5 shrink-0 ${accentText}`} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href={href}
                  size="md"
                  className="gap-2 bg-white text-slate-900 border-transparent hover:bg-slate-100 shadow-sm"
                >
                  {cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
