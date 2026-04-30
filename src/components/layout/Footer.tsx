import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { certifications } from '@/content/certifications'

const solutions = [
  { label: 'Servidores Cloud', href: '/servidores-cloud' },
  { label: 'Backup Gerenciado', href: '/backup' },
  { label: 'Programa de Parceiros', href: '/seja-um-parceiro' },
]

const company = [
  { label: 'Sobre a ProDB', href: '/empresa' },
  { label: 'Certificações', href: '/empresa#certificacoes' },
  { label: 'Blog', href: '/blog' },
]

const legal = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Política de Cookies', href: '/politica-de-cookies' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>

      <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Soluções */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Soluções
            </h3>
            <ul className="space-y-2.5">
              {solutions.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {company.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+551932913150"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} aria-hidden="true" />
                  (19) 3291-3150
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@prodb.com.br"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} aria-hidden="true" />
                  contato@prodb.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@prodb.com.br"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={14} aria-hidden="true" />
                  comercial@prodb.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  R. José Rodrigues de Carvalho, 116<br />
                  Jd. Nilópolis, Campinas/SP<br />
                  CEP 13088-833
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Socials */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Redes sociais
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/company/prodbtecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors"
                  aria-label="ProDB no LinkedIn"
                >
                  LinkedIn
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href="https://instagram.com/prodbtecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors"
                  aria-label="ProDB no Instagram"
                >
                  Instagram
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href="https://facebook.com/prodbtecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors"
                  aria-label="ProDB no Facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cert badge strip */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <p className="mb-4 text-xs uppercase tracking-wider text-slate-500">
            Certificações internacionais
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map(cert => (
              <Link
                key={cert.id}
                href="/empresa#certificacoes"
                className="inline-flex items-center rounded-lg border border-navy-600 bg-navy-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-navy-500 hover:text-white transition-colors"
                title={cert.short}
              >
                {cert.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-8 pt-8 border-t border-navy-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ProDB Tecnologia. Todos os direitos reservados.</p>
          <p>CNPJ 37.683.941/0001-87</p>
        </div>
      </div>
    </footer>
  )
}
