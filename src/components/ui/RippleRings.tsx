import { cn } from '@/lib/cn'

interface RippleRingsProps {
  className?: string
  color?: string
  count?: number
}

export function RippleRings({
  className,
  color = 'rgba(14,165,201,0.15)',
  count = 3,
}: RippleRingsProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              width: 280 + i * 120,
              height: 280 + i * 120,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: `1px solid ${color}`,
              animation: `ripple-ring ${2 + i * 0.8}s ease-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
