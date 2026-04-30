'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/cn'
import { LinkButton } from '@/components/ui/Button'

const navItems = [
  { label: 'Empresa', href: '/empresa' },
  {
    label: 'Soluções',
    href: '#',
    mega: [
      {
        label: 'Servidores Cloud',
        href: '/servidores-cloud',
        desc: 'Infraestrutura gerenciada, alta disponibilidade e suporte 24/7.',
      },
      {
        label: 'Backup Gerenciado',
        href: '/backup',
        desc: 'Proteção de dados com RPO definido, a partir de R$ 99/mês.',
      },
    ],
  },
  { label: 'Parceiros', href: '/seja-um-parceiro' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-[background-color,backdrop-filter,box-shadow]',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white/70 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1184px] items-center justify-between gap-4 px-4 md:px-6 xl:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-navy-900 text-lg tracking-tight shrink-0 focus-visible:rounded-sm"
          aria-label="ProDB Tecnologia — início"
        >
          <span className="text-cyan-400 font-black">Pro</span>
          <span>DB</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navItems.map(item =>
            item.mega ? (
              <div key={item.label} className="relative" onMouseLeave={() => setMegaOpen(false)}>
                <button
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen(v => !v)}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform', megaOpen && 'rotate-180')}
                  />
                </button>
                {megaOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-lg p-3 z-50"
                    onMouseEnter={() => setMegaOpen(true)}
                  >
                    {item.mega.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        <span className="text-sm font-semibold text-slate-900">{sub.label}</span>
                        <span className="text-xs text-slate-500">{sub.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:+551932913150"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Ligar para a ProDB: (19) 3291-3150"
          >
            <Phone size={14} aria-hidden="true" />
            <span>(19) 3291-3150</span>
          </a>
          <LinkButton href="/contato" size="sm" variant="primary">
            Falar com especialista
          </LinkButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors lg:hidden"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-16 z-30 flex flex-col gap-1 bg-white p-4 overflow-y-auto"
          aria-label="Menu mobile"
        >
          {navItems.map(item =>
            item.mega ? (
              <div key={item.label}>
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
                {item.mega.map(sub => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-semibold text-slate-900">{sub.label}</span>
                    <span className="text-sm text-slate-500">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-3 px-4 pt-4 border-t border-slate-200">
            <a
              href="tel:+551932913150"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={16} /> (19) 3291-3150
            </a>
            <LinkButton href="/contato" size="lg" variant="primary" className="w-full" onClick={() => setMobileOpen(false)}>
              Falar com especialista
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  )
}
