import { Phone, Mail, MessageCircle, Ticket } from 'lucide-react'

const channels = [
  { Icon: Phone, label: 'Telefone', detail: '(19) 3291-3150', href: 'tel:+551932913150' },
  { Icon: Mail, label: 'E-mail', detail: 'suporte@prodb.com.br', href: 'mailto:suporte@prodb.com.br' },
  { Icon: MessageCircle, label: 'WhatsApp', detail: 'Resposta rápida', href: '#whatsapp' },
  { Icon: Ticket, label: 'Portal de chamados', detail: 'Histórico e SLA', href: '/contato' },
]

const stats = [
  { value: '<15 min', label: 'Tempo de resposta (incidentes críticos)', note: 'TODO: verificar média real' },
  { value: '24/7', label: 'Cobertura de monitoramento', note: null },
  { value: 'pt-BR', label: 'Idioma de atendimento', note: null },
  { value: '99,99%', label: 'SLA de disponibilidade', note: null },
]

export function SupportSection() {
  return (
    <section
      className="bg-navy-900 py-16 md:py-24 text-white"
      aria-labelledby="support-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Modelo de suporte
            </p>
            <h2
              id="support-heading"
              className="mb-4 text-2xl font-bold text-white md:text-3xl text-balance"
            >
              Quem atende quando algo dá errado
            </h2>
            <p className="mb-8 text-slate-300 leading-relaxed">
              Nosso NOC opera 24 horas por dia, 7 dias por semana. Quando um incidente
              é detectado — por monitoramento proativo ou pelo seu chamado — engenheiros
              certificados agem, em português, sem terceirizações.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(s => (
                <div
                  key={s.value}
                  className="rounded-2xl bg-navy-800 border border-navy-700 p-5"
                >
                  <p className="mono-stat text-2xl font-bold text-cyan-400 mb-1">{s.value}</p>
                  <p className="text-sm text-slate-400">{s.label}</p>
                  {s.note && (
                    <p className="text-xs text-navy-600 mt-1 italic">{/* TODO: {s.note} */}</p>
                  )}
                </div>
              ))}
            </div>

            {/* NOC photo placeholder */}
            {/* TODO: Replace with real NOC/team photo */}
            <div className="rounded-2xl border-2 border-dashed border-navy-600 bg-navy-800/50 p-6 text-center">
              <p className="text-xs font-semibold text-navy-600 mb-1">FOTO DO NOC — PENDENTE</p>
              <p className="text-xs text-slate-500">
                Substituir por foto real da equipe ou NOC após aprovação.
              </p>
            </div>
          </div>

          {/* Right — channels */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Canais de atendimento</h3>
            <div className="space-y-3">
              {channels.map(({ Icon, label, detail, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl bg-navy-800 border border-navy-700 p-5 hover:bg-navy-700 hover:border-navy-600 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{label}</p>
                    <p className="text-sm text-slate-400">{detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
