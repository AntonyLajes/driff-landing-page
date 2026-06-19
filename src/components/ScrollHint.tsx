import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

/** Subtle "scroll" cue in the hero; fades out after the first scroll. */
export function ScrollHint({ label }: { label: string }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setHidden(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      className={`pointer-events-none flex flex-col items-center gap-1 text-muted-foreground transition-opacity duration-500 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{label}</span>
      <ChevronDown size={18} className="scroll-cue text-primary" />
    </div>
  )
}
