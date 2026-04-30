'use client'

import { useActionState, useEffect } from 'react'
import { submitPartner, type FormState } from '@/lib/actions'
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import Link from 'next/link'

const segmentoOptions = [
  { value: 'Software/SaaS', label: 'Software / SaaS' },
  { value: 'Consultoria TI', label: 'Consultoria de TI' },
  { value: 'Revenda', label: 'Revenda de tecnologia' },
  { value: 'Integrador', label: 'Integrador de sistemas' },
  { value: 'MSP', label: 'Prestação de serviços gerenciados (MSP)' },
  { value: 'Outro', label: 'Outro' },
]

const faturamentoOptions = [
  { value: 'ate-500k', label: 'Até R$ 500 mil/ano' },
  { value: '500k-2m', label: 'R$ 500 mil – R$ 2 milhões/ano' },
  { value: '2m-10m', label: 'R$ 2 – R$ 10 milhões/ano' },
  { value: 'acima-10m', label: 'Acima de R$ 10 milhões/ano' },
]

const initialState: FormState = {}

export function PartnerForm() {
  const [state, formAction, pending] = useActionState(submitPartner, initialState)

  useEffect(() => {
    if (state?.success) {
      trackEvent('form_submit', { form_name: 'partner' })
    }
    if (state?.errors) {
      trackEvent('form_error', { form_name: 'partner' })
    }
  }, [state])

  return (
    <form
      action={formAction}
      className="space-y-5"
      onFocus={() => trackEvent('form_start', { form_name: 'partner' })}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="Nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          placeholder="Seu nome"
          error={state?.errors?.nome}
        />
        <InputField
          label="Empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          required
          placeholder="Nome da empresa"
          error={state?.errors?.empresa}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
        <InputField
          label="E-mail"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="voce@empresa.com.br"
          error={state?.errors?.email}
        />
      </div>

      <SelectField
        label="Segmento de atuação"
        name="segmento"
        required
        placeholder="Selecione o segmento"
        options={segmentoOptions}
        error={state?.errors?.segmento}
      />

      <SelectField
        label="Faturamento anual estimado"
        name="faturamento"
        placeholder="Selecione uma faixa"
        options={faturamentoOptions}
        error={state?.errors?.faturamento}
      />

      <TextareaField
        label="Mensagem"
        name="mensagem"
        required
        placeholder="Conte um pouco sobre sua empresa, clientes e o que você busca na parceria…"
        error={state?.errors?.mensagem}
      />

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="lgpd-partner"
          name="lgpd"
          value="on"
          required
          className="mt-0.5 h-5 w-5 min-w-[1.25rem] rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
        />
        <label htmlFor="lgpd-partner" className="text-sm text-slate-600">
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

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        loading={pending}
        disabled={pending}
      >
        Quero ser parceiro ProDB
      </Button>

      <p className="text-center text-xs text-slate-500">
        Seus dados são protegidos pela LGPD · Respondemos em até 2h úteis
      </p>
    </form>
  )
}
