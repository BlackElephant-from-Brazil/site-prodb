'use client'

import { useState } from 'react'
import { certifications, type Cert } from '@/content/certifications'
import { Modal } from '@/components/ui/Modal'
import { cn } from '@/lib/cn'

const groups = ['Segurança', 'Operações', 'Governança'] as const

const groupColors: Record<string, { bg: string; text: string; border: string }> = {
  Segurança:   { bg: 'bg-cyan-50',   text: 'text-cyan-700',  border: 'border-cyan-200' },
  Operações:   { bg: 'bg-blue-50',   text: 'text-blue-700',  border: 'border-blue-200' },
  Governança:  { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
}

function CertCard({ cert, onClick }: { cert: Cert; onClick: () => void }) {
  const colors = groupColors[cert.group]
  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all hover:shadow-md',
        colors.bg, colors.border,
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
      )}
      aria-label={`Ver detalhes sobre ${cert.name}: ${cert.short}`}
    >
      <div className={cn('mono-stat text-xl font-bold', colors.text)}>{cert.name}</div>
      <p className="text-xs text-slate-600 leading-snug">{cert.short}</p>
      <span className="mt-auto text-xs text-cyan-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Saiba mais →
      </span>
    </button>
  )
}

export function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null)

  return (
    <section
      id="certificacoes"
      className="bg-white py-16 md:py-24"
      aria-labelledby="certs-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Auditoria e conformidade
          </p>
          <h2
            id="certs-heading"
            className="text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight"
          >
            Certificações que o seu compliance vai exigir
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Nove certificações auditadas por organismos independentes. Cada selo abaixo
            abre uma explicação em linguagem simples do que ele cobre e por que importa
            para a sua operação.
          </p>
        </div>

        {groups.map(group => {
          const certs = certifications.filter(c => c.group === group)
          return (
            <div key={group} className="mb-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                {group}
              </h3>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {certs.map(cert => (
                  <CertCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => setActiveCert(cert)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Cert explainer modal */}
      <Modal
        open={!!activeCert}
        onClose={() => setActiveCert(null)}
        title={activeCert?.name}
        description={activeCert?.short}
      >
        {activeCert && (
          <div className="space-y-4">
            <div>
              <h4 className="mb-1 text-sm font-semibold text-slate-800">O que é</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{activeCert.description}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold text-slate-800">Por que importa para você</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{activeCert.relevance}</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <div className="text-2xl font-black text-cyan-500 mono-stat">{activeCert.name}</div>
              <div>
                <p className="text-xs font-semibold text-slate-800">{activeCert.group}</p>
                <p className="text-xs text-slate-500">Auditoria independente</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
