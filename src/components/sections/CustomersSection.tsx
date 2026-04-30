import { customers, featuredTestimonial } from '@/content/customers'

export function CustomersSection() {
  return (
    <section
      className="bg-slate-50 py-16 md:py-24"
      aria-labelledby="customers-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Clientes e parceiros
          </p>
          <h2
            id="customers-heading"
            className="text-2xl font-bold text-slate-900 md:text-3xl"
          >
            Empresas que confiam na ProDB
          </h2>
        </div>

        {/* Logo wall */}
        <div
          className="flex flex-wrap items-center gap-x-10 gap-y-6 mb-12"
          aria-label="Logotipos de clientes"
        >
          {customers.map(c => (
            <div
              key={c.id}
              className="flex h-10 items-center opacity-60 grayscale hover:opacity-90 hover:grayscale-0 transition-all"
            >
              {/* TODO: Replace text with <Image src={c.logo} alt={c.name} width={120} height={40} /> once real logos are provided */}
              <span className="text-sm font-bold text-slate-600 tracking-tight">{c.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {featuredTestimonial ? (
          <blockquote
            className="relative rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10"
            aria-label={`Depoimento de ${featuredTestimonial.author}, ${featuredTestimonial.role} na ${featuredTestimonial.company}`}
          >
            <div
              aria-hidden="true"
              className="mb-5 text-5xl font-black leading-none text-amber-300 select-none"
            >
              "
            </div>
            <p className="mb-6 text-lg leading-relaxed text-slate-800 font-medium text-pretty">
              {featuredTestimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              {/* TODO: Replace with real photo <Image src={...} alt="" width={48} height={48} className="rounded-full" /> */}
              <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-lg shrink-0">
                {featuredTestimonial.author[0]}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{featuredTestimonial.author}</p>
                <p className="text-sm text-slate-600">
                  {featuredTestimonial.role}, {featuredTestimonial.company}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="mono-stat text-2xl font-bold text-amber-600">
                  {featuredTestimonial.metric}
                </p>
                <p className="text-xs text-slate-600">{featuredTestimonial.metricLabel}</p>
              </div>
            </div>
          </blockquote>
        ) : (
          // TODO: Replace with real customer testimonial once approved by client
          <div
            className="rounded-2xl border-2 border-dashed border-amber-200 bg-amber-50/50 p-8 text-center"
            aria-label="Espaço reservado para depoimento de cliente"
          >
            <p className="text-sm font-semibold text-amber-700 mb-1">
              DEPOIMENTO DE CLIENTE — PENDENTE
            </p>
            <p className="text-sm text-slate-500">
              Espaço reservado para depoimento real com resultado quantificado.
              Entre em contato com o cliente para obter aprovação.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
