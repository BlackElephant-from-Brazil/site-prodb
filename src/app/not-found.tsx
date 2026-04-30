import type { Metadata } from 'next'
import Link from 'next/link'
import MarketingLayout from './layout-marketing'
import { LinkButton } from '@/components/ui/Button'
import { ArrowLeft, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 — Página não encontrada | ProDB Tecnologia',
  robots: { index: false, follow: false },
}

const suggestions = [
  { label: 'Backup Gerenciado', href: '/backup' },
  { label: 'Servidores Cloud', href: '/servidores-cloud' },
  { label: 'Falar com especialista', href: '/contato' },
  { label: 'Blog', href: '/blog' },
]

export default function NotFound() {
  return (
    <MarketingLayout>
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-24 px-4 text-center">
        <div
          aria-hidden="true"
          className="mono-stat text-[120px] md:text-[180px] font-black leading-none text-slate-100 select-none mb-4"
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3 -mt-4 md:text-3xl">
          Página não encontrada
        </h1>
        <p className="text-slate-600 mb-10 max-w-md">
          O endereço que você acessou não existe ou foi movido. Tente uma das páginas abaixo.
        </p>

        <nav aria-label="Páginas sugeridas" className="mb-10">
          <ul className="flex flex-wrap justify-center gap-3">
            {suggestions.map(s => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-cyan-400 hover:text-cyan-700 transition-colors"
                >
                  <Search size={14} aria-hidden="true" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LinkButton href="/" size="lg" variant="primary">
          <ArrowLeft size={16} aria-hidden="true" />
          Voltar ao início
        </LinkButton>
      </section>
    </MarketingLayout>
  )
}
