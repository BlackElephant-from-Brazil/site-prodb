// Conversion goal: "Enviar mensagem" (ContactForm submit)
import type { Metadata } from 'next'
import MarketingLayout from '../layout-marketing'
import { ContactForm } from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | ProDB Tecnologia',
  description:
    'Fale com a equipe ProDB: suporte técnico, vendas, parcerias. Respondemos em até 2h úteis em português.',
}

const channels = [
  {
    icon: Phone,
    title: 'Telefone',
    value: 'TODO: (19) XXXX-XXXX',
    detail: 'Seg–Sex 8h–18h',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'TODO: (19) 9XXXX-XXXX',
    detail: 'Seg–Sex 8h–22h',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'TODO: contato@prodb.com.br',
    detail: 'Respondemos em até 2h úteis',
  },
  {
    icon: Clock,
    title: 'Suporte de emergência',
    value: '24/7 para clientes ativos',
    detail: 'Via portal do cliente ou telefone dedicado',
  },
]

export default function ContatoPage() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 60% 80%, #22D3EE 0%, transparent 50%)' }}
        />
        <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Fale conosco
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl text-balance">
              Estamos aqui para ajudar
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Nossa equipe técnica responde em até 2 horas úteis em português —
              sem robô, sem script, sem fila genérica.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_520px] lg:items-start">
            {/* Left: channels + location */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-900">Canais de atendimento</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {channels.map(ch => {
                    const Icon = ch.icon
                    return (
                      <div key={ch.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
                          <Icon size={18} className="text-cyan-600" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          {ch.title}
                        </p>
                        <p className="text-sm font-semibold text-slate-900">{ch.value}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{ch.detail}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">Localização</h2>
                <div className="flex items-start gap-3 text-sm text-slate-600 mb-4">
                  <MapPin size={18} className="text-cyan-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <p>TODO: Endereço completo, Campinas/SP — CEP TODO</p>
                </div>
                {/* TODO: real map embed */}
                <div className="rounded-xl bg-slate-100 h-48 flex items-center justify-center text-slate-400 text-sm border border-slate-200">
                  TODO: Mapa embed (Google Maps ou OpenStreetMap)
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                  Clientes com contrato ativo
                </p>
                <p className="text-sm text-amber-800">
                  Para suporte técnico urgente, utilize o <strong>Portal do Cliente</strong> ou o
                  telefone de emergência informado no seu contrato. Tempo de resposta garantido em SLA.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="mb-1 text-xl font-bold text-slate-900">Envie sua mensagem</h2>
              <p className="mb-6 text-sm text-slate-500">Respondemos em até 2h úteis.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
