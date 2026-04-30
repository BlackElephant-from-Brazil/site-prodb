'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { setConsent } from '@/lib/analytics'
import { Button } from '@/components/ui/Button'

type ConsentPrefs = { analytics: boolean; marketing: boolean }

const STORAGE_KEY = 'prodb-cookie-consent'

export function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState<ConsentPrefs>({ analytics: true, marketing: false })

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) { setShow(true); return }
      const saved = JSON.parse(stored) as ConsentPrefs
      setConsent(saved.analytics, saved.marketing)
    } catch {
      setShow(true)
    }
  }, [])

  function accept(analytics: boolean, marketing: boolean) {
    const p = { analytics, marketing }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
    setConsent(analytics, marketing)
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[110] bg-navy-900 border-t border-navy-700 text-slate-200 shadow-xl"
    >
      <div className="mx-auto max-w-[1184px] px-4 md:px-6 py-4">
        {!showDetails ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm leading-relaxed flex-1">
              Utilizamos cookies para melhorar sua experiência e analisar o uso do site. Consulte nossa{' '}
              <a href="/politica-de-cookies" className="underline hover:text-white">
                Política de Cookies
              </a>{' '}
              e a{' '}
              <a href="/politica-de-privacidade" className="underline hover:text-white">
                Política de Privacidade
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="text-sm underline text-slate-400 hover:text-white transition-colors"
              >
                Personalizar
              </button>
              <Button
                variant="dark-secondary"
                size="sm"
                onClick={() => accept(false, false)}
              >
                Rejeitar opcionais
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => accept(true, true)}
              >
                Aceitar todos
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">Preferências de cookies</h2>
              <button
                onClick={() => setShowDetails(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="Fechar preferências"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 h-4 w-4 rounded border-slate-500 text-cyan-400 cursor-not-allowed"
                  aria-label="Cookies necessários — sempre ativos"
                />
                <div>
                  <p className="font-medium text-white">Necessários <span className="text-xs text-slate-400 ml-1">(sempre ativos)</span></p>
                  <p className="text-slate-400">Essenciais para o funcionamento do site.</p>
                </div>
              </label>

              <label className={cn('flex items-start gap-3 cursor-pointer')}>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 rounded border-slate-500 text-cyan-400 cursor-pointer"
                  aria-label="Cookies de análise"
                />
                <div>
                  <p className="font-medium text-white">Análise</p>
                  <p className="text-slate-400">Nos ajuda a entender como o site é usado (Google Analytics 4).</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 rounded border-slate-500 text-cyan-400 cursor-pointer"
                  aria-label="Cookies de marketing"
                />
                <div>
                  <p className="font-medium text-white">Marketing</p>
                  <p className="text-slate-400">Permite exibir anúncios relevantes em outras plataformas.</p>
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-navy-700">
              <Button
                variant="dark-secondary"
                size="sm"
                onClick={() => accept(prefs.analytics, prefs.marketing)}
              >
                Salvar preferências
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => accept(true, true)}
              >
                Aceitar todos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
