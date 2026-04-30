'use client'

import { useState } from 'react'
import { Check, Star, X } from 'lucide-react'
import { backupPlans } from '@/content/backup-plans'
import { Button, LinkButton } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'
import { trackEvent } from '@/lib/analytics'
import { TrialForm } from '@/components/forms/TrialForm'
import { ContactForm } from '@/components/forms/ContactForm'

export function BackupPricingSection() {
  const [activePlan, setActivePlan] = useState<string | null>(null)

  const openModal = (planId: string, planName: string) => {
    setActivePlan(planId)
    trackEvent('pricing_plan_select', { plan: planName })
  }

  const closeModal = () => setActivePlan(null)

  return (
    <section
      id="planos-backup"
      className="bg-white py-16 md:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Backup gerenciado
          </p>
          <h2
            id="pricing-heading"
            className="text-2xl font-bold text-slate-900 md:text-3xl text-balance"
          >
            Proteção de dados a partir de R$ 99/mês
          </h2>
          <p className="mt-3 text-slate-600">
            Planos com cobrança previsível em reais. Sem taxa de setup.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {backupPlans.map(plan => (
            <article
              key={plan.id}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8 transition-shadow',
                plan.highlighted
                  ? 'border-cyan-400 bg-white shadow-xl ring-1 ring-cyan-400/30'
                  : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
              )}
            >
              {/* Ribbon */}
              {plan.ribbon && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent-cyan" className="shadow-sm font-semibold px-3 py-1">
                    <Star size={10} className="fill-cyan-600 text-cyan-600" aria-hidden="true" />
                    {plan.ribbon}
                  </Badge>
                </div>
              )}

              {/* Top border accent */}
              {plan.highlighted && (
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-8 right-8 h-0.5 bg-cyan-400 rounded-full"
                />
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                {plan.price !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-slate-500">R$</span>
                    <span className="mono-stat text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-500">{plan.unit}</span>
                  </div>
                ) : (
                  <p className="text-2xl font-bold text-slate-900">Consultar</p>
                )}
                {plan.trialDays && (
                  <p className="mt-1.5 text-xs font-medium text-success-500">
                    ✓ {plan.trialDays} dias grátis · sem cartão de crédito
                  </p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check
                      size={15}
                      className={cn(
                        'mt-0.5 shrink-0',
                        plan.highlighted ? 'text-cyan-500' : 'text-success-500'
                      )}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                size="md"
                className="w-full"
                onClick={() => openModal(plan.id, plan.name)}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        {/* Trust strip under pricing */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span>✓ ISO 27001</span>
          <span>✓ Dados armazenados no Brasil</span>
          <span>✓ LGPD-compliant</span>
          <span>✓ Respondemos em até 2h úteis</span>
        </div>
      </div>

      {/* Modals */}
      {backupPlans.map(plan => (
        <Modal
          key={plan.id}
          open={activePlan === plan.id}
          onClose={closeModal}
          title={plan.id === 'sobMedida'
            ? 'Solicitar proposta — Sob Medida'
            : `Começar com o plano ${plan.name}`}
          description={
            plan.trialDays
              ? `${plan.trialDays} dias grátis, sem cartão de crédito. Nossa equipe entra em contato em até 2h úteis.`
              : 'Nossa equipe entra em contato em até 2h úteis.'
          }
        >
          {plan.id === 'sobMedida' ? (
            <ContactForm prefilledSubject={`Backup Sob Medida`} onSuccess={closeModal} />
          ) : (
            <TrialForm planName={plan.name} onSuccess={closeModal} />
          )}
        </Modal>
      ))}
    </section>
  )
}
