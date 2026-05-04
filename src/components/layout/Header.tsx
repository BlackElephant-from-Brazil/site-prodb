'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
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
        desc: 'Proteção de dados com RPO definido em contrato. Teste grátis 15 dias.',
      },
    ],
  },
  { label: 'Parceiros', href: '/seja-um-parceiro' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const [atHero, setAtHero] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => {
      setAtHero(window.scrollY < window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler, { passive: true })
    handler()
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const logoAccent = atHero ? 'text-cyan-400' : 'text-cyan-500'
  const logoBase = atHero ? 'text-white' : 'text-slate-900'

  return (
    <>
      {/* Fixed island header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 pointer-events-none px-3 md:px-4 lg:px-6"
        aria-label="Cabeçalho"
      >
        {/* Island pill — 4-layer Liquid Glass */}
        <div
          className={cn(
            'pointer-events-auto relative w-full lg:max-w-[920px]',
            'h-[52px] rounded-full overflow-hidden',
            'transition-all duration-500 ease-out',
            atHero
              ? 'border border-white/[0.16] shadow-[0_20px_60px_rgba(0,0,0,0.50),0_6px_16px_rgba(0,0,0,0.32)]'
              : 'border border-white/[0.55] shadow-[0_6px_24px_rgba(7,13,26,0.12),0_2px_6px_rgba(7,13,26,0.07)]'
          )}
          style={{ willChange: 'box-shadow' }}
        >
          {/* Layer 1: Distort — SVG turbulence refraction + blur */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: atHero
                ? `url('#lg-refract') blur(24px) saturate(200%) brightness(0.95)`
                : `url('#lg-soft') blur(24px) saturate(180%) brightness(1.06)`,
              WebkitBackdropFilter: atHero
                ? `blur(24px) saturate(200%) brightness(0.95)`
                : `blur(24px) saturate(180%) brightness(1.06)`,
            }}
          />

          {/* Layer 2: Tint */}
          <div
            className="absolute inset-0"
            style={{
              background: atHero
                ? 'linear-gradient(160deg, rgba(10,20,38,0.54) 0%, rgba(6,14,28,0.42) 100%)'
                : 'linear-gradient(160deg, rgba(255,255,255,0.82) 0%, rgba(248,252,255,0.70) 100%)',
            }}
          />

          {/* Layer 3: Specular edge lighting */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: atHero
                ? 'inset 0 1.5px 0 rgba(255,255,255,0.22), inset 1px 0 0 rgba(255,255,255,0.10), inset -1px 0 0 rgba(255,255,255,0.04), inset 0 -1.5px 0 rgba(0,0,0,0.20)'
                : 'inset 0 1.5px 0 rgba(255,255,255,0.96), inset 1px 0 0 rgba(255,255,255,0.52), inset -1px 0 0 rgba(255,255,255,0.26), inset 0 -1.5px 0 rgba(0,0,0,0.06)',
            }}
          />

          {/* Layer 4: Content */}
          <div className="relative z-10 flex h-full items-center justify-between pl-5 pr-2">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:rounded-full"
              aria-label="ProDB Tecnologia — início"
            >
              <span className={cn('font-black text-lg leading-none', logoAccent)}>Pro</span>
              <span className={cn('font-black text-lg leading-none', logoBase)}>DB</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 ml-6" aria-label="Navegação principal">
              {navItems.map(item =>
                item.mega ? (
                  <div key={item.label} ref={megaRef} className="relative">
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                        atHero
                          ? 'text-white/75 hover:text-white hover:bg-white/10'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                      )}
                      onClick={() => setMegaOpen(v => !v)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={cn('transition-transform duration-200', megaOpen && 'rotate-180')}
                      />
                    </button>

                    {/* Mega dropdown — Liquid Glass */}
                    {megaOpen && (
                      <div
                        className={cn(
                          'absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72',
                          'rounded-2xl border z-50 overflow-hidden',
                          'animate-fade-up',
                          atHero ? 'border-white/[0.16]' : 'border-slate-200/80'
                        )}
                        style={{
                          boxShadow: atHero
                            ? '0 24px 64px rgba(0,0,0,0.55), 0 6px 16px rgba(0,0,0,0.35)'
                            : '0 12px 36px rgba(7,13,26,0.14), 0 3px 8px rgba(7,13,26,0.08)',
                        }}
                      >
                        {/* Dropdown distort layer */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backdropFilter: atHero
                              ? `url('#lg-refract') blur(20px) saturate(180%) brightness(0.92)`
                              : `url('#lg-soft') blur(20px) saturate(160%) brightness(1.05)`,
                            WebkitBackdropFilter: atHero
                              ? `blur(20px) saturate(180%) brightness(0.92)`
                              : `blur(20px) saturate(160%) brightness(1.05)`,
                          }}
                        />
                        {/* Dropdown tint */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: atHero
                              ? 'linear-gradient(160deg, rgba(8,16,32,0.88) 0%, rgba(6,14,28,0.82) 100%)'
                              : 'linear-gradient(160deg, rgba(255,255,255,0.94) 0%, rgba(250,253,255,0.88) 100%)',
                          }}
                        />
                        {/* Dropdown specular */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            boxShadow: atHero
                              ? 'inset 0 1px 0 rgba(255,255,255,0.14), inset 1px 0 0 rgba(255,255,255,0.06)'
                              : 'inset 0 1px 0 rgba(255,255,255,0.90), inset 1px 0 0 rgba(255,255,255,0.40)',
                          }}
                        />
                        {/* Dropdown content */}
                        <div className="relative z-10 p-2">
                          {item.mega.map(sub => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                'flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors',
                                atHero ? 'hover:bg-white/10' : 'hover:bg-slate-50/80'
                              )}
                              onClick={() => setMegaOpen(false)}
                            >
                              <span className={cn('text-sm font-semibold', atHero ? 'text-white' : 'text-slate-900')}>
                                {sub.label}
                              </span>
                              <span className={cn('text-xs', atHero ? 'text-white/50' : 'text-slate-400')}>
                                {sub.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                      atHero
                        ? 'text-white/75 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center ml-auto pl-4 pr-0.5">
              <LinkButton href="/contato" size="sm" variant="primary">
                Falar com especialista
              </LinkButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden ml-auto mr-0.5',
                atHero ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              )}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>{/* end glass-content */}
        </div>{/* end island pill */}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto lg:hidden"
          style={{ paddingTop: 72 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{ background: 'rgba(6,14,28,0.90)' }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Content */}
          <nav className="relative z-10 flex flex-col gap-1 p-4 pt-6">
            {navItems.map(item =>
              item.mega ? (
                <div key={item.label}>
                  <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    {item.label}
                  </p>
                  {item.mega.map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-semibold text-white">{sub.label}</span>
                      <span className="text-sm text-white/50">{sub.desc}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="mt-6 flex flex-col gap-3 px-4 pt-4 border-t border-white/10">
              <LinkButton
                href="/contato"
                size="lg"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Falar com especialista
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
