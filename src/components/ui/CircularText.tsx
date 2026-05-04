import { cn } from '@/lib/cn'

interface CircularTextProps {
  text: string
  radius?: number
  className?: string
  textClassName?: string
  centerContent?: React.ReactNode
}

export function CircularText({
  text,
  radius = 70,
  className,
  textClassName,
  centerContent,
}: CircularTextProps) {
  const size = radius * 2 + 40
  const circumference = 2 * Math.PI * radius
  const id = `circular-text-${radius}`

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      aria-label={text}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="absolute inset-0 animate-circular-rotate"
        aria-hidden="true"
      >
        <defs>
          <path
            id={id}
            d={`M ${size / 2},${size / 2 - radius} a ${radius},${radius} 0 1,1 -0.1,0`}
          />
        </defs>
        <text className={cn('fill-current text-slate-400', textClassName)}>
          <textPath
            href={`#${id}`}
            startOffset="0%"
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-sans)',
              letterSpacing: `${(circumference / text.length - 7).toFixed(1)}px`,
            }}
          >
            {text}
          </textPath>
        </text>
      </svg>

      {centerContent && (
        <div className="relative z-10">{centerContent}</div>
      )}
    </div>
  )
}
