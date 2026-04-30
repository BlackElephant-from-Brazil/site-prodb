import { LinkButton } from '@/components/ui/Button'

interface CTABandProps {
  heading?: string
  subheading?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABandSection({
  heading = 'Pronto para migrar para uma cloud que responde?',
  subheading = 'Fale com um especialista hoje. Respondemos em até 2h úteis, em português.',
  primaryLabel = 'Falar com especialista',
  primaryHref = '/contato',
  secondaryLabel = 'Começar teste grátis de 15 dias',
  secondaryHref = '/backup',
}: CTABandProps) {
  return (
    <section
      className="bg-navy-950 py-16 md:py-20"
      aria-labelledby="cta-band-heading"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8 text-center">
        <h2
          id="cta-band-heading"
          className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl text-balance max-w-2xl mx-auto"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="mb-8 text-slate-300 max-w-xl mx-auto">
            {subheading}
          </p>
        )}

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <LinkButton href={primaryHref} size="lg" variant="primary">
            {primaryLabel}
          </LinkButton>
          <LinkButton href={secondaryHref} size="lg" variant="dark-secondary">
            {secondaryLabel}
          </LinkButton>
        </div>

        {/* Trust strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span>ISO 27001 · Tier III · LGPD-ready · Suporte 24/7</span>
        </div>
      </div>
    </section>
  )
}
