import { Children, type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react'

/** Wraps each child so they rise in one-by-one when the group enters view.
 *  The wrapper carries the reveal animation, keeping card-hover transforms intact. */
export function Stagger({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${visible ? 'reveal-in' : ''} ${className}`}>
      {Children.map(children, (child, i) => (
        <div className="reveal-item h-full" style={{ '--reveal-index': i } as CSSProperties}>
          {child}
        </div>
      ))}
    </div>
  )
}
