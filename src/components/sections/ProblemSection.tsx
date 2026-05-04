'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

const pains = [
  {
    ordinal: '01',
    title: 'A fatura de cloud subiu 30% este ano. E ninguém sabe explicar.',
    pain: 'Câmbio do dólar. Taxas de egresso ocultas. Recursos que ninguém lembra de ter contratado. Todo mês, surpresa. Todo trimestre, conversa difícil com o financeiro.',
    fix: 'Conosco, a fatura é igual ao contrato. Em reais. Sem surpresa de câmbio nem cobrança escondida de tráfego de saída. O orçamento de TI volta a ser uma decisão sua.',
    accentColor: '#0EA5C9',
  },
  {
    ordinal: '02',
    title: 'Quando algo dá errado, você fica sozinho com um chatbot.',
    pain: 'Documentação em inglês. Atendimento só por ticket. Resposta automática. Escalação para um time que nunca viu o seu ambiente. E o problema continua de pé.',
    fix: 'Conosco, você fala com engenheiros brasileiros que conhecem a sua infraestrutura. WhatsApp, telefone ou ticket. Em 15 minutos, alguém com nome próprio assume o seu caso.',
    accentColor: '#E88C0A',
  },
  {
    ordinal: '03',
    title: 'Seus dados estão num servidor fora do Brasil. E o auditor já notou.',
    pain: 'LGPD, ISO 27001, PCI-DSS. Cada certificação que falta é uma lacuna no seu contrato com o cliente. E provedor internacional não cobre as suas obrigações regulatórias.',
    fix: 'Conosco, seus dados ficam no Brasil, sob CNPJ brasileiro, em datacenters Tier III com 9 certificações. O auditor recebe o pacote completo, sem "shared responsibility".',
    accentColor: '#0EA5C9',
  },
]

function PainCard({ item, index }: { item: typeof pains[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md overflow-hidden"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
      }}
    >
      {/* Large ordinal background */}
      <span
        className="pointer-events-none absolute -right-3 -top-4 select-none font-black leading-none"
        style={{
          fontSize: '7rem',
          color: item.accentColor,
          opacity: 0.06,
          fontFamily: 'var(--font-display)',
        }}
        aria-hidden="true"
      >
        {item.ordinal}
      </span>

      {/* Ordinal pill */}
      <div
        className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase"
        style={{
          background: `${item.accentColor}15`,
          color: item.accentColor,
        }}
      >
        {item.ordinal}
      </div>

      <h3 className="mb-3 text-lg font-black leading-snug text-slate-900">
        {item.title}
      </h3>
      <p className="mb-6 text-sm text-slate-500 leading-relaxed">{item.pain}</p>

      {/* Fix */}
      <div
        className="rounded-xl p-4 border-l-2"
        style={{
          background: `${item.accentColor}08`,
          borderColor: item.accentColor,
        }}
      >
        <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.fix}</p>
      </div>
    </article>
  )
}

export function ProblemSection() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Padrões que se repetem
          </p>
          <h2
            id="problem-heading"
            className="max-w-2xl text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight"
          >
            Três problemas que fazem empresas trocarem de provedor cloud
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pains.map((item, i) => (
            <PainCard key={item.ordinal} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
