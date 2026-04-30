import {
  Shield, Users, Activity, Zap, HeartHandshake
} from 'lucide-react'
import { pillars } from '@/content/pillars'

const iconMap: Record<string, React.ElementType> = {
  Shield, Users, Activity, Zap, HeartHandshake,
}

export function PillarsSection() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-24"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Por que escolher a ProDB
          </p>
          <h2
            id="pillars-heading"
            className="text-2xl font-bold text-slate-900 md:text-3xl text-balance"
          >
            O modelo operacional que diferencia quem faz de quem promete
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map(pillar => {
            const Icon = iconMap[pillar.icon] ?? Shield
            return (
              <article
                key={pillar.id}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500 group-hover:bg-cyan-100 transition-colors">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-bold text-slate-900 leading-snug">
                    {pillar.headline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.proof}</p>
                </div>

                {pillar.metric && (
                  <div className="mt-auto pt-3 border-t border-slate-100">
                    <p className="mono-stat text-lg font-bold text-cyan-500">{pillar.metric}</p>
                    <p className="text-xs text-slate-500">{pillar.metricLabel}</p>
                  </div>
                )}
                {!pillar.metric && (
                  /* TODO: add real metric for this pillar */
                  <div className="mt-auto pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-400 italic">{/* TODO: métrica verificada */}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
