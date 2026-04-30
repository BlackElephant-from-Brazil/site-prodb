import { cn } from '@/lib/cn'
import type { ComponentPropsWithoutRef } from 'react'

type BadgeVariant =
  | 'default'
  | 'feature'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'accent-cyan'
  | 'accent-amber'
  | 'outline'

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default:       'bg-slate-100 text-slate-700 border border-slate-200',
  feature:       'bg-slate-100 text-slate-700 border border-slate-200',
  success:       'bg-success-100 text-emerald-800 border border-emerald-200',
  warning:       'bg-warning-100 text-amber-800 border border-amber-200',
  danger:        'bg-danger-100 text-red-700 border border-red-200',
  info:          'bg-info-100 text-blue-700 border border-blue-200',
  'accent-cyan': 'bg-cyan-100 text-cyan-800 border border-cyan-200',
  'accent-amber':'bg-amber-100 text-amber-800 border border-amber-200',
  outline:       'bg-transparent text-slate-600 border border-slate-300',
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
