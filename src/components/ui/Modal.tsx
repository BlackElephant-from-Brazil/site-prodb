'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, title, description, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const prevFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      prevFocusRef.current = document.activeElement as HTMLElement
      dialog.showModal()
    } else {
      dialog.close()
      prevFocusRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onCancel = (e: Event) => { e.preventDefault(); onClose() }
    dialog.addEventListener('cancel', onCancel)
    return () => dialog.removeEventListener('cancel', onCancel)
  }, [onClose])

  if (!open) return null

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        'fixed inset-0 m-auto w-full max-w-[560px] rounded-2xl bg-white p-8 shadow-xl',
        'backdrop:bg-navy-950/60 backdrop:backdrop-blur-sm',
        'open:animate-fade-in',
        className
      )}
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        {title && (
          <h2 id="modal-title" className="text-xl font-bold text-slate-900 text-balance">
            {title}
          </h2>
        )}
        <button
          onClick={onClose}
          className="ml-auto -mt-1 -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>
      </div>
      {description && (
        <p id="modal-desc" className="mb-6 text-sm text-slate-600">
          {description}
        </p>
      )}
      {children}
    </dialog>
  )
}
