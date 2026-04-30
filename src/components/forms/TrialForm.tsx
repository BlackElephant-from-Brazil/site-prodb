'use client'

import { useActionState, useEffect } from 'react'
import { submitTrial, type FormState } from '@/lib/actions'
import { InputField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import Link from 'next/link'

interface TrialFormProps {
  planName?: string
  onSuccess?: () => void
}

const initialState: FormState = {}

export function TrialForm({ planName, onSuccess }: TrialFormProps) {
  const [state, formAction, pending] = useActionState(submitTrial, initialState)

  useEffect(() => {
    if (state?.success) {
      trackEvent('form_submit', { form_name: 'trial', plan: planName })
      onSuccess?.()
    }
    if (state?.errors) {
      trackEvent('form_error', { form_name: 'trial' })
    }
  }, [state, planName, onSuccess])

  return (
    <form
      action={formAction}
      className="space-y-4"
      onFocus={() => trackEvent('form_start', { form_name: 'trial' })}
      noValidate
    >
      {planName && (
        <input type="hidden" name="plano" value={planName} />
      )}

      <InputField
        label="Nome"
        name="nome"
        type="text"
        autoComplete="name"
        required
        placeholder="Seu nome completo"
        error={state?.errors?.nome}
      />
      <InputField
        label="E-mail corporativo"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="voce@empresa.com.br"
        error={state?.errors?.email}
      />
      <InputField
        label="Telefone"
        name="telefone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        placeholder="(11) 99999-9999"
        error={state?.errors?.telefone}
      />

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="lgpd-trial"
          name="lgpd"
          value="on"
          required
          className="mt-0.5 h-5 w-5 min-w-[1.25rem] rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
        />
        <label htmlFor="lgpd-trial" className="text-sm text-slate-600">
          Li e aceito a{' '}
          <Link href="/politica-de-privacidade" className="text-cyan-600 underline hover:text-cyan-500" target="_blank">
            Política de Privacidade
          </Link>
          {' '}e o tratamento dos meus dados.
        </label>
      </div>
      {state?.errors?.lgpd && (
        <p role="alert" className="text-xs text-danger-500">{state.errors.lgpd[0]}</p>
      )}

      {state?.message && (
        <p role="alert" className="text-sm text-danger-500">{state.message}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        loading={pending}
        disabled={pending}
      >
        {planName?.toLowerCase().includes('avançado')
          ? 'Começar teste grátis de 15 dias'
          : `Quero o plano ${planName ?? 'selecionado'}`}
      </Button>

      {/* Trust microcopy */}
      <p className="text-center text-xs text-slate-500">
        Seus dados são protegidos pela LGPD · Respondemos em até 2h úteis
      </p>
    </form>
  )
}
