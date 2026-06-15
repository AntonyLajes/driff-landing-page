import { type CSSProperties, useEffect, useRef, useState } from 'react'

// Total sweep time scales with word count; the per-word timing follows an
// ease-out curve (fast at the start, decelerating toward the end).
const MS_PER_WORD = 130

/** Inline text highlighted by a single animated marker that sweeps left→right,
 *  flowing continuously from the first line to the last (seamless per-word
 *  handoff, so it reads as one stroke — not one marker per word). The sweep
 *  starts fast and gradually decelerates. Draws once the first time it enters
 *  the viewport and stays drawn (only a reload resets it). Honors
 *  prefers-reduced-motion via CSS. */
export function MarkerText({
  children,
  className = '',
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    if (drawn) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [drawn])

  // Keep the trailing space inside each word so the highlight stays continuous.
  const tokens = children.split(' ')
  const n = tokens.length
  const total = n * MS_PER_WORD
  // Time the marker reaches the start of word k, on an ease-out curve
  // (inverse of d(t)=1-(1-t)^2): early words fly by, later words slow down.
  const timeAt = (k: number) => total * (1 - Math.sqrt(1 - k / n))

  return (
    <span ref={ref} className={`${drawn ? 'marker-in' : ''} ${className}`}>
      {tokens.map((word, i) => {
        const start = timeAt(i)
        const duration = timeAt(i + 1) - start
        return (
          <span
            key={`${word}-${i}`}
            className="marker-word"
            style={
              { transitionDelay: `${start}ms`, transitionDuration: `${duration}ms` } as CSSProperties
            }
          >
            {i < tokens.length - 1 ? `${word} ` : word}
          </span>
        )
      })}
    </span>
  )
}
