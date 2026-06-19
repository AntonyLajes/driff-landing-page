import { type ReactNode, useEffect, useRef, useState } from 'react'

/**
 * Section wrapper that plays its descendants' `.assemble` choreography once,
 * the first time it scrolls into view (subtle, conventional reveal — no snap).
 * Sets `data-active="true"` and keeps it, so the entrance doesn't replay.
 */
export function Panel({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} data-active={active} className={`panel ${className}`}>
      {children}
    </div>
  )
}
