import { Phone, Mail, MessageCircle, Ticket } from 'lucide-react'

const channels = [
  { Icon: Phone, label: 'Telefone', detail: '(19) 3291-3150', href: 'tel:+551932913150' },
  { Icon: Mail, label: 'E-mail', detail: 'suporte@prodb.com.br', href: 'mailto:suporte@prodb.com.br' },
  { Icon: MessageCircle, label: 'WhatsApp', detail: 'Resposta rápida', href: '#whatsapp' },
  { Icon: Ticket, label: 'Portal de chamados', detail: 'Histórico e SLA visível', href: '/contato' },
]

const stats = [
  { value: '15 min', label: 'Primeira ação em incidente crítico' },
  { value: '24/7', label: 'NOC ativo e monitoramento' },
  { value: '0', label: 'Tickets transferidos entre tiers' },
  { value: '99,982%', label: 'Uptime histórico' },
]

export function SupportSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: '#F4F7FB' }}
      aria-labelledby="support-heading"
    >
      {/* Amber glow — the warm moment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, #E88C0A 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#E88C0A' }}
            >
              Modelo de suporte
            </p>
            <h2
              id="support-heading"
              className="mb-4 text-3xl font-black text-slate-900 md:text-4xl text-balance leading-tight"
            >
              Suporte com nome, telefone e{' '}
              <span style={{ color: '#E88C0A' }}>poder de decisão.</span>
            </h2>
            <p className="mb-8 text-slate-600 leading-relaxed">
              Nosso NOC opera 24h. Quando um incidente é detectado, por monitoramento
              proativo ou pelo seu chamado, um engenheiro com poder de resolver assume
              o caso até o fim. Sem fila, sem transferência entre tiers, sem repetir
              o problema pra três pessoas diferentes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(s => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p
                    className="text-2xl font-black mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: '#0B1426' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Amber highlight box */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: 'rgba(232,140,10,0.06)',
                borderColor: 'rgba(232,140,10,0.2)',
              }}
            >
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                &ldquo;Cada cliente tem um engenheiro de referência. A pessoa que resolveu
                o seu primeiro incidente é a mesma que vai responder ao próximo.&rdquo;
              </p>
              <p className="mt-2 text-xs" style={{ color: '#E88C0A' }}>
                Modelo ProDB de atendimento
              </p>
            </div>
          </div>

          {/* Right — channels */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900 uppercase tracking-wide text-xs">
              Canais de atendimento
            </h3>
            <div className="space-y-3">
              {channels.map(({ Icon, label, detail, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-colors group-hover:bg-amber-50"
                    style={{ background: 'rgba(232,140,10,0.1)', color: '#E88C0A' }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{label}</p>
                    <p className="text-sm text-slate-500">{detail}</p>
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
