import { cn } from '@/lib/cn'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark-secondary' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  loading?: boolean
}

type ButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<'button'>
type LinkButtonProps = ButtonBaseProps & ComponentPropsWithoutRef<typeof Link> & { href: string }

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full border transition-all focus-visible:outline-none cursor-pointer select-none whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-cyan-400 text-navy-950 border-transparent hover:bg-cyan-500 active:bg-cyan-500 active:shadow-none shadow-sm',
  secondary:
    'bg-transparent text-slate-900 border-slate-300 hover:border-slate-400 hover:bg-slate-100 active:bg-slate-200',
  ghost:
    'bg-transparent text-slate-700 border-transparent hover:bg-slate-100 active:bg-slate-200',
  'dark-secondary':
    'bg-navy-700 text-slate-50 border-navy-600 hover:bg-navy-600 hover:border-navy-500 active:bg-navy-700',
  danger:
    'bg-danger-500 text-white border-transparent hover:bg-red-600 active:bg-red-700 shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-4 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  xl: 'h-14 px-8 text-lg',
}

function Spinner() {
  return (
    <span
      className="animate-spin-slow h-4 w-4 rounded-full border-2 border-current border-t-transparent"
      aria-hidden="true"
    />
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Enviando…</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Enviando…</span>
        </>
      ) : (
        children
      )}
    </Link>
  )
}
