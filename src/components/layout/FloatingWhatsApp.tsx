'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const WA_NUMBER = '5519932913150' // TODO: confirm WhatsApp number format
const WA_TEXT = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da ProDB.')

export function FloatingWhatsApp() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-6 right-4 z-60 flex items-end gap-2 md:bottom-8 md:right-6">
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors text-xs md:opacity-0 md:group-hover:opacity-100"
        aria-label="Fechar botão WhatsApp"
      >
        <X size={12} />
      </button>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_open', { location: 'floating_button' })}
        aria-label="Falar com a ProDB no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      >
        {/* WhatsApp icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.109.552 4.09 1.518 5.808L0 24l6.335-1.491A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.58-.495-5.08-1.36l-.364-.214-3.763.886.949-3.669-.234-.38A9.976 9.976 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        {/* Tooltip */}
        <span
          className="absolute right-16 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-2 text-xs font-medium text-white shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          Falar no WhatsApp
        </span>
      </a>
    </div>
  )
}
