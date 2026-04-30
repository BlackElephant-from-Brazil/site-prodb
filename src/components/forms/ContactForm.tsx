'use client'

import { useActionState, useEffect } from 'react'
import { submitContact, type FormState } from '@/lib/actions'
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import Link from 'next/link'

const subjectOptions = [
  { value: 'Servidores Cloud', label: 'Servidores Cloud' },
  { value: 'Backup', label: 'Backup Gerenciado' },
  { value: 'Suporte', label: 'Suporte técnico' },
  { value: 'Parceiro', label: 'Programa de parceiros' },
  { value: 'Outro', label: 'Outro' },
]

interface ContactFormProps {
  prefilledSubject?: string
  onSuccess?: () => void
  compact?: boolean
}

const initialState: FormState = {}

export function ContactForm({ prefilledSubject, onSuccess, compact }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  useEffect(() => {
    if (state?.success) {
      trackEvent('form_submit', { form_name: 'contact' })
      onSuccess?.()
    }
    if (state?.errors) {
      trackEvent('form_error', { form_name: 'contact' })
    }
  }, [state, onSuccess])

  return (
    <form
      action={formAction}
      className="space-y-4"
      onFocus={() => trackEvent('form_start', { form_name: 'contact' })}
      noValidate
    >
      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
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

      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <InputField
          label="Cargo"
          name="cargo"
          type="text"
          autoComplete="organization-title"
          placeholder="CTO, Gerente de TI…"
          error={state?.errors?.cargo}
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
      </div>

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

      <SelectField
        label="Assunto"
        name="assunto"
        required
        placeholder="Selecione um assunto"
        options={subjectOptions}
        error={state?.errors?.assunto}
        defaultValue={prefilledSubject ?? ''}
      />

      <TextareaField
        label="Mensagem"
        name="mensagem"
        required
        placeholder="Descreva o que você precisa…"
        error={state?.errors?.mensagem}
      />

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="lgpd-contact"
          name="lgpd"
          value="on"
          required
          className="mt-0.5 h-5 w-5 min-w-[1.25rem] rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
        />
        <label htmlFor="lgpd-contact" className="text-sm text-slate-600">
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
        Enviar mensagem
      </Button>

      <p className="text-center text-xs text-slate-500">
        Seus dados são protegidos pela LGPD · Respondemos em até 2h úteis
      </p>
    </form>
  )
}
