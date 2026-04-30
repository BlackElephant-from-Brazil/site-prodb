import { cn } from '@/lib/cn'
import type { ComponentPropsWithoutRef } from 'react'

type CardVariant = 'default' | 'elevated' | 'outline' | 'dark'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: CardVariant
}

const variants: Record<CardVariant, string> = {
  default:  'bg-white border border-slate-200 shadow-sm',
  elevated: 'bg-white shadow-md',
  outline:  'bg-transparent border border-slate-200',
  dark:     'bg-navy-800 border border-navy-700',
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-2xl p-6 md:p-8', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}
