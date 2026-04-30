import { TrendingUp, Clock, Shield } from 'lucide-react'

const pains = [
  {
    Icon: TrendingUp,
    title: 'Fatura cresce todo mês sem explicação',
    pain: 'Recursos não utilizados, egress oculto e câmbio em dólar fazem o custo explodir a cada fechamento.',
    fix: 'Cobrança em reais, preço previsível, revisão trimestral de capacidade incluída.',
    color: 'text-danger-500',
    bg: 'bg-danger-100',
  },
  {
    Icon: Clock,
    title: 'Suporte demora horas — e responde em inglês',
    pain: 'Ticket aberto às 2h da manhã, resposta genérica em inglês às 10h do dia seguinte. Enquanto isso, a operação para.',
    fix: 'Suporte humano 24/7 em português. SLA de resposta <15 min para incidentes críticos.',
    color: 'text-warning-500',
    bg: 'bg-warning-100',
  },
  {
    Icon: Shield,
    title: 'Compliance LGPD virou dor de cabeça',
    pain: 'O auditor pede ISO 27001 e PCI-DSS. O provedor atual não tem. O datacenter fica fora do Brasil.',
    fix: 'ISO 27001, SOC, PCI-DSS, Tier III — todos sob CNPJ brasileiro, dados no Brasil.',
    color: 'text-info-500',
    bg: 'bg-info-100',
  },
]

export function ProblemSection() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-20"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Você reconhece algum destes?
          </p>
          <h2
            id="problem-heading"
            className="text-2xl font-bold text-slate-900 md:text-3xl text-balance"
          >
            Os três maiores problemas de quem gerencia cloud no Brasil
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pains.map(({ Icon, title, pain, fix, color, bg }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${bg}`}>
                <Icon size={22} className={color} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-base font-bold text-slate-900 leading-snug">
                {title}
              </h3>
              <p className="mb-4 text-sm text-slate-600 leading-relaxed">{pain}</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-800">
                  <span className="text-cyan-500 font-semibold mr-1">→</span>
                  {fix}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
