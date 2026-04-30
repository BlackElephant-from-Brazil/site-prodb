'use server'

import { z } from 'zod'
import { redirect } from 'next/navigation'

/* ─── Shared schemas ──────────────────────────────────────────────────────── */

const ContactSchema = z.object({
  nome:    z.string().min(2, 'Nome muito curto'),
  empresa: z.string().min(1, 'Informe a empresa'),
  cargo:   z.string().optional(),
  telefone:z.string().min(8, 'Telefone inválido'),
  email:   z.string().email('E-mail inválido'),
  assunto: z.string().min(1, 'Selecione um assunto'),
  mensagem:z.string().min(10, 'Mensagem muito curta'),
  lgpd:    z.literal('on', { message: 'Aceite a política de privacidade' }),
})

const TrialSchema = z.object({
  nome:    z.string().min(2, 'Nome muito curto'),
  email:   z.string().email('E-mail inválido'),
  telefone:z.string().min(8, 'Telefone inválido'),
  plano:   z.string().optional(),
  lgpd:    z.literal('on', { message: 'Aceite a política de privacidade' }),
})

const PartnerSchema = z.object({
  nome:      z.string().min(2, 'Nome muito curto'),
  empresa:   z.string().min(1, 'Informe a empresa'),
  segmento:  z.string().min(1, 'Informe o segmento'),
  telefone:  z.string().min(8, 'Telefone inválido'),
  email:     z.string().email('E-mail inválido'),
  faturamento: z.string().optional(),
  mensagem:  z.string().min(10, 'Mensagem muito curta'),
  lgpd:      z.literal('on', { message: 'Aceite a política de privacidade' }),
})

export type FormState = {
  success?: boolean
  errors?: Record<string, string[]>
  message?: string
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

async function sendToBackend(_data: Record<string, unknown>) {
  // TODO: wire to real CRM/email backend (HubSpot, RD Station, SMTP)
  // For now: log in dev, no-op in production (confirmation page still shown)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Form submission]', _data)
  }
  // Simulate network delay in dev
  if (process.env.NODE_ENV === 'development') {
    await new Promise(r => setTimeout(r, 500))
  }
}

/* ─── Actions ─────────────────────────────────────────────────────────────── */

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData)
  const parsed = ContactSchema.safeParse(raw)
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }
  await sendToBackend(parsed.data)
  redirect('/obrigado?origem=contato')
}

export async function submitTrial(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData)
  const parsed = TrialSchema.safeParse(raw)
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }
  await sendToBackend(parsed.data)
  redirect('/obrigado?origem=trial')
}

export async function submitPartner(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData)
  const parsed = PartnerSchema.safeParse(raw)
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }
  await sendToBackend(parsed.data)
  redirect('/obrigado?origem=parceiro')
}
