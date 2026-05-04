import { cn } from '@/lib/cn'

interface MarqueeStripProps {
  items: string[]
  className?: string
  itemClassName?: string
  speed?: 'slow' | 'normal' | 'fast'
}

const speedMap = {
  slow: '40s',
  normal: '28s',
  fast: '16s',
}

export function MarqueeStrip({
  items,
  className,
  itemClassName,
  speed = 'normal',
}: MarqueeStripProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-surface-card, #fff), transparent)' }} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-surface-card, #fff), transparent)' }} />

      <div
        className="flex gap-10 w-max"
        style={{ animation: `marquee ${speedMap[speed]} linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              'shrink-0 text-sm font-semibold tracking-wide text-slate-400 uppercase select-none',
              itemClassName
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
